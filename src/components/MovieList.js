import React, { Component } from 'react';

const SORT_BY = {
  NAME: {
    getSort: (a, b) => a.name.localeCompare(b.name),
  },
  ACADEMY_AWARDS: {
    getSort: (a, b) => b.academyAwardWins - a.academyAwardWins,
  },
};

class MovieList extends Component {
  state = {
    sortBy: SORT_BY.ACADEMY_AWARDS,
  };

  setSortBy = sortType => {
    this.setState({ sortBy: sortType });
  };

  render() {
    const { sortBy } = this.state;
    const { title, movies, onUpdateMovie } = this.props;
    const sortedMovies = movies.slice().sort(sortBy.getSort);

    return (
      <div className="movie-list">
        <h3>
          <span>{title}</span>
          <button
            className="sort-button"
            onClick={() => this.setSortBy(SORT_BY.ACADEMY_AWARDS)}
          >
            <i className="fa fa-sort-amount-desc"></i>
          </button>
          <button
            className="sort-button"
            onClick={() => this.setSortBy(SORT_BY.NAME)}
          >
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
  }
}

export default MovieList;
