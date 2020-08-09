import React, { useState } from 'react';
import { useParams } from 'react-router';
import PageContent from '../components/PageContent';
import { useDispatch } from 'react-redux';
import * as ReduxActions from '../actionCreators/BooksAction';
import { useSelector } from 'react-redux';

const BookDetailPage = () => {
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [reviewId, setReviewId] = useState('');
  const [author, setAuthor] = useState('');
  const [stars, setStars] = useState(0);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const books = useSelector(state => state.BookState);
  const currentBook = books.find(book => book._id === id);

  const handleChangeStars = event => {
    const stars = parseInt(event.target.value);
    if (stars >= 1 && stars <= 5) {
      setStars(stars);
    }
    return;
  };

  const handleChange = callback => event => {
    callback(event.target.value);
  };

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const submitReview = event => {
    event.preventDefault();

    if (!reviewId) {
      dispatch(
        ReduxActions.addReviewThunk({
          bookId: currentBook._id,
          author,
          stars,
          text,
        })
      );
    } else {
      dispatch(
        ReduxActions.updateReviewThunk({
          bookId: currentBook._id,
          reviewId,
          author,
          stars,
          text,
        })
      );
    }
    dispatch(ReduxActions.loadBooksThunk());
    toggleShowForm();
    cleanForm();
  };

  const createReview = () => {
    cleanForm();
    if (!showForm) {
      toggleShowForm();
    }
  };

  const updateReview = (bookId, reviewId, author, stars, text) => {
    if (showForm === false) {
      toggleShowForm();
    }
    setReviewId(reviewId);
    setAuthor(author);
    handleChangeStars(stars);
    setText(text);
  };

  const cleanForm = () => {
    setReviewId('');
    setAuthor('');
    setStars(0);
    setText('');
  };

  const removeReview = (bookId, reviewIdParam) => {
    if (reviewIdParam === reviewId) {
      cleanForm();
      toggleShowForm();
    }
    dispatch(ReduxActions.removeReviewThunk(bookId, reviewIdParam));
    dispatch(ReduxActions.loadBooksThunk());
  };

  return (
    <PageContent name="Book Reviews">
      <div>
        <div className="page-title">
          <div>Book id: {currentBook._id}</div>
          <div>Book Title: {currentBook.name}</div>
          <div>
            Review Count: {currentBook.reviews.length}
            <button onClick={createReview}>
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <div>
            {showForm && (
              <form onSubmit={submitReview}>
                <div>review id: {reviewId} </div>
                <label>Autor: </label>
                <input
                  required={true}
                  type="text"
                  value={author}
                  onChange={handleChange(setAuthor)}
                ></input>
                <label>Starts: </label>
                <input
                  required={true}
                  type="number"
                  value={stars}
                  onChange={handleChangeStars}
                ></input>
                <label>Text: </label>
                <textarea
                  required={true}
                  value={text}
                  onChange={handleChange(setText)}
                ></textarea>
                <button type="submit">
                  <i className="fa fa-check"></i>
                </button>
              </form>
            )}
          </div>

          <ol>
            {currentBook.reviews.map(review => {
              return (
                <li key={review._id}>
                  <div>
                    _id: {review._id}
                    <br />
                    Autor: {review.author}
                    <br />
                    Stars: {review.stars}
                    <br />
                    Review text: {review.text}
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        updateReview(
                          currentBook._id,
                          review._id,
                          review.author,
                          review.stars,
                          review.text
                        )
                      }
                    >
                      <i className="fa fa-pencil"></i>
                    </button>
                    <button
                      onClick={() => removeReview(currentBook._id, review._id)}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </PageContent>
  );
};

export default BookDetailPage;
