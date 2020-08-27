import CharactersReducer from '../Characters/CharactersReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  CharacterState: CharactersReducer,
});
