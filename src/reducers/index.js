import { combineReducers } from 'redux';
import books from './books';
import movies from './movies';

export default combineReducers({
  books,
  movies,
});
