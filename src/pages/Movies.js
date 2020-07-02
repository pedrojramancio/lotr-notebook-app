import React from 'react';
import MovieList from '../components/MovieList';
import { getMovies } from '../api/movies';

class Movies extends React.Component {
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
      return movie;
    });
    this.setState({ movies: newMovies });
  };

  addWatch = id => {
    const wacthedMovies = this.state.movies.map(movie => {
      if (movie._id === id) {
        movie.watched = true;
      }
      return movie;
    });
    this.setState({ movies: wacthedMovies });
  };

  remove = (id, listType) => {
    const removedMovies = this.state.movies.map(movie => {
      if (movie._id === id) {
        if (listType === 'Bookmarked') {
          movie.bookmarked = false;
        }
        if (listType === 'Watched') {
          movie.watched = false;
        }
      }
      return movie;
    });
    this.setState({ movies: removedMovies });
  };

  render() {
    const movies = this.state.movies;
    const rest = movies.filter(movie => !movie.watched && !movie.bookmarked);
    const watched = movies.filter(movie => movie.watched);
    const bookmarked = movies.filter(movie => movie.bookmarked);

    return (
      <div>
        <div className="page-title">
          <h1>The Lord of The Rings</h1>
          <h2>notebook app / movies</h2>
        </div>
        <MovieList
          title="Movies"
          movies={rest}
          onAddBookmark={this.addBookmark}
          onAddWatch={this.addWatch}
          onRemove={this.remove}
        />
        <MovieList
          title="Watched"
          movies={watched}
          onAddBookmark={this.addBookmark}
          onAddWatch={this.addWatch}
          onRemove={this.remove}
          typeList="Watched"
        />
        <MovieList
          title="Bookmarked"
          movies={bookmarked}
          onAddWatch={this.addWatch}
          onRemove={this.remove}
          typeList="Bookmarked"
        />
      </div>
    );
  }
}

export default Movies;
