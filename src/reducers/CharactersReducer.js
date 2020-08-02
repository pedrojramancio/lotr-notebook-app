import { LOAD_CHARACTERS } from '../actionCreators/CharactersAction';

export default function characters(state = [], action) {
  switch (action.type) {
    case LOAD_CHARACTERS:
      return {
        characters: action.characters,
        page: action.page,
        total: action.total,
        limit: action.limit,
      };
    default:
      return state;
  }
}
