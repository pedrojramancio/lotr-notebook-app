import React from 'react';
import MovieList from '../components/MovieList';
import { getMovies, patchMovie } from '../api/moviesApi';

const TYPE_TEXT_MOVIES = 'Movies';
const TYPE_TEXT_WATCHED = 'Watched';
const TYPE_TEXT_BOOKMARKED = 'Bookmarked';

class MoviesPage extends React.Component {
  state = { movies: [] };

  componentDidMount() {
    getMovies().then(data => {
      this.setState({ movies: data });
    });
  }

  addBookmark = id => {
    const newMovies = this.state.movies.map(movie => {
      if (movie._id === id) {
        movie.bookmarked = true;
      }
      patchMovie({
        id: movie._id,
        bookmarked: movie.bookmarked,
      }).then(console.log('addbookmark: ' + movie));

      return movie;
    });
    this.setState({ movies: newMovies });
  };

  addWatch = id => {
    const wacthedMovies = this.state.movies.map(movie => {
      if (movie._id === id) {
        movie.watched = true;
      }
      patchMovie({
        id: movie._id,
        watched: movie.watched,
      }).then(console.log('addWatch: ' + movie));
      return movie;
    });
    this.setState({ movies: wacthedMovies });
  };

  remove = (id, title) => {
    const removedMovies = this.state.movies.map(movie => {
      if (movie._id === id) {
        if (title === TYPE_TEXT_BOOKMARKED) {
          movie.bookmarked = false;
        }
        if (title === TYPE_TEXT_WATCHED) {
          movie.watched = false;
        }
      }
      patchMovie({
        id: movie._id,
        bookmarked: movie.bookmarked,
        watched: movie.watched,
      }).then(console.log('remove: ' + movie));
      return movie;
    });
    this.setState({ movies: removedMovies });
  };

  render() {
    const movies = this.state.movies;
    const leftMovies = movies.filter(
      movie => !movie.watched && !movie.bookmarked
    );
    const watchedMovies = movies.filter(movie => movie.watched);
    const bookmarkedMovies = movies.filter(movie => movie.bookmarked);

    return (
      <div>
        <div className="page-title">
          <h1>The Lord of The Rings</h1>
          <h2>notebook app / movies</h2>
        </div>
        <MovieList
          title={TYPE_TEXT_MOVIES}
          books={leftMovies}
          onAddBookmark={this.addBookmark}
          onAddWatch={this.addWatch}
          onRemove={this.remove}
        />
        <MovieList
          title={TYPE_TEXT_WATCHED}
          books={watchedMovies}
          onAddBookmark={this.addBookmark}
          onAddWatch={this.addWatch}
          onRemove={this.remove}
        />
        <MovieList
          title={TYPE_TEXT_BOOKMARKED}
          books={bookmarkedMovies}
          onAddBookmark={this.addBookmark}
          onAddWatch={this.addWatch}
          onRemove={this.remove}
        />
      </div>
    );
  }
}

export default MoviesPage;
