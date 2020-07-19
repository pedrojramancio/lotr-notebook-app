import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import BooksPage from '../pages/BooksPage';
import BookDetailPage from '../pages/BookDetailPage';
import CharactersPage from '../pages/CharactersPage';

const Menu = () => {
  return (
    <Router>
      <div className="menu">
        <h3>Menu</h3>
        <ul className="menu-items">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="menu-item">
            <Link to="/books">Books</Link>
          </li>
          <li className="menu-item">
            <Link to="/characters">Characters</Link>
          </li>
        </ul>
        <div className="page-title">
          <h3>The Lord of The Rings</h3>
        </div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/books/:id">
            <BookDetailPage />
          </Route>
          <Route path="/books">
            <BooksPage />
          </Route>
          <Route path="/characters">
            <CharactersPage />
          </Route>
          characters
        </Switch>
      </div>
    </Router>
  );
};

export default Menu;
