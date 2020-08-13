import React from 'react';
import MovieList from '../components/MovieList';
import BookList from '../components/BookList';
import PageContent from '../components/PageContent';
import CharactersPaginatedList from '../components/CharactersPaginatedList';

const HomePage = () => {
  return (
    <PageContent name="Home">
      <CharactersPaginatedList />
      <MovieList
        title={'Bookmarked Movies'}
        filterBy={m => m.bookmarked}
        showAddBookmark={false}
        showAddWatched={false}
        showRemove={false}
        showVotation={false}
      />
      <BookList filterBy={book => book.reviews.length > 0} />
    </PageContent>
  );
};
export default HomePage;
