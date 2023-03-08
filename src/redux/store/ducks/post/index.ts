// import { createReducer, createAction } from '@reduxjs/toolkit';
// import {PostsState} from '../../../../interfaces'

// const initialState: PostsState = {
//     loading: false,
//     posts: [],
//     error: ''
//   };

// export const fetchPostsSucess = createAction('FETCH_POSTS_SUCCESS');
// export const fetchPostsRequest= createAction('FETCH_POSTS_REQUEST');


// export default createReducer(initialState, {
//     [fetchPostsSucess.type]: 
//     (state, action) => (
//         {
//             ...state,
//             loading: false,
//             posts: action.payload,
//             error: ''
//         }),

//     [fetchPostsRequest.type]:
//     (state, action) => (
//         {
//             ...state, 
//             loading:
//             true
//         })
// });


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

  const initialState = {
        posts: []
  };

  const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPostsSuccess(state, action) {
        state.posts = action.payload;
      }
    },
  });

  export default postSlice.reducer;

  export const { fetchPostsSuccess } = postSlice.actions;