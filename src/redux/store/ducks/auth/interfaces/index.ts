interface User {
    id: number;
    name: string;
    email: string;
  }

export interface AuthState {
    auth: {
        isAuthentication: boolean;
    };
    user: User | null;
    token: string | null;
  }

  export interface Token {
    exp: number;
  }