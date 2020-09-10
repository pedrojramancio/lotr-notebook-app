import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Home/';
import MoviesPage from '../Movie';
import BookDetailPage from '../BookDetail';
import BooksPage from '../Book';
import CharacterDetailPage from '../CharacterDetail';
import CharactersPage from '../Characters';
import { loadBooksThunk } from '../Book/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooksThunk());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/Books/:id">
          <BookDetailPage />
        </Route>
        <Route path="/Books">
          <BooksPage />
        </Route>
        <Route path="/Character/:id">
          <CharacterDetailPage />
        </Route>
        <Route path="/Characters">
          <CharactersPage />
        </Route>
        characters
      </Switch>
    </BrowserRouter>
  );
};

export default App;
