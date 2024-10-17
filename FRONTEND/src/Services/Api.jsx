import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Update the base URL to your backend server
});

export default api;