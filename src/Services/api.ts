import axios from 'axios';

import jwtDecode, { JwtPayload } from 'jwt-decode';
import { Token } from '../interfaces'

const api = axios.create({
  baseURL: 'http://localhost:8990/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  
  if (token) {
    const decodedToken = jwtDecode<Token>(token);
    const expirationDate = new Date(decodedToken.exp * 1000);
    const now = new Date();

    if (now > expirationDate) {

      localStorage.removeItem('token');
      //window.location.reload();

    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;