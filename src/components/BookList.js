import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookList = ({ title = 'Books', filterBy = undefined }) => {
  const books = useSelector(state => state.BookState);
  const filteredBooks = filterBy ? books.filter(filterBy) : books;

  return (
    <div className="movie-list">
      <h3>
        <span>{title}</span>
      </h3>
      <ul>
        {Array.isArray(filteredBooks) &&
          filteredBooks.map(book => {
            return (
              <li className="movie-list-item" key={book._id}>
                <Link to={'/books/' + book._id}>
                  <div>{book.name}</div>
                </Link>
                <div>Review count: {book.reviews.length}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default BookList;
