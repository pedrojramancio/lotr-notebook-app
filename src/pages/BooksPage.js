import React from 'react';
import BookList from '../components/BookList';
import { getBooks } from '../api/booksApi';

const TYPE_TEXT_BOOKS = 'Books';

class BooksPage extends React.Component {
  state = { books: [] };

  componentDidMount() {
    getBooks().then(data => {
      this.setState({ books: data });
    });
  }

  render() {
    const retiviedBooks = this.state.books;

    return (
      <div>
        <div className="page-title">
          <h1>The Lord of The Rings</h1>
          <h2>notebook app / books</h2>
        </div>
        <BookList title={TYPE_TEXT_BOOKS} books={retiviedBooks} />
      </div>
    );
  }
}

export default BooksPage;
