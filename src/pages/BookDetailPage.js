import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { getBookDetail, addBookReview } from '../api/booksApi';
import PageContent from '../components/PageContent';

class BookDetailPage extends Component {
  state = {
    book: {},
    showForm: false,
    author: '',
    stars: 0,
    reviewText: '',
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    getBookDetail(id).then(data => this.setState({ book: data }));
  }

  toggleShowForm = () => {
    const showForm = !this.state.showForm;
    this.setState({ showForm });
  };

  submitReview = event => {
    event.preventDefault();

    const { book, author, stars, reviewText } = this.state;
    console.log(book, author, stars, reviewText);
    addBookReview(book._id, { author, stars, text: reviewText });
  };

  setAuthor(author) {
    this.setState({ author });
  }

  setStars(stars) {
    stars = parseInt(stars);
    if (stars >= 0 && stars <= 5) {
      this.setState({ stars });
    }
  }

  setReviewText(reviewText) {
    this.setState({ reviewText });
  }

  render() {
    const { book, showForm, author, stars, reviewText } = this.state;

    return (
      <PageContent name="Book Details">
        <div>
          <div className="page-title">
            <h3>
              _id: {book._id}
              <br />
              name: {book.name}
              <br />
              Review Count: {book.reviews && book.reviews.length}
              <button onClick={() => this.toggleShowForm()}>
                <i className="fa fa-plus"></i>
              </button>
            </h3>
            <div>
              {showForm && (
                <form onSubmit={this.submitReview}>
                  <label>Autor: </label>
                  <input
                    type="text"
                    value={author}
                    onChange={event => this.setAuthor(event.target.value)}
                  ></input>
                  <label>Starts: </label>
                  <input
                    type="number"
                    value={stars}
                    onChange={event => this.setStars(event.target.value)}
                  ></input>
                  <label>Text: </label>
                  <textarea
                    value={reviewText}
                    onChange={event => this.setReviewText(event.target.value)}
                  ></textarea>
                  <button type="submit">
                    <i className="fa fa-check"></i>
                  </button>
                </form>
              )}
            </div>
            {book.reviews && (
              <ul>
                {book.reviews.map(review => {
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
                        <button>
                          <i className="fa fa-pencil"></i>
                        </button>
                        <button>
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </PageContent>
    );
  }
}

export default withRouter(BookDetailPage);
