import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Home/HomePage';
import MoviesPage from '../Movie/MoviesPage';
import BookDetailPage from '../Book/BookDetailPage';
import BooksPage from '../Book/BooksPage';
import CharacterDetailPage from '../Characters/CharacterDetailPage';
import CharactersPage from '../Characters/CharactersPage';

const LOTRRouter = () => {
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

export default LOTRRouter;
