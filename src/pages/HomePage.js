import React, { Component } from 'react';
import { getMovies, patchMovie } from '../api/moviesApi';
import MovieList from '../components/MovieList';

import { getBooks } from '../api/booksApi';
import BookList from '../components/BookList';
import PageContent from '../components/PageContent';

class HomePage extends Component {
  state = { movies: [], books: [] };

  componentDidMount() {
    getMovies().then(data => this.setState({ movies: data }));
    getBooks().then(data => {
      this.setState({ books: data });
    });
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
    const retiviedBooks = this.state.books;
    return (
      <PageContent name="Home">
        <div>
          <MovieList
            title={'Bookmarked'}
            movies={bookmarkedMovies}
            onUpdateMovie={this.updateMovie}
            showVotation={false}
          />
          <BookList title="Books" books={retiviedBooks} />
        </div>
      </PageContent>
    );
  }
}
export default HomePage;
