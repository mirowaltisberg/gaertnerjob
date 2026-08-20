"""Verify that unproven artifact claims cannot cross the publisher boundary."""

from datetime import date
from pathlib import Path
import runpy
from types import SimpleNamespace


publisher = runpy.run_path(Path(__file__).with_name("publish-jobs.py"))
to_db_row = publisher["to_db_row"]
calculate_snapshot_delta = publisher["calculate_snapshot_delta"]
delete_stale_jobs = publisher["delete_stale_jobs"]
fetch_existing_jobs = publisher["fetch_existing_jobs"]
enforce_safety_threshold = publisher["enforce_safety_threshold"]
pipeline_error = publisher["PipelineError"]
trade = publisher["TRADE"]
id_prefix = publisher["ID_PREFIX"]
delete_batch_size = publisher["DELETE_BATCH_SIZE"]
select_page_size = publisher["SELECT_PAGE_SIZE"]
default_min_jobs = publisher["DEFAULT_MIN_JOBS"]
default_retention_ratio = publisher["DEFAULT_MIN_RETENTION_RATIO"]

fixture = {
    "trade": "gaertner",
    "id": "scraped-gaertner-6d0866a52b28",
    "title": "Gärtner EFZ",
    "company": "Private employer",
    "location": "Zürich, Zürich",
    "type": "Vollzeit",
    "workload": "100%",
    "description": "Controlled test data",
    "datePosted": "2026-08-20",
    "jobUrl": "https://jobs.example.ch/garten-1",
    "source": "indeed",
    "salary": "CHF 120000",
    "isRemote": True,
}

row = to_db_row(fixture, date(2026, 8, 20))
assert row["salary"] is None, "unverified salary reached the database row"
assert row["is_remote"] is None, "unverified remote status reached the database row"
assert row["type"] == "Vollzeit", "explicit job type was unexpectedly discarded"
assert row["workload"] == "100%", "explicit workload was unexpectedly discarded"

cutoff = date(2026, 7, 16)
enforce_safety_threshold(
    default_min_jobs,
    {},
    cutoff,
    default_min_jobs,
    default_retention_ratio,
)

try:
    enforce_safety_threshold(
        default_min_jobs - 1,
        {},
        cutoff,
        default_min_jobs,
        default_retention_ratio,
    )
except pipeline_error:
    pass
else:
    raise AssertionError("snapshot one below the calibrated absolute floor was accepted")

recent_inventory_size = default_min_jobs * 3
dynamic_required = (recent_inventory_size + 1) // 2
assert dynamic_required > default_min_jobs
recent_existing = {
    f"recent-{index}": date(2026, 8, 20)
    for index in range(recent_inventory_size)
}
try:
    enforce_safety_threshold(
        dynamic_required - 1,
        recent_existing,
        cutoff,
        default_min_jobs,
        default_retention_ratio,
    )
except pipeline_error:
    pass
else:
    raise AssertionError("snapshot below the dynamic recent-inventory floor was accepted")


class FakeQuery:
    def __init__(self, client, table_name):
        self.client = client
        self.table_name = table_name
        self.operation = ""
        self.eq_filters = []
        self.in_filter = None
        self.order_column = None
        self.bounds = (0, 999)

    def select(self, *_args, **_kwargs):
        self.operation = "select"
        return self

    def delete(self, **_kwargs):
        self.operation = "delete"
        return self

    def eq(self, column, value):
        self.eq_filters.append((column, value))
        return self

    def in_(self, column, values):
        self.in_filter = (column, list(values))
        return self

    def order(self, column):
        self.order_column = column
        return self

    def range(self, start, end):
        self.bounds = (start, end)
        return self

    def execute(self):
        assert self.table_name == "jobs"
        if self.operation == "select":
            rows = self.client.rows
            for column, value in self.eq_filters:
                rows = [row for row in rows if row.get(column) == value]
            start, end = self.bounds
            self.client.select_calls.append(
                {"eq": list(self.eq_filters), "order": self.order_column}
            )
            return SimpleNamespace(
                data=[
                    {"id": row["id"], "date_posted": row.get("date_posted")}
                    for row in rows[start : end + 1]
                ]
            )
        if self.operation == "delete":
            self.client.delete_calls.append(
                {"eq": list(self.eq_filters), "in": self.in_filter}
            )
            return SimpleNamespace(data=[])
        raise AssertionError("unexpected fake query operation")


class FakeClient:
    def __init__(self, rows=None):
        self.rows = list(rows or [])
        self.select_calls = []
        self.delete_calls = []

    def table(self, table_name):
        return FakeQuery(self, table_name)


retained_id = f"{id_prefix}retained"
current_stale_id = f"{id_prefix}stale"
legacy_id = "gen-legacy-row"
invalid_id = "invalid legacy id !"
other_trade_id = "other-trade-row"
client = FakeClient(
    [
        {"id": retained_id, "trade": trade, "date_posted": "2026-08-20"},
        {"id": current_stale_id, "trade": trade, "date_posted": "2026-08-19"},
        {"id": legacy_id, "trade": trade, "date_posted": "2026-08-18"},
        {"id": invalid_id, "trade": trade, "date_posted": None},
        {"id": other_trade_id, "trade": f"other-{trade}", "date_posted": "2026-08-20"},
    ]
)
existing = fetch_existing_jobs(client)
assert set(existing) == {retained_id, current_stale_id, legacy_id, invalid_id}
assert other_trade_id not in existing, "another trade crossed the scoped fetch"
assert all(("trade", trade) in call["eq"] for call in client.select_calls)
assert all(call["order"] == "id" for call in client.select_calls)

paginated_client = FakeClient(
    [
        {
            "id": f"legacy-page-{index}",
            "trade": trade,
            "date_posted": "2026-08-20",
        }
        for index in range(select_page_size + 1)
    ]
    + [
        {
            "id": "other-trade-page-row",
            "trade": f"other-{trade}",
            "date_posted": "2026-08-20",
        }
    ]
)
paginated_existing = fetch_existing_jobs(paginated_client)
assert len(paginated_existing) == select_page_size + 1
assert "other-trade-page-row" not in paginated_existing
assert len(paginated_client.select_calls) == 2, "exhaustive fetch did not paginate"
assert all(
    ("trade", trade) in call["eq"] for call in paginated_client.select_calls
)
assert all(call["order"] == "id" for call in paginated_client.select_calls)

retained, stale = calculate_snapshot_delta(
    existing,
    {retained_id, f"{id_prefix}new"},
)
assert retained == {retained_id}
assert stale == set(existing) - retained
assert stale == {current_stale_id, legacy_id, invalid_id}

delete_stale_jobs(client, stale)
assert len(client.delete_calls) == 1
delete_call = client.delete_calls[0]
assert ("trade", trade) in delete_call["eq"]
assert delete_call["in"] == ("id", sorted(stale))
assert other_trade_id not in delete_call["in"][1]

batch_client = FakeClient()
batch_ids = {f"legacy-{index}" for index in range(delete_batch_size + 1)}
delete_stale_jobs(batch_client, batch_ids)
assert len(batch_client.delete_calls) == 2, "stale deletes were not batched"
assert all(("trade", trade) in call["eq"] for call in batch_client.delete_calls)
assert {
    job_id
    for call in batch_client.delete_calls
    for job_id in call["in"][1]
} == batch_ids

try:
    delete_stale_jobs(FakeClient(), {123})
except pipeline_error:
    pass
else:
    raise AssertionError("non-string stale ID was not rejected")

print("Publisher boundary check passed.")
