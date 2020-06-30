import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="page-title">
        <h1>The Lord of The Rings</h1>
        <h2>notebook app</h2>
      </div>
      <div className="movie-list">
        <h3>
          <span>Bookmarked</span>
          <button className="sort-button">
            <i className="fa fa-sort-amount-desc"></i>
          </button>
          <button className="sort-button">
            <i className="fa fa-sort-alpha-asc"></i>
          </button>
        </h3>
        <ul>
          <li className="movie-list-item">
            <div>The Two Towers</div>
            <div>Academy Awards: 2</div>
            <span>
              <button>
                <i className="fa fa-times"></i>
              </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
