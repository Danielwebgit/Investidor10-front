import Swal from 'sweetalert2'
import { AuthState } from './../../../interfaces/index';
import { useSelector } from 'react-redux';
//import { loginSuccess } from '../../auth4/slice';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import api from '../../../Services/api';
import axios from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { loginSuccess } from '../ducks/auth';
import { setPosts, setPost, deletePost } from '../ducks/post';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



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

  // export const fetchPostsSuccess = (users: Post[]) => {
  //   return {
  //     type: 'FETCH_POSTS_SUCCESS',
  //     payload: users
  //   };
  // };

  export const fetchPostsFailure = (error: string) => {
    return {
      type: 'FETCH_POSTS_FAILURE',
      payload: error
    };
  };

  // export const loginSuccess = (token: string, user: JwtPayload) => ({
  //   type: 'LOGIN_SUCCESS',
  //   payload: { token, user }
  // });

  // export const loginSuccess = (token: any) => ({
  //   type: 'LOGIN_SUCCESS',
  //   payload: token
  // });

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


  interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: {
      token: string;
      user: JwtPayload;
    };
  }

  interface LoginFailureAction {
    type: typeof LOGIN_FAILURE;
    payload: string;
  }
  
  export type AuthActionTypes = LoginSuccessAction | LoginFailureAction;

  // export const loginSuccess = (token: string, user: JwtPayload): AuthActionTypes => ({
  //   type: LOGIN_SUCCESS,
  //   payload: { token, user }
  // });
  

  // export const loginSuccess = (token: string, user: JwtPayload) => ({
  //   type: 'LOGIN_SUCCESS',
  //   payload: { token, user }
  // });

export const getPostById = (postId: any) => {
  
  return (dispatch: any) => {
       api.get(`/dashboard/posts/show/${postId}`).then((response) => {
        const post = response.data;
        dispatch(setPost(post.data.post))
    });
  }
}


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

export const addPost = (title: any, text: any, user_id: any) => {
  return (dispatch: any) => {
   
    const response = api.post('/dashboard/posts/store', {title, text, user_id});
    console.log(response);
  }
}

export const deletePostAction = (postId: any): any => {

  return (dispatch: any) => {
    
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result: any) => {
        if (result.isConfirmed) {
          api.delete(`/dashboard/posts/destroy/${postId}`).then((response) => {
            dispatch(deletePost(postId))
          });

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    
  }
}

export const fetchPosts = (): any => {
  
    return (dispatch: any) => {
      
      const config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      };

        //dispatch(fetchPostsRequest());
        axios.get('http://localhost:8990/api/dashboard/posts', config)
      .then(response => {
        const posts = response.data;
        dispatch(setPosts(posts));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchPostsFailure(errorMessage));
      });
    }
}


export const login = (email: string, password: string) => {

  
  return (dispatch: any) => {

      api.post('/auth/login', {email, password}).then((response) => {
        
        const  token  = response.data;
        localStorage.setItem('token', token.access_token);
        dispatch(loginSuccess());
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: 0,
          toastId: "my_toast",
        })
    }).catch(error => {
      
        const errorMessage = error.message;
        dispatch(fetchPostsFailure(errorMessage));
    })
    }
}

