import React, { useState, useEffect } from 'react';
import { getMovies } from '../api/moviesApi';
import MovieList from '../components/MovieList';
import BookList from '../components/BookList';
import PageContent from '../components/PageContent';
import CharactersPaginatedList from '../components/CharactersPaginatedList';

const HomePage = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  useEffect(() => {
    getMovies().then(data => setBookmarkedMovies(data));
  }, []);

  return (
    <PageContent name="Home">
      <CharactersPaginatedList />
      <MovieList
        title={'Bookmarked Movies'}
        movies={bookmarkedMovies}
        setMovies={setBookmarkedMovies}
        filterBy={m => m.bookmarked}
        showAddBookmark={false}
        showAddWatched={false}
        showRemove={false}
        showVotation={false}
      />
      <BookList />
    </PageContent>
  );
};
export default HomePage;
