import {
  LOAD_BOOKS,
  UPDATE_REVIEW,
  ADD_REVIEW,
} from '../actionCreators/BooksAction';

export default function books(state = [], action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.books;
    case UPDATE_REVIEW:
      const updatedReview = action.review;
      const updatedBooks = action.books.map(book => {
        if (book._id === updatedReview.bookID) {
          return book.reviews.map(r =>
            r._id === updatedReview._id ? updatedReview : r
          );
        }
        return book;
      });
      return updatedBooks;
    case ADD_REVIEW:
      const newReview = action.review;
      const newBooks = action.books.map(book => {
        if (book._id === newReview.bookID) {
          return book.reviews.contat(newReview);
        }
        return book;
      });
      return newBooks;

    default:
      return state;
  }
}
