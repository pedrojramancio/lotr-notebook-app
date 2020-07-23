import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { getMovies, patchMovie, voteMovie } from '../api/moviesApi';
import PageContent from '../components/PageContent';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(data => setMovies(data));
  }, []);

  const updateMovie = (id, listType, value) => {
    const newMovie = { id, [listType]: value };
    patchMovie(newMovie).then(movie => {
      const newMovies = movies.map(item => (item._id === id ? movie : item));
      setMovies(newMovies);
    });
  };

  const vote = (id, option) => {
    voteMovie(id, option).then(movie => {
      const votedMovies = this.state.movies.map(item =>
        item._id === id ? movie : item
      );
      this.setState({ movies: votedMovies });
    });
  };

  const allMovies = movies;
  const leftMovies = allMovies.filter(
    movie => !movie.watched && !movie.bookmarked
  );
  const bookmarkedMovies = allMovies.filter(movie => movie.bookmarked);
  const watchedMovies = allMovies.filter(movie => movie.watched);

  return (
    <PageContent name="Movies">
      <div>
        <MovieList
          title="Movies"
          movies={leftMovies}
          onUpdateMovie={updateMovie}
          showAddBookmark={true}
          showAddWatched={true}
          showRemove={false}
          showVotation={true}
          onVoteMovie={vote}
        />
        <MovieList
          title="Bookmarked"
          movies={bookmarkedMovies}
          onUpdateMovie={updateMovie}
          showAddBookmark={false}
          showAddWatched={true}
          showRemove={true}
          showVotation={true}
          onVoteMovie={vote}
        />
        <MovieList
          title="Watched"
          movies={watchedMovies}
          onUpdateMovie={updateMovie}
          showAddBookmark={true}
          showAddWatched={false}
          showRemove={true}
          showVotation={true}
          onVoteMovie={vote}
        />
      </div>
    </PageContent>
  );
};

export default MoviesPage;
