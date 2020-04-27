import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [identify, setIdentify] = useState({
    username: "harry",
    password: "potter",
    token: "",
    UUID: "",
    isLoggedIn: true,
  });

  return (
    <AuthenticationContext.Provider value={[identify, setIdentify]}>
      {children}
    </AuthenticationContext.Provider>
  );
};
