import { GET_MOVIES, SET_MOVIES } from '../actionCreators/MoviesAction';

export default function movies(state = [], action) {
  switch (action.type) {
    case GET_MOVIES:
      return action.movies;
    case SET_MOVIES:
      return state.map(m => (m._id === action.movie._id ? action.movie : m));
    default:
      return state;
  }
}
