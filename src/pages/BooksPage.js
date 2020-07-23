import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import { getBooks } from '../api/booksApi';
import PageContent from '../components/PageContent';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(data => {
      setBooks(data);
    });
  }, []);

  return (
    <PageContent name="Books">
      <div>
        <BookList title="Books" books={books} />
      </div>
    </PageContent>
  );
};

export default BooksPage;
