export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';
export const SET_LOADING = 'SET_LOADING';

export function loadCharacters(characters, page, total, limit, loading) {
  return { type: LOAD_CHARACTERS, characters, page, total, limit, loading };
}

export function setLoading(loading) {
  return { type: SET_LOADING, loading };
}
