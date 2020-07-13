import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ title, books }) => {
  return (
    <div className="movie-list">
      <h3>
        <span>{title}</span>
      </h3>
      <ul>
        {books.map(book => {
          return (
            <li className="movie-list-item" key={book._id}>
              <div>{book.name}</div>
              <div>Review count: {book.reviews.length}</div>
              <Link to={'/books/' + book._id}>
                <button className="sort-button">
                  <i className="fa fa-newspaper-o"></i>
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
