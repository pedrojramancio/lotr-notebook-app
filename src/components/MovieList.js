import React from 'react';

const MovieList = ({ title, movies, onAddBookmark, onAddWatch, onRemove }) => {
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
        {movies.map(movie => {
          return (
            <li className="movie-list-item" key={movie._id}>
              <div>{movie.name}</div>
              <div>Academy Awards: {movie.academyAwardWins}</div>
              <span>
                <button onClick={() => onAddBookmark(movie._id)}>
                  <i className="fa fa-star"></i>
                </button>
              </span>
              <span>
                <button onClick={() => onAddWatch(movie._id)}>
                  <i className="fa fa-check"></i>
                </button>
              </span>
              <span>
                <button onClick={() => onRemove(movie._id, title)}>
                  <i className="fa fa-times"></i>
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
