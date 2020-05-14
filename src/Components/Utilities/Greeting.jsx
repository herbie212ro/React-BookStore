import React, { useContext } from "react";
import { AuthenticationContext } from "../../Context/Authentication/Authentication";

const Greeting = () => {
  const [authInputs] = useContext(AuthenticationContext);
  console.log("testing greeting", authInputs);
  if (authInputs.token !== null) {
    return <div>Welcome {authInputs.userName}</div>;
  } else return null;
};
export default Greeting;
