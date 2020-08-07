import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMovie, voteMovie } from '../actionCreators/MoviesAction';

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

  const update = (id, listType, value) => {
    dispatch(updateMovie({ id, [listType]: value }));
  };

  const remover = (nomeLista, id) => {
    dispatch(updateMovie({ id, [nomeLista.toLowerCase()]: false }));
  };

  const vote = (id, option) => {
    dispatch(voteMovie(id, option));
  };

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
                  <button onClick={() => update(movie._id, 'bookmarked', true)}>
                    <i className="fa fa-star"></i>
                  </button>
                </span>
              )}
              {showAddWatched && (
                <span>
                  <button onClick={() => update(movie._id, 'watched', true)}>
                    <i className="fa fa-check"></i>
                  </button>
                </span>
              )}
              {showRemove && (
                <span>
                  <button onClick={() => remover(title, movie._id)}>
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
