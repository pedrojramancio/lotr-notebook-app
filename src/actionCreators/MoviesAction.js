import * as API from '../api/moviesApi';

export const GET_MOVIES = 'GET_MOVIES';
export const SET_MOVIE = 'SET_MOVIES';

export function getMovies(movies) {
  return { type: GET_MOVIES, movies };
}

export const getMoviesThunk = () => dispatch => {
  return API.getMovies().then(movies => dispatch(getMovies(movies)));
};

export function setMovie(movie) {
  return { type: SET_MOVIE, movie };
}

export const updateMovie = movie => dispatch => {
  return API.patchMovie(movie).then(updatedMovie =>
    dispatch(setMovie(updatedMovie))
  );
};

export const voteMovie = (id, option) => dispatch => {
  return API.voteMovie(id, option).then(movie => dispatch(setMovie(movie)));
};
