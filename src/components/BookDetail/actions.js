import * as API from '../../api/booksApi';

export const ADD_REVIEW = 'ADD_REVIEW';

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
