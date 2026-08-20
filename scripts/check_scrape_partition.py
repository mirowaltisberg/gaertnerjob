"""Verify that every configured scraper worker receives a balanced term set."""

import argparse
import ast
from pathlib import Path

from scrape_partition import select_strided_chunk


def load_default_search_terms() -> list[str]:
    scraper_path = Path(__file__).with_name("scrape-jobs.py")
    tree = ast.parse(scraper_path.read_text(encoding="utf-8"))
    for node in tree.body:
        if not isinstance(node, ast.Assign):
            continue
        if not any(
            isinstance(target, ast.Name) and target.id == "DEFAULT_SEARCH_TERMS"
            for target in node.targets
        ):
            continue
        terms = ast.literal_eval(node.value)
        if isinstance(terms, list) and all(isinstance(term, str) for term in terms):
            return terms
    raise RuntimeError("DEFAULT_SEARCH_TERMS must be a literal string list")


def main() -> None:
    parser = argparse.ArgumentParser(description="Check balanced scraper chunk assignment")
    parser.add_argument("--total-chunks", type=int, default=5)
    args = parser.parse_args()

    terms = load_default_search_terms()
    chunks = [
        select_strided_chunk(terms, chunk, args.total_chunks)
        for chunk in range(args.total_chunks)
    ]
    counts = [len(chunk) for chunk in chunks]
    if not chunks or any(count == 0 for count in counts):
        raise SystemExit(f"scraper partition contains an empty chunk: {counts}")
    if max(counts) - min(counts) > 1:
        raise SystemExit(f"scraper partition is imbalanced: {counts}")

    assigned_indices = sorted(index for chunk in chunks for index, _ in chunk)
    if assigned_indices != list(range(1, len(terms) + 1)):
        raise SystemExit("scraper partition dropped or duplicated search terms")

    print(
        "Scraper partition check passed: "
        f"{len(terms)} terms across {args.total_chunks} non-empty chunks {counts}."
    )


if __name__ == "__main__":
    main()
