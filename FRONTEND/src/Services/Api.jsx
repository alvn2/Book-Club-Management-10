<<<<<<< HEAD
import axios from "axios";

// Create an Axios instance with the base URL of the Flask API
const api = axios.create({
  baseURL: "http://localhost:5000/", // Adjust with your Flask server URL
});

export default api;
=======
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Update the base URL to your backend server
});

export default api;
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727
