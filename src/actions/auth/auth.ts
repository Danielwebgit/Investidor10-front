import { JwtPayload } from 'jwt-decode';

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