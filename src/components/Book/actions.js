import * as API from '../../api/booksApi';

export const LOAD_BOOKS = 'LOAD_BOOKS';

function loadBooks(books) {
  return { type: LOAD_BOOKS, books };
}

export const loadBooksThunk = () => dispatch => {
  return API.getBooks().then(books => dispatch(loadBooks(books)));
};
