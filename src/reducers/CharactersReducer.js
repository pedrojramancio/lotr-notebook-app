import {
  LOAD_CHARACTERS,
  SET_LOADING,
} from '../actionCreators/CharactersAction';

export default function characters(state = [], action) {
  switch (action.type) {
    case LOAD_CHARACTERS:
      return {
        characters: action.characters,
        page: action.page,
        total: action.total,
        limit: action.limit,
        loading: action.loading,
      };
    case SET_LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}
