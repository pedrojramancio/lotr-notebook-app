import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import BookDetailPage from '../pages/BookDetailPage';
import BooksPage from '../pages/BooksPage';
import CharacterDetailPage from '../pages/CharacterDetailPage';
import CharactersPage from '../pages/CharactersPage';

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
