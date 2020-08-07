import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Menu from './components/Menu';
import * as CharacterAPI from './api/charactersApi';
import { loadBooksThunk } from './actionCreators/BooksAction';
import { getMoviesThunk } from './actionCreators/MoviesAction';
import { loadCharacters } from './actionCreators/CharactersAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooksThunk());
    dispatch(getMoviesThunk());
    CharacterAPI.getCharactersPaginated(0, 10).then(chars =>
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
