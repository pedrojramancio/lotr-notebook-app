import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 60000,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_AUTH_KEY}` },
});

export default instance;
