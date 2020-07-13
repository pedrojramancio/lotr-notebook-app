import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import { getMovies, patchMovie } from '../api/moviesApi';

const TYPE_TEXT_MOVIES = 'Movies';
const TYPE_TEXT_WATCHED = 'Watched';
const TYPE_TEXT_BOOKMARKED = 'Bookmarked';

class MoviesPage extends Component {
  state = { movies: [] };

  componentDidMount() {
    getMovies().then(data => this.setState({ movies: data }));
  }

  updateMovie = (id, listType, value) => {
    const newMovie = { id, [listType]: value };
    patchMovie(newMovie).then(movie => {
      const newMovies = this.state.movies.map(item =>
        item._id === id ? movie : item
      );
      this.setState({ movies: newMovies });
    });
  };

  render() {
    const allMovies = this.state.movies;
    const leftMovies = allMovies.filter(
      movie => !movie.watched && !movie.bookmarked
    );
    const bookmarkedMovies = allMovies.filter(movie => movie.bookmarked);
    const watchedMovies = allMovies.filter(movie => movie.watched);

    return (
      <div>
        <div className="page-title">
          <h1>The Lord of The Rings</h1>
          <h2>notebook app / movies</h2>
        </div>
        <MovieList
          title={TYPE_TEXT_MOVIES}
          movies={leftMovies}
          onUpdateMovie={this.updateMovie}
          showAddBookmark={true}
          showAddWatched={true}
          showRemove={false}
        />
        <MovieList
          title={TYPE_TEXT_BOOKMARKED}
          movies={bookmarkedMovies}
          onUpdateMovie={this.updateMovie}
          showAddBookmark={false}
          showAddWatched={true}
          showRemove={true}
        />
        <MovieList
          title={TYPE_TEXT_WATCHED}
          movies={watchedMovies}
          onUpdateMovie={this.updateMovie}
          showAddBookmark={true}
          showAddWatched={false}
          showRemove={true}
        />
      </div>
    );
  }
}

export default MoviesPage;
