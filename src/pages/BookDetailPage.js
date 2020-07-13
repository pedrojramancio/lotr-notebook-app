import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { getBookDetail } from '../api/booksApi';

class BookDetailPage extends Component {
  state = {
    book: {},
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    getBookDetail(id).then(data => this.setState({ book: data }));
  }

  render() {
    const book = this.state.book;

    return (
      <div>
        <div className="page-title">
          <h1>Book Detail Page</h1>
          <h3>_id: {book._id}</h3>
          <h3>name: {book.name}</h3>
          <h3>Review Count: {book.reviews && book.reviews.length}</h3>
          {book.reviews &&
            book.reviews.map(review => {
              return (
                <div>
                  <div>Autor: {review.autor}</div>
                  <div>text: {review.text}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(BookDetailPage);
