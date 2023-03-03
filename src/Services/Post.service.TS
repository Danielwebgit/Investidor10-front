import axios from 'axios';
import authHeader from './auth-header';

import { API_URL } from "./config";

import apiService from "../Services/apiService"

class PostService {

    getPublicContent() {
        return axios.get(API_URL + '');
      }

      getPostBoard() {
        //return apiService.get(API_URL + 'post', {headers: authHeader});
        //return axios.get(API_URL + 'posts', { headers: authHeader() });
      }
}

export default new PostService();
