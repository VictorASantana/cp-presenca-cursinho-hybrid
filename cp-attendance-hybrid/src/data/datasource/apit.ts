import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL = 'https://ecd0-131-196-30-248.ngrok-free.app'

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    const authData = await AsyncStorage.getItem('@AuthData');
    if (authData) {
      const _authData = JSON.parse(authData);
      const token = _authData.token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, 
)

api.interceptors.response.use(
  async function (response) {
    return response
  },
  async function (error) {
    if (error.response && error.response.status === 401) {
      await AsyncStorage.removeItem('@AuthData');
    }
  }
)

export default api;
