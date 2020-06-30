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

  render() {
    const movies = this.state.movies;

    return (
      <div>
        <div className="page-title">
          <h1>The Lord of The Rings</h1>
          <h2>notebook app / movies</h2>
        </div>
        <MovieList title="Movies" movies={movies} />
        <MovieList title="Watched" movies={movies} />
        <MovieList title="Bookmarked" movies={movies} />
      </div>
    );
  }
}

export default Movies;
