import apiService from "./apiService";
import axios from "axios";
import api from "./api";

interface Token {
    token: string;
  }

// export const validToken = (token: any) => {
    
//         axios.post(`http://localhost:8990/api/validate-token`, { token })
//         .then((response) => {
//             return response.data;
//     })
// }


// export const validToken = async (token: any)  => {
//     const response = await api.post('/validate-token', token);
//     return response.data;
//   };

  export const validToken = async (): Promise<Token> => {
    const response = await api.get('/users');
    return response.data;
  };

export default { validToken };