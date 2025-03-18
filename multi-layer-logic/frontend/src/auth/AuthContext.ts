import { createContext } from "react";

type AuthContextType = {
  username: string | null;
  token: string | null;
  setUsername: (username: string | null) => void;
  setToken: (token: string | null) => void;
};

export const AuthContext = createContext<AuthContextType>({ 
  username: null, 
  token: null, 
  setUsername: (username: string | null) => {}, 
  setToken: (token: string | null) => {}, 
});
