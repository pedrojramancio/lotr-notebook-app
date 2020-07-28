import React, { useState, useEffect } from 'react';
import { getMovies } from '../api/moviesApi';
import MovieList from '../components/MovieList';
import { getBooks } from '../api/booksApi';
import BookList from '../components/BookList';
import PageContent from '../components/PageContent';
import CharactersPaginatedList from '../components/CharactersPaginatedList';

const HomePage = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getMovies().then(data => setBookmarkedMovies(data));
    getBooks().then(data => setBooks(data));
  }, []);

  return (
    <PageContent name="Home">
      <CharactersPaginatedList />
      <MovieList
        title={'Bookmarked'}
        movies={bookmarkedMovies}
        setMovies={setBookmarkedMovies}
        filterBy={m => m.bookmarked}
        showAddBookmark={false}
        showAddWatched={false}
        showRemove={false}
        showVotation={false}
      />
      <BookList title="Books" books={books} />
    </PageContent>
  );
};
export default HomePage;
