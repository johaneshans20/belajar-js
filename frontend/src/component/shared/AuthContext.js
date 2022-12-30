import axios from "../../axios";
import { createContext } from "react";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const loginApiCall = async (payload) => {
    await axios.post("/auth/login", payload, { withCredentials: true });
  };
  return (
    <AuthContext.Provider value={{ loginApiCall }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
