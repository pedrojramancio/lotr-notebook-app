import * as CharacterAPI from '../api/charactersApi';

export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';
export const SET_LOADING = 'SET_LOADING';

function loadCharacters(characters, page, total, limit, loading = false) {
  return { type: LOAD_CHARACTERS, characters, page, total, limit, loading };
}

export function setLoading(loading) {
  return { type: SET_LOADING, loading };
}

export const loadCharactersThunk = (page, limit) => dispatch => {
  return CharacterAPI.getCharactersPaginated(0, 10).then(chars =>
    dispatch(loadCharacters(chars.data, chars.page, chars.total, chars.limit))
  );
};
