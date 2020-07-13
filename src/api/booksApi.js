import axios from 'axios';

const tokenApi = process.env.REACT_APP_AUTH_KEY;
const urlBase = 'http://localhost:5000';
const headerApi = { Authorization: `Bearer ${tokenApi}` };

export const getBooks = () => {
  return axios
    .get(`${urlBase}/books`, { headers: headerApi })
    .then(res => res.data)
    .catch(err => console.log(`Error at getBooks call: ${err}`));
};

export const getBookDetail = id => {
  return axios
    .get(`${urlBase}/books/${id}`, { headers: headerApi })
    .then(res => res.data)
    .catch(err => console.log(`Error at getBooksDetail call: ${err}`));
};
