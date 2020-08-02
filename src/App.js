import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Menu from './components/Menu';
import * as booksAPI from './api/booksApi';
import * as moviesAPI from './api/moviesApi';
import * as CharacterAPI from './api/charactersApi';
import { loadBooks } from './actionCreators/BooksAction';
import { getMovies } from './actionCreators/MoviesAction';
import { loadCharacters } from './actionCreators/CharactersAction';
import {
  INITIAL_PAGE,
  DEFAULT_PAGE_LIMIT,
} from './components/CharactersPaginatedList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    booksAPI.getBooks().then(data => dispatch(loadBooks(data)));
    moviesAPI.getMovies().then(data => dispatch(getMovies(data)));
    CharacterAPI.getCharactersPaginated(
      INITIAL_PAGE,
      DEFAULT_PAGE_LIMIT
    ).then(chars =>
      dispatch(loadCharacters(chars.data, chars.page, chars.total, chars.limit))
    );
  }, [dispatch]);

  return (
    <div className="app">
      <Menu />
    </div>
  );
};

export default App;
