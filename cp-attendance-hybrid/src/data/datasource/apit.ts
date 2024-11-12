import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://8f93b153-5a35-4f2a-9fe3-05dd8ed2746f.e1-us-east-azure.choreoapps.dev/choreo-apis/monitoramento-de-presenca/backend/v1/',
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
