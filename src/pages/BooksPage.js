import React from 'react';
import BookList from '../components/BookList';
import PageContent from '../components/PageContent';

const BooksPage = () => {
  return (
    <PageContent name="Books">
      <div>
        <BookList />
      </div>
    </PageContent>
  );
};

export default BooksPage;
