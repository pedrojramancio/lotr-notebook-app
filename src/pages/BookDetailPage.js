import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
  getBookDetail,
  addBookReview,
  updateBookReview,
  removeBookReview,
} from '../api/booksApi';
import PageContent from '../components/PageContent';

class ReviewsPage extends Component {
  state = {
    bookId: '',
    bookName: '',
    reviews: [],
    showForm: false,
    reviewId: '',
    author: '',
    stars: 0,
    text: '',
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    getBookDetail(id).then(book => {
      this.setState({ bookId: book._id });
      this.setState({ bookName: book.name });
      this.setState({ reviews: book.reviews });
    });
  }

  toggleShowForm = () => {
    const showForm = !this.state.showForm;
    this.setState({ showForm });
  };

  submitReview = event => {
    event.preventDefault();

    const { bookId, reviewId, author, stars, text } = this.state;
    const reviews = this.state.reviews;
    let newReviews = [];
    if (!reviewId) {
      addBookReview(bookId, { author, stars, text }).then(review => {
        newReviews = reviews.concat(review);
        this.setState({ reviews: newReviews });
      });
    } else {
      updateBookReview(bookId, reviewId, { author, stars, text }).then(
        updatedReview => {
          newReviews = reviews.map(r => {
            if (r._id === updatedReview._id) {
              r.author = updatedReview.author;
              r.stars = updatedReview.stars;
              r.text = updatedReview.text;
            }
            return r;
          });
          this.setState({ reviews: newReviews });
        }
      );
    }
    this.toggleShowForm();
    this.cleanForm();
  };

  createReview = () => {
    this.cleanForm();
    if (!this.state.showForm) {
      this.toggleShowForm();
    }
  };
  updateReview = (bookId, reviewId, author, stars, text) => {
    if (this.state.showForm === false) {
      this.toggleShowForm();
    }
    this.setState({ reviewId });
    this.setState({ author });
    this.setState({ stars });
    this.setState({ text });
  };

  cleanForm() {
    this.setState({ reviewId: '' });
    this.setState({ author: '' });
    this.setState({ stars: 0 });
    this.setState({ text: '' });
  }

  removeReview = (bookId, reviewId) => {
    if (reviewId === this.state.reviewId) {
      this.cleanForm();
      this.toggleShowForm();
    }
    removeBookReview(bookId, reviewId).then(data => {
      const reviews = this.state.reviews;
      const filteredReviews = reviews.filter(r => r._id !== data.deleted);
      this.setState({ reviews: filteredReviews });
    });
  };

  setAuthor(author) {
    this.setState({ author });
  }

  setStars(stars) {
    stars = parseInt(stars);
    if (stars >= 1 && stars <= 5) {
      this.setState({ stars });
    }
  }

  setText(text) {
    this.setState({ text });
  }

  render() {
    const {
      bookId,
      bookName,
      reviews,
      showForm,
      author,
      stars,
      text,
      reviewId,
    } = this.state;

    return (
      <PageContent name="Book Reviews">
        <div>
          <div className="page-title">
            <div>Book id: {bookId}</div>
            <div>Book Title: {bookName}</div>
            <div>
              Review Count: {reviews.length}
              <button onClick={this.createReview}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
            <div>
              {showForm && (
                <form onSubmit={this.submitReview}>
                  <div>review id: {reviewId} </div>
                  <label>Autor: </label>
                  <input
                    required={true}
                    type="text"
                    value={author}
                    onChange={event => this.setAuthor(event.target.value)}
                  ></input>
                  <label>Starts: </label>
                  <input
                    required={true}
                    type="number"
                    value={stars}
                    onChange={event => this.setStars(event.target.value)}
                  ></input>
                  <label>Text: </label>
                  <textarea
                    required={true}
                    value={text}
                    onChange={event => this.setText(event.target.value)}
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
                      Autor: {review.author}
                      <br />
                      Stars: {review.stars}
                      <br />
                      Review text: {review.text}
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          this.updateReview(
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
                      <button
                        onClick={() => this.removeReview(bookId, review._id)}
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
  }
}

export default withRouter(ReviewsPage);
