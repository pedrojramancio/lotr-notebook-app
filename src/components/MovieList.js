import React, { useState } from 'react';

const SORT_BY = {
  NAME: {
    getSort: (a, b) => a.name.localeCompare(b.name),
  },
  ACADEMY_AWARDS: {
    getSort: (a, b) => b.academyAwardWins - a.academyAwardWins,
  },
};

const MovieList = props => {
  const {
    title,
    movies,
    onUpdateMovie,
    showAddBookmark,
    showAddWatched,
    showRemove,
    showVotation,
    onVoteMovie,
  } = props;
  const [sortBy, setSortBy] = useState(SORT_BY.ACADEMY_AWARDS);
  const sortedMovies = movies.slice().sort(sortBy.getSort);

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
      <div>
        {sortedMovies.map(movie => {
          return (
            <div className="movie-list-item" key={movie._id}>
              <div>{movie.name}</div>
              <div>Academy Awards: {movie.academyAwardWins}</div>
              <div>
                Score: {movie.score}
                {showVotation && (
                  <span>
                    <button onClick={() => onVoteMovie(movie._id, 'up')}>
                      <i className="fa fa-thumbs-up"></i>
                    </button>
                    <button onClick={() => onVoteMovie(movie._id, 'down')}>
                      <i className="fa fa-thumbs-down"></i>
                    </button>
                  </span>
                )}
              </div>

              {showAddBookmark && (
                <span>
                  <button
                    onClick={() => onUpdateMovie(movie._id, 'bookmarked', true)}
                  >
                    <i className="fa fa-star"></i>
                  </button>
                </span>
              )}
              {showAddWatched && (
                <span>
                  <button
                    onClick={() => onUpdateMovie(movie._id, 'watched', true)}
                  >
                    <i className="fa fa-check"></i>
                  </button>
                </span>
              )}
              {showRemove && (
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
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
