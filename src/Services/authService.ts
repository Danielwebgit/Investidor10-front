import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8990/api',
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
  export const authService = {
    login: async (email: string, password: string) => {
      const response = await api.post('/auth/login', {
        email,
        password,
      });
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      return response.data;
    },
  
    logout: () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
  
    refreshAccessToken: async () => {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await api.post('/auth/refresh', {
        refreshToken,
      });
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      return response.data;
    },
  
    getUserInfo: async () => {
      const response = await api.get('/auth/userinfo');
      return response.data;
    },
  };
  
  export const protectedService = {
    getProtectedData: async () => {
      const response = await api.get('/protected-data');
      return response.data;
    },
  };