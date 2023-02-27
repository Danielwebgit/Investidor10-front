import axios from "axios";
import { API_URL } from "../config";

const apiService = axios.create({
    baseURL: API_URL
});

export default apiService;
