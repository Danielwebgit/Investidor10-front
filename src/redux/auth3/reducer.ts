import { useState } from 'react';
import { AuthState } from './../store/ducks/auth/interfaces/index';

const initialState: AuthState = {
    auth: {
        isAuthentication: false
    },
    user: null,
    token: localStorage.getItem('token'),
  };


const authReducer = (state = initialState, action: any) => {
return state;
}

export default authReducer;