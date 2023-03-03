import {createAction, createReducer} from '@reduxjs/toolkit';

import {AuthState} from '../../../../interfaces'

const initialState: AuthState = {
    auth: {
        isAuthentication: false
    },
    user: null,
    token: null,
  };

const INITIAL_STATES = {
    isAuthentication: false
}

export const loginSuccess = createAction('LOGIN_SUCCESS');
export const lofinFailure = createAction('LOGIN_FAILURE');
export const logoutSuccess = createAction('LOGOUT_SUCCESS');

export default createReducer(initialState, {
    [loginSuccess.type]: (state, action) => ({...state, isAuthentication: true}),
    [logoutSuccess.type]: (state, action) => ({...state, isAuthentication: false})
});