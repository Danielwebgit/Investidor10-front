import { configureStore } from '@reduxjs/toolkit';

import rootReduce from '../root-reduce';
import authReducer from './ducks/auth';
import userReducer from './ducks/user';

const store = configureStore({
    reducer: {
        products: rootReduce,
        auth: authReducer,
        user: userReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store
