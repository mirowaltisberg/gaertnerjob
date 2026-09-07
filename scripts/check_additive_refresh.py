"""Check that the reviewed additive refresh cannot cascade-delete applications."""
from datetime import date
from pathlib import Path
import runpy
from types import SimpleNamespace

publisher = runpy.run_path(Path(__file__).with_name("publish-jobs.py"))
trade = publisher["TRADE"]
id_prefix = publisher["ID_PREFIX"]
fixture = {
    "trade": trade,
    "id": f"{id_prefix}bbbbbbbbbbbb",
    "title": "Gärtner EFZ" if trade == "gaertner" else "Sanitärinstallateur EFZ",
    "company": "Testbetrieb",
    "location": "Zürich, Zürich",
    "type": "Vollzeit", "workload": "100%",
    "description": "Kontrollierte Testdaten",
    "datePosted": date.today().isoformat(),
    "jobUrl": "https://jobs.example.ch/test", "source": "indeed",
}
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

    def upsert(self, rows, **_kwargs):
        self.operation = "upsert"
        self.upsert_rows = rows
        return self

    def limit(self, size):
        self.bounds = (0, size - 1)
        return self

    def single(self):
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
        if self.table_name == "trade_scrape_metadata":
            if self.operation == "upsert":
                self.client.metadata = self.upsert_rows
            return SimpleNamespace(data=self.client.metadata)
        assert self.table_name == "jobs"
        if self.operation == "upsert":
            by_id = {row["id"]: row for row in self.client.rows}
            by_id.update({row["id"]: row for row in self.upsert_rows})
            self.client.rows = list(by_id.values())
            return SimpleNamespace(data=[])

        if self.operation == "select":
            rows = self.client.rows
            for column, value in self.eq_filters:
                rows = [row for row in rows if row.get(column) == value]
            start, end = self.bounds
            self.client.select_calls.append(
                {"eq": list(self.eq_filters), "order": self.order_column}
            )
            return SimpleNamespace(
                count=len(rows),
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
        self.metadata = {}

    def table(self, table_name):
        return FakeQuery(self, table_name)


protected_id = f"{id_prefix}application-linked"
client = FakeClient([
    {"id": protected_id, "trade": trade, "date_posted": "2025-01-01"},
    {"id": f"{id_prefix}aaaaaaaaaaaa", "trade": trade, "date_posted": "2025-01-01"},
])
published, pruned = publisher["publish"](
    client, [fixture], 35, 1, 0.5, preserve_existing=True,
)
assert (published, pruned) == (1, 0)
assert client.delete_calls == [], "additive refresh issued a delete"
assert protected_id in {item["id"] for item in client.rows}
assert len(client.rows) == 3
assert client.metadata["total_jobs"] == 3
print("Additive refresh preserves historical jobs and linked applications.")
