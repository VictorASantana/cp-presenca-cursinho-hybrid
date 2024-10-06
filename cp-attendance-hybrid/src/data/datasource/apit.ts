import axios from 'axios';

const BASE_URL = ' https://83f4-131-196-28-230.ngrok-free.app'

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
