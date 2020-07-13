import React, { Component } from 'react';
import { getMovies, patchMovie } from '../api/moviesApi';
import MovieList from '../components/MovieList';

class HomePage extends Component {
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
    const bookmarkedMovies = allMovies.filter(movie => movie.bookmarked);
    return (
      <div>
        <div className="page-title">
          <h1>The Lord of The Rings</h1>
          <h2>notebook app / movies</h2>
        </div>
        <MovieList
          title={'Bookmarked'}
          movies={bookmarkedMovies}
          onUpdateMovie={this.updateMovie}
        />
      </div>
    );
  }
}
export default HomePage;
