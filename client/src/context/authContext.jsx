import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(
      "http://localhost:9500/api/auth/login",
      // "https://insoc-c8mljnz9r-jyotipm1999.vercel.app/auth/login",
      inputs,
      {
        withCredentials: true,
      }
    );
    // console.log("authdata", res.data);
    setCurrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ login, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
