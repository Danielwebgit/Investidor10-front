import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isLoggedIn: number;
  }

  const initialState = {
    auth: {
        isAuthentication: false,
        user: null,
        token: null,
        isLoggedIn: false
      }
  };

  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      loginSuccess(state) {
        state.auth.isAuthentication = true;
      },

    },
  });

  export default authSlice.reducer;
  export const { loginSuccess } = authSlice.actions;


  export const useSuccess = (state: any) => {
    return state.auth
  }