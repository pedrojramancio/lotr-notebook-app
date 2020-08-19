import axios from 'axios';

const apiUrl = 'http://localhost:5000';
const token = process.env.REACT_APP_API_TOKEN;
const headers = {
  Authorization: `Bearer ${token}`,
};

export const getAllMovies = () => {
  return axios.get(`${apiUrl}/movies`, { headers }).then(res => res.data);
};
