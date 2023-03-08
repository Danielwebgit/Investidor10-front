import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReduce from '../root-reduce';
import authReducer from './ducks/auth';
import postReducer from './ducks/post';
import userReducer from './ducks/user';
//import authSlice from '../auth4/slice';

const store = configureStore({
    reducer: {
        products: rootReduce,
        auth: authReducer,
        user: userReducer,
        posts: postReducer
        //authSlice: authSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store
