import { validToken } from './../../../../Services/validTokenService';
import {createAction, createReducer} from '@reduxjs/toolkit';
import {AuthState} from './interfaces';

//const checkvalidToken =  validToken(localStorage.getItem('token'));


//console.log(checkvalidToken)

const initialState: AuthState = {
    auth: {
        isAuthentication: true
    },
    user: null,
    token: null,
  };

export const loginSub = createAction('LOGIN_SUCCESS');

export const lofinFailure = createAction('LOGIN_FAILURE');
export const logout = createAction('LOGOUT_SUCCESS');

//const isAuthentication = useSelector((state: AuthState) => state.auth.isAuthentication);


export default createReducer(initialState,  {
    [loginSub.type]: (state, action) => ({...state, isAuthentication: true, payload: { payload: action.payload } }),
    [logout.type]: (state, action) => ({...state, isAuthentication: false})
});