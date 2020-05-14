import React, { useContext } from "react";
import { AuthenticationContext } from "../../Context/Authentication/Authentication";

const LogInMessage = () => {
  const [displayMessage] = useContext(AuthenticationContext);

  console.log("loginmessage +", displayMessage.isError);
  if (displayMessage.isLoggedIn === true) {
    return <div>Loading ....</div>;
  } else if (displayMessage.isError === false) {
    return <div>Error with the username and password entered</div>;
  } else return null;
};
export default LogInMessage;
