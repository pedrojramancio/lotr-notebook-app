export const SET_CHARARCTERS_PAGINATION = 'SET_CHARARCTERS_PAGINATION';
export const SET_LOADING = 'SET_LOADING';

export function setCharactersPagination(page, total, limit, loading = false) {
  return { type: SET_CHARARCTERS_PAGINATION, page, total, limit, loading };
}

export function setLoading(loading) {
  return { type: SET_LOADING, loading };
}
