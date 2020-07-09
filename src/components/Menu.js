import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import MoviesPage from '../pages/MoviesPage';
import BooksPage from '../pages/BooksPage';

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
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/books">
            <BooksPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Menu;
