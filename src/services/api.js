import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000', // adjust as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
