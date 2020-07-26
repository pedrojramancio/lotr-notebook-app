import React, { useState, useEffect } from 'react';
import { getMovies, patchMovie } from '../api/moviesApi';
import MovieList from '../components/MovieList';
import { getBooks } from '../api/booksApi';
import BookList from '../components/BookList';
import PageContent from '../components/PageContent';
import CharactersPaginatedList from '../components/CharactersPaginatedList';

const HomePage = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getMovies().then(data =>
      setBookmarkedMovies(data.filter(m => m.bookmarked))
    );
    getBooks().then(data => setBooks(data));
  }, []);

  const updateMovie = (id, listType, value) => {
    const newMovie = { id, [listType]: value };
    patchMovie(newMovie).then(movie => {
      const newMovies = this.state.movies.map(item =>
        item._id === id ? movie : item
      );
      setBookmarkedMovies(newMovies);
    });
  };
  return (
    <PageContent name="Home">
      <CharactersPaginatedList />
      <MovieList
        title={'Bookmarked'}
        movies={bookmarkedMovies}
        onUpdateMovie={updateMovie}
        showVotation={false}
      />
      <BookList title="Books" books={books} />
    </PageContent>
  );
};
export default HomePage;
