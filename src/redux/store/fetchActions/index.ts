import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import api from '../../../Services/apiService';
import axios from 'axios';
//import jwt_decode, { JwtPayload } from 'jwt-decode';
import jwtDecode, { JwtPayload } from 'jwt-decode';


interface User {
    post: {
        id: number;
        title: string;
        text: string;
    }
  }

  interface Post {
    id: number;
    name: string;
    description: string;
  }

export const fetchUsersRequest = () => {
    return {
      type: 'FETCH_USERS_REQUEST'
    };
  };

  export const fetchUsersSuccess = (users: User[]) => {
    return {
      type: 'FETCH_USERS_SUCCESS',
      payload: users
    };
  };

  export const fetchUsersFailure = (error: string) => {
    return {
      type: 'FETCH_USERS_FAILURE',
      payload: error
    };
  };



  export const fetchPostsRequest = () => {
    return {
      type: 'FETCH_POSTS_REQUEST'
    };
  };

  export const fetchPostsSuccess = (users: Post[]) => {
    return {
      type: 'FETCH_POSTS_SUCCESS',
      payload: users
    };
  };

  export const fetchPostsFailure = (error: string) => {
    return {
      type: 'FETCH_POSTS_FAILURE',
      payload: error
    };
  };

  export const loginSuccess = (token: string, user: JwtPayload) => ({
    type: 'LOGIN_SUCCESS',
    payload: { token, user }
  });


export const fetchUsers = () => {
    return (dispatch: any) => {
        dispatch(fetchUsersRequest());
        axios.get('http://localhost:8990/api/users')
      .then(response => {
        const users = response.data;
        console.log(response.data)
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchUsersFailure(errorMessage));
      });
    }
}

export const fetchPosts = () => {
    return (dispatch: any) => {
        dispatch(fetchPostsRequest());
        axios.get('http://localhost:8990/api/posts')
      .then(response => {
        const posts = response.data;
        console.log(response.data)
        dispatch(fetchPostsSuccess(posts));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchPostsFailure(errorMessage));
      });
    }
}


export const login = (email: string, password: string) => {

    return (dispatch: any) => {
        axios.post('http://localhost:8990/api/auth/login', {email, password})
      .then(response => {
        const  token  = response.data;
        console.log(token.access_token)

        localStorage.setItem('token', token.access_token);
        const decoded = jwtDecode<JwtPayload>(token.access_token);
        dispatch(loginSuccess(token, decoded));
        //navigate("/pagina-inicial");
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchPostsFailure(errorMessage));
      });
    }
}

