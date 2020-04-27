import React, { useContext } from "react";
import { AuthenticationContext } from "../../Context/Authentication/Authentication";

const Greeting = () => {
  const [authInputs] = useContext(AuthenticationContext);

  if (authInputs.isLoggedIn === true) {
    return <div>Welcome {authInputs.username}</div>;
  } else return null;
};
export default Greeting;
