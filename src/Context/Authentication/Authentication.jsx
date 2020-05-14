import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [identify, setIdentify] = useState({
    userName: "",
    password: "",
    token: null,
    UUID: null,
    /* isLoggedIn - must be boolean, must be set to false before submitting*/
    isLoggedIn: false,
    isError: null,
  });

  return (
    <AuthenticationContext.Provider value={[identify, setIdentify]}>
      {children}
    </AuthenticationContext.Provider>
  );
};
