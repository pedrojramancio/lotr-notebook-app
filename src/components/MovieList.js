import React, { useState } from 'react';
import * as moviesAPI from '../api/moviesApi';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from '../actionCreators/MoviesAction';

const SORT_BY = {
  NAME: {
    getSort: (a, b) => a.name.localeCompare(b.name),
  },
  ACADEMY_AWARDS: {
    getSort: (a, b) => b.academyAwardWins - a.academyAwardWins,
  },
};

const MovieList = ({
  title,
  filterBy,
  showAddBookmark = true,
  showAddWatched = true,
  showRemove = true,
  showVotation = true,
}) => {
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState(SORT_BY.ACADEMY_AWARDS);

  const movies = useSelector(state => state.MovieState);
  const sortedMovies = movies.filter(filterBy).sort(sortBy.getSort);

  const updateMovie = (id, listType, value) =>
    moviesAPI
      .patchMovie({ id, [listType]: value })
      .then(movie => dispatch(setMovies(movie)));

  const vote = (id, option) =>
    moviesAPI.voteMovie(id, option).then(movie => dispatch(setMovies(movie)));

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
                    <button onClick={() => vote(movie._id, 'up')}>
                      <i className="fa fa-thumbs-up"></i>
                    </button>
                    <button onClick={() => vote(movie._id, 'down')}>
                      <i className="fa fa-thumbs-down"></i>
                    </button>
                  </span>
                )}
              </div>

              {showAddBookmark && (
                <span>
                  <button
                    onClick={() => updateMovie(movie._id, 'bookmarked', true)}
                  >
                    <i className="fa fa-star"></i>
                  </button>
                </span>
              )}
              {showAddWatched && (
                <span>
                  <button
                    onClick={() => updateMovie(movie._id, 'watched', true)}
                  >
                    <i className="fa fa-check"></i>
                  </button>
                </span>
              )}
              {showRemove && (
                <span>
                  <button
                    onClick={() =>
                      updateMovie(
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
