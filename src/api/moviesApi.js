import axios from 'axios';

const tokenApi = process.env.REACT_APP_AUTH_KEY;
const urlBase = 'http://localhost:5000';
const headerApi = { Authorization: `Bearer ${tokenApi}` };

export const getMovies = () => {
  return axios
    .get(`${urlBase}/movies`, { headers: headerApi })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(`Errors at getMovies call: ${err}`);
    });
};

export const patchMovie = ({ id, bookmarked, watched }) => {
  return axios
    .patch(
      `${urlBase}/movies/${id}`,
      { bookmarked, watched },
      { headers: headerApi }
    )
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(`Errors at patchMovies call: ${err}`);
    });
};
