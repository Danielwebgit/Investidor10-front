export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: boolean;
}

export type AuthActionTypes = LoginSuccessAction;

export function loginSuccess(isLoggedIn: boolean): AuthActionTypes {
  return {
    type: LOGIN_SUCCESS,
    payload: isLoggedIn,
  };
}