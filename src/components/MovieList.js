import React, { useState } from 'react';

const SORT_BY = {
  NAME: 'name',
  ACADEMY_AWARDS: 'academyAwardWins',
};

const sortMovies = (movieA, movieB, sortBy) => {
  if (sortBy === SORT_BY.ACADEMY_AWARDS) {
    return movieB[SORT_BY.ACADEMY_AWARDS] - movieA[SORT_BY.ACADEMY_AWARDS];
  } else {
    return movieA[SORT_BY.NAME].localeCompare(movieB[SORT_BY.NAME]);
  }
};

const MovieList = ({ title, movies, onUpdateMovie }) => {
  const [sortBy, setSortBy] = useState(SORT_BY.ACADEMY_AWARDS);
  const sortedMovies = movies
    .slice()
    .sort((movieA, movieB) => sortMovies(movieA, movieB, sortBy));

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
                <button
                  onClick={() => onUpdateMovie(movie._id, 'bookmarked', true)}
                >
                  <i className="fa fa-star"></i>
                </button>
              </span>
              <span>
                <button
                  onClick={() => onUpdateMovie(movie._id, 'watched', true)}
                >
                  <i className="fa fa-check"></i>
                </button>
              </span>
              <span>
                <button
                  onClick={() =>
                    onUpdateMovie(
                      movie._id,
                      title === 'Bookmarked' ? 'bookmarked' : 'watched',
                      false
                    )
                  }
                >
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
