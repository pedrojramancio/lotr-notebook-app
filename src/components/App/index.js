import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Home/';
import MoviesPage from '../Movie';
import BookDetailPage from '../BookDetail';
import BooksPage from '../Book';
import CharacterDetailPage from '../../Characters/CharacterDetailPage';
import CharactersPage from '../../Characters/CharactersPage';

const App = () => {
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
