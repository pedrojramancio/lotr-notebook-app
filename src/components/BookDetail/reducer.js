import { ADD_REVIEW } from './actions';

export default function books(state = [], action) {
  switch (action.type) {
    case ADD_REVIEW:
      const newReview = action.review;
      const books = state.map(book => {
        if (book._id === newReview.bookID) {
          return book.reviews.contat(newReview);
        }
        return book;
      });
      return books;

    default:
      return state;
  }
}
