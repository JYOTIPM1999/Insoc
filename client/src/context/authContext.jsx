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
      inputs,
      {
        withCredentials: true,
      }
    );

    setCurrentUser(res.data);

    //Temporary
    // setCurrentUser({
    //   id: 1,
    //   name: "Jyoti Prakash",
    //   profilePic:
    //     "https://images.pexels.com/photos/19429185/pexels-photo-19429185/free-photo-of-studio-shot-of-two-ripe-lemons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // });
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
