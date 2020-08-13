import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Menu from './components/Menu';
import { loadBooksThunk } from './actionCreators/BooksAction';
import { getMoviesThunk } from './actionCreators/MoviesAction';
import { loadCharactersThunk } from './actionCreators/CharactersAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooksThunk());
    dispatch(getMoviesThunk());
    dispatch(loadCharactersThunk(0, 10));
  }, [dispatch]);

  return (
    <div className="app">
      <Menu />
    </div>
  );
};

export default App;
