import { SET_CHARARCTERS_PAGINATION, SET_LOADING } from './CharactersActions';

export default function characters(state = [], action) {
  switch (action.type) {
    case SET_CHARARCTERS_PAGINATION:
      return {
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
