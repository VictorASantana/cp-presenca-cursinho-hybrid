import axios from 'axios';

const BASE_URL = 'https://eddd-131-196-29-204.ngrok-free.app'

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
