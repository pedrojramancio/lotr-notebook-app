import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Menu from './components/Menu';
import * as booksAPI from './api/booksApi';
import * as moviesAPI from './api/moviesApi';
import { loadBooks } from './actionCreators/books';
import { getMovies } from './actionCreators/movies';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    booksAPI.getBooks().then(data => dispatch(loadBooks(data)));
    moviesAPI.getMovies().then(data => dispatch(getMovies(data)));
  }, [dispatch]);

  return (
    <div className="app">
      <Menu />
    </div>
  );
};

export default App;
