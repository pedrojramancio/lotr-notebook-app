import React from 'react';
import MovieList from '../components/MovieList';
import PageContent from '../components/PageContent';

const MoviesPage = () => {
  return (
    <PageContent name="Movies">
      <div>
        <MovieList
          title="Movies"
          filterBy={m => !(m.watched || m.bookmarked)}
          showRemove={false}
        />
        <MovieList
          title="Bookmarked"
          filterBy={m => m.bookmarked}
          showAddBookmark={false}
        />
        <MovieList
          title="Watched"
          filterBy={m => m.watched}
          showAddWatched={false}
        />
      </div>
    </PageContent>
  );
};

export default MoviesPage;
