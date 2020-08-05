import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import MoviesReducer from './MoviesReducer';
import CharactersReducer from './CharactersReducer';

export default combineReducers({
  BookState: BooksReducer,
  MovieState: MoviesReducer,
  CharacterState: CharactersReducer,
});
