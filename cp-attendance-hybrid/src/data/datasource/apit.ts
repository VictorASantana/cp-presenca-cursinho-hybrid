import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL = ' https://83f4-131-196-28-230.ngrok-free.app'

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

export default api;
