import * as API from '../api/booksApi';

export const LOAD_BOOKS = 'LOAD_BOOKS';
export const ADD_REVIEW = 'ADD_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

function loadBooks(books) {
  return { type: LOAD_BOOKS, books };
}

export const loadBooksThunk = () => dispatch => {
  return API.getBooks().then(books => dispatch(loadBooks(books)));
};

function addReview(review) {
  return { type: ADD_REVIEW, review };
}

export const addReviewThunk = review => dispatch => {
  const { author, stars, text } = review;
  return API.addBookReview(review.bookId, {
    author,
    stars,
    text,
  }).then(returnedReview => dispatch(addReview(returnedReview)));
};

function updateReview(review) {
  return { type: UPDATE_REVIEW, review };
}

export const updateReviewThunk = review => dispatch => {
  const { author, stars, text } = review;
  return API.updateBookReview(review.bookId, review._id, {
    author,
    stars,
    text,
  }).then(returnedReview => dispatch(updateReview(returnedReview)));
};

function removeReview(review) {
  return { type: UPDATE_REVIEW, review };
}

export const removeReviewThunk = (bookId, reviewId) => dispatch => {
  return API.removeBookReview(bookId, reviewId).then(data =>
    dispatch(removeReview({ bookId, _id: reviewId }))
  );
};
