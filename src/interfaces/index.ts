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
    title: string;
    text: string;
    data: []
  }
  
  export interface UsersState {
    loading: boolean;
    users: User[];
    error: string;
  }

  export interface PostsState {
    loading: boolean;
    posts: Post[];
    error: string|null;
    post: Post[]
    data: []
    
  }

  export interface Token {
    exp: number;
  }
  
  