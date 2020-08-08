import * as API from '../api/booksApi';

export const LOAD_BOOKS = 'LOAD_BOOKS';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const ADD_REVIEW = 'ADD_REVIEW';

function loadBooks(books) {
  return { type: LOAD_BOOKS, books };
}

export function updateReview(books, review) {
  return { type: UPDATE_REVIEW, books, review };
}

export function addReview(books, review) {
  return { type: ADD_REVIEW, books, review };
}

export const loadBooksThunk = () => dispatch => {
  return API.getBooks().then(books => dispatch(loadBooks(books)));
};
