import React from 'react';
import BookList from '../components/BookList';
import { getBooks } from '../api/booksApi';
import PageContent from '../components/PageContent';

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
      <PageContent name="Books">
        <div>
          <BookList title={TYPE_TEXT_BOOKS} books={retiviedBooks} />
        </div>
      </PageContent>
    );
  }
}

export default BooksPage;
