import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as booksAPI from '../api/booksApi';
import PageContent from '../components/PageContent';
import { useDispatch } from 'react-redux';
import { loadBooks } from '../actionCreators/BooksAction';
import { useSelector } from 'react-redux';

const BookDetailPage = () => {
  const { id } = useParams();
  const [bookId, setBookId] = useState('');
  const [bookName, setBookName] = useState('');
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [reviewId, setReviewId] = useState('');
  const [author, setAuthor] = useState('');
  const [stars, setStarsB] = useState(0);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const books = useSelector(state => state.BooksReducer);

  useEffect(() => {
    const currentBook = books.filter(book => book._id === id)[0];
    if (currentBook) {
      setBookId(currentBook._id);
      setBookName(currentBook.name);
      setReviews(currentBook.reviews);
    }
  }, [id, books]);

  const setStars = stars => {
    stars = parseInt(stars);
    if (stars >= 1 && stars <= 5) {
      setStarsB(stars);
    }
    return;
  };

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const submitReview = event => {
    event.preventDefault();

    let newReviews = [];
    if (!reviewId) {
      booksAPI.addBookReview(bookId, { author, stars, text }).then(review => {
        newReviews = reviews.concat(review);
        setReviews(newReviews);
        booksAPI.getBooks().then(data => dispatch(loadBooks(data)));
      });
    } else {
      booksAPI
        .updateBookReview(bookId, reviewId, { author, stars, text })
        .then(updatedReview => {
          newReviews = reviews.map(r => {
            if (r._id === updatedReview._id) {
              r.author = updatedReview.author;
              r.stars = updatedReview.stars;
              r.text = updatedReview.text;
            }
            return r;
          });
          setReviews(newReviews);
          booksAPI.getBooks().then(data => dispatch(loadBooks(data)));
        });
    }
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
    setStars(stars);
    setText(text);
  };

  const cleanForm = () => {
    setReviewId('');
    setAuthor('');
    setStarsB(0);
    setText('');
  };

  const removeReview = (bookId, reviewIdParam) => {
    if (reviewIdParam === reviewId) {
      cleanForm();
      toggleShowForm();
    }
    booksAPI.removeBookReview(bookId, reviewIdParam).then(data => {
      const filteredReviews = reviews.filter(r => r._id !== data.deleted);
      setReviews(filteredReviews);
    });
    booksAPI.getBooks().then(data => dispatch(loadBooks(data)));
  };

  return (
    <PageContent name="Book Reviews">
      <div>
        <div className="page-title">
          <div>Book id: {bookId}</div>
          <div>Book Title: {bookName}</div>
          <div>
            Review Count: {reviews.length}
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
                  onChange={event => setAuthor(event.target.value)}
                ></input>
                <label>Starts: </label>
                <input
                  required={true}
                  type="number"
                  value={stars}
                  onChange={event => setStars(event.target.value)}
                ></input>
                <label>Text: </label>
                <textarea
                  required={true}
                  value={text}
                  onChange={event => setText(event.target.value)}
                ></textarea>
                <button type="submit">
                  <i className="fa fa-check"></i>
                </button>
              </form>
            )}
          </div>

          <ol>
            {reviews.map(review => {
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
                          bookId,
                          review._id,
                          review.author,
                          review.stars,
                          review.text
                        )
                      }
                    >
                      <i className="fa fa-pencil"></i>
                    </button>
                    <button onClick={() => removeReview(bookId, review._id)}>
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
