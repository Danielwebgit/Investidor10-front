import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import rootReduce from '../root-reduce'

export default configureStore({
    reducer: {
        time: rootReduce 
    }
});

