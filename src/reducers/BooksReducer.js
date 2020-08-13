import {
  LOAD_BOOKS,
  UPDATE_REVIEW,
  ADD_REVIEW,
  REMOVE_REVIEW,
} from '../actionCreators/BooksAction';

export default function books(state = [], action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.books;

    case ADD_REVIEW:
      const newReview = action.review;
      const newBooks = state.map(book => {
        if (book._id === newReview.bookID) {
          return book.reviews.contat(newReview);
        }
        return book;
      });
      return newBooks;

    case UPDATE_REVIEW:
      const updatedReview = action.review;
      const updatedBooks = state.map(book => {
        if (book._id === updatedReview.bookID) {
          return book.reviews.map(r =>
            r._id === updatedReview._id ? updatedReview : r
          );
        }
        return book;
      });
      return updatedBooks;
    case REMOVE_REVIEW:
      const removedReview = action.review;
      const books = state.map(book => {
        if (book._id === removedReview.bookId) {
          return book.reviews.filter(r => r._id !== removedReview._id);
        }
        return book;
      });
      return books;

    default:
      return state;
  }
}
