import React, { useContext } from "react";
import axios from "axios";
import { AuthenticationContext } from "../../Context/Authentication/Authentication";
import LogInMessage from "../Utilities/LogInMessage";

const Homepage = () => {
  const [authInputs, setAuthInputs] = useContext(AuthenticationContext);

  const login = (token) => {
    localStorage.setItem("token", token); //setting local stoarge token
    setAuthInputs({
      ...authInputs,
      password: null, //removing password from the context, don't want to store the password or the responsiblity
      token: true,
      isLoggedIn: true,
    });
  };
  const logOut = () => {
    console.log("logged out");
    localStorage.removeItem("token");
  };

  const authfuntion = (e) => {
    e.preventDefault();
    console.log(authInputs);
    axios({
      method: "post",
      url: "http://localhost:7000/signin/jwt",
      data: { username: authInputs.userName, password: authInputs.password },
    })
      .then((resp) => login(resp.data.token))
      .catch((error) => console.log(error))
      .then((authInputs.isError = false))
      .then((authInputs.userName = ""))
      .then((authInputs.password = ""));
  };

  const UserInputUsername = (tempUsername) => {
    authInputs.userName = tempUsername;
    console.log(authInputs.userName);
  };
  const UserInputPassword = (tempPassword) => {
    authInputs.password = tempPassword;
  };

  return (
    <div>
      <textarea
        placeholder="Enter username"
        onChange={(e) => UserInputUsername(e.target.value)}
      ></textarea>
      <textarea
        placeholder="Enter password"
        onChange={(e) => UserInputPassword(e.target.value)}
      ></textarea>
      <button onClick={authfuntion}>Submit</button>
      <LogInMessage />
      <button onClick={logOut}>Logout</button>
    </div>
  );
};
export default Homepage;
