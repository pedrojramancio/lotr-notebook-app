export const LOAD_BOOKS = 'LOAD_BOOKS';

export function loadBooks(books) {
  return { type: LOAD_BOOKS, books };
}
