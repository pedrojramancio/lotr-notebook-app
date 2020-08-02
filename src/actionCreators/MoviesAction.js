export const GET_MOVIES = 'GET_MOVIES';
export const SET_MOVIES = 'SET_MOVIES';

export function getMovies(movies) {
  return { type: GET_MOVIES, movies };
}

export function setMovies(movie) {
  return { type: SET_MOVIES, movie };
}
