import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import MoviesReducer from './MoviesReducer';

export default combineReducers({
  BooksReducer,
  MoviesReducer,
});
