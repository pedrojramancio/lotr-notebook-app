import React, { useState } from 'react';

const SORT_BY = {
  NAME: 'name',
  ACADEMY_AWARDS: 'academyAwardWins',
};

const getSortedMovies = (movies, sortBy) => {
  if (sortBy === SORT_BY.ACADEMY_AWARDS) {
    return movies
      .slice()
      .sort((a, b) => b[SORT_BY.ACADEMY_AWARDS] - a[SORT_BY.ACADEMY_AWARDS]);
  } else {
    return movies
      .slice()
      .sort((a, b) => a[SORT_BY.NAME].localeCompare(b[SORT_BY.NAME]));
  }
};

const MovieList = ({ title, movies, onAddBookmark, onAddWatch, onRemove }) => {
  const [sortBy, setSortBy] = useState(SORT_BY.ACADEMY_AWARDS);
  const sortedMovies = getSortedMovies(movies, sortBy);

  return (
    <div className="movie-list">
      <h3>
        <span>{title}</span>
        <button
          className="sort-button"
          onClick={() => setSortBy(SORT_BY.ACADEMY_AWARDS)}
        >
          <i className="fa fa-sort-amount-desc"></i>
        </button>
        <button className="sort-button" onClick={() => setSortBy(SORT_BY.NAME)}>
          <i className="fa fa-sort-alpha-asc"></i>
        </button>
      </h3>
      <ul>
        {sortedMovies.map(movie => {
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
