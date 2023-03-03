import { createReducer, createAction } from '@reduxjs/toolkit';

import {UsersState} from '../../../../interfaces'

const initialState: UsersState = {
    loading: false,
    users: [],
    error: ''
  };

export const  fetchUsersSuccess= createAction('FETCH_USERS_SUCCESS');
export const  fetchUsersRequest= createAction('FETCH_USERS_REQUEST');

export default createReducer(initialState, {
    [fetchUsersSuccess.type]: 
    (state, action) => (
        {
            ...state,
            loading: false,
            users: action.payload,
            error: ''
        }),

    [fetchUsersRequest.type]:
    (state, action) => (
        {
            ...state, 
            loading:
            true
        })
});