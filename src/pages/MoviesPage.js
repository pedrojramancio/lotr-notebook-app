import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { getMovies } from '../api/moviesApi';
import PageContent from '../components/PageContent';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(data => setMovies(data));
  }, []);

  return (
    <PageContent name="Movies">
      <div>
        <MovieList
          title="Movies"
          movies={movies}
          setMovies={setMovies}
          filterBy={m => !(m.watched || m.bookmarked)}
          showRemove={false}
        />
        <MovieList
          title="Bookmarked"
          movies={movies}
          setMovies={setMovies}
          filterBy={m => m.bookmarked}
          showAddBookmark={false}
        />
        <MovieList
          title="Watched"
          movies={movies}
          setMovies={setMovies}
          filterBy={m => m.watched}
          showAddWatched={false}
        />
      </div>
    </PageContent>
  );
};

export default MoviesPage;
