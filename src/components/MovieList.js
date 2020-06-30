import React from 'react';

const MovieList = props => {
  return (
    <div className="movie-list">
      <h3>
        <span>{props.title}</span>
        <button className="sort-button">
          <i className="fa fa-sort-amount-desc"></i>
        </button>
        <button className="sort-button">
          <i className="fa fa-sort-alpha-asc"></i>
        </button>
      </h3>
      <ul>
        <li className="movie-list-item">
          <div>The Fellowship Of The Ring</div>
          <div>Academy Awards: 4</div>
          <span>
            <button>
              <i className="fa fa-star"></i>
            </button>
          </span>
          <span>
            <button>
              <i className="fa fa-check"></i>
            </button>
          </span>
          <span>
            <button>
              <i className="fa fa-times"></i>
            </button>
          </span>
        </li>
        <li className="movie-list-item">
          <div>The Two Towers</div>
          <div>Academy Awards: 2</div>
          <span>
            <button>
              <i className="fa fa-star"></i>
            </button>
          </span>
          <span>
            <button>
              <i className="fa fa-check"></i>
            </button>
          </span>
        </li>
        <li className="movie-list-item">
          <div>The Return Of The King</div>
          <div>Academy Awards: 11</div>
          <span>
            <button>
              <i className="fa fa-star"></i>
            </button>
          </span>
          <span>
            <button>
              <i className="fa fa-check"></i>
            </button>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MovieList;
