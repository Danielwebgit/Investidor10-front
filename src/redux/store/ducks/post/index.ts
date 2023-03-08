import { PostsState } from './../../../../interfaces/index';
import { createSlice } from '@reduxjs/toolkit';

  const initialState: PostsState = {
        posts: [],
        post: [],
        loading: false,
        error: null,
        data:[]
  };

  const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state: any, action: any) {
          state.posts = action.payload;
      },
        setPost(state: any, action: any) {
          state.post = action.payload;
      },
        deletePost(state: any, action: any) {
        const newArrPost: {data: PostsState} = {"data" : JSON.parse(JSON.stringify(state)).posts.data.filter((post: any) => post.post.id != action.payload)}
        state.posts = newArrPost;
      }
    },
  });

  export default postSlice.reducer;

  export const { setPosts, setPost, deletePost } = postSlice.actions;