import React from 'react';

const BookList = ({ title, books }) => {
  return (
    <div className="movie-list">
      <h3>
        <span>{title}</span>
        <button className="sort-button">
          <i className="fa fa-sort-amount-desc"></i>
        </button>
        <button className="sort-button">
          <i className="fa fa-sort-alpha-asc"></i>
        </button>
      </h3>
      <ul>
        {books.map(book => {
          return (
            <li className="movie-list-item" key={book._id}>
              <div>{book.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
