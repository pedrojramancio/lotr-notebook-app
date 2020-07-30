import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Menu from './components/Menu';
import { getBooks } from './api/booksApi';
import { loadBooks } from './actions/actionCreators';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getBooks().then(data => dispatch(loadBooks(data)));
  }, [dispatch]);

  return (
    <div className="app">
      <Menu />
    </div>
  );
};

export default App;
