import { createReducer, createAction } from '@reduxjs/toolkit';
import { LOGIN_SUCCESS, AuthActionTypes } from './actions';

export interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};


// export const login = createAction('LOGIN_SUCCESS');
// export const logout = createAction('LOGOUT_SUCCESS');


export function authReducer(
    state: AuthState = initialState,
    action: AuthActionTypes
  ): AuthState {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: action.payload,
        };
      default:
        return state;
    }
  }

// export default createReducer(initialState,  {
//     [login.type]: (state, action) => ({...state, isAuthentication: true, user: action.payload.user, token: action.payload.token }),
//     [logout.type]: (state, action) => ({...state, isAuthentication: false})
// });



