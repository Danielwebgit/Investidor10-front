// export interface AuthState {
//     auth: {
//         isAuthentication: boolean;
//     };
//   }

  export interface AuthState {
    auth: {
        isAuthentication: boolean;
    };
    user: User | null;
    token: string | null;
  }

  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  interface Post {
    id: number;
    name: string;
    email: string;
  }
  
  export interface UsersState {
    loading: boolean;
    users: User[];
    error: string;
  }

  export interface PostsState {
    loading: boolean;
    posts: Post[];
    error: string;
  }
  
  