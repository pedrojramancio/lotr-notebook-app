import React from 'react';
import MovieList from '../components/MovieList';

const Movies = () => {
  return (
    <div>
      <div className="page-title">
        <h1>The Lord of The Rings</h1>
        <h2>notebook app / movies</h2>
      </div>
      <MovieList title="Movies" />
      <MovieList title="Watched" />
      <MovieList title="Bookmarked" />
    </div>
  );
};

export default Movies;
