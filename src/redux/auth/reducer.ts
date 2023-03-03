import  { JwtPayload } from 'jwt-decode';

interface AuthState {
    token: string | null;
    user: JwtPayload | null;
    error: string | null;
  }


const initialState: AuthState = {
    token: localStorage.getItem('token'),
    user: null,
    error: null
  };

export default function authReducer(state = initialState, action: any) {

    switch (action.type) {
        case 'LOGIN_SUCCESS':
          return {
            ...state,
            token: action.payload.token,
            user: action.payload.user,
            error: null
          };

        default:
            return state;

    }
}

export const addAuth = (user: any) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: user
    }
}

