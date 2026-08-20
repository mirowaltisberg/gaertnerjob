"""Pure helpers for assigning scraper search terms to CI chunks."""

from collections.abc import Sequence
from typing import TypeVar


T = TypeVar("T")


def select_strided_chunk(
    items: Sequence[T],
    chunk: int,
    total_chunks: int,
) -> list[tuple[int, T]]:
    """Return one balanced, deterministic chunk with one-based source indices."""
    if total_chunks < 1:
        raise ValueError("total_chunks must be positive")
    if chunk < 0 or chunk >= total_chunks:
        raise ValueError("chunk must be in the range 0..total_chunks-1")
    return list(enumerate(items, start=1))[chunk::total_chunks]
