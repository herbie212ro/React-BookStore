import React, { useContext } from "react";
import { AuthenticationContext } from "../../Context/Authentication/Authentication";

const Homepage = () => {
  const [authInputs] = useContext(AuthenticationContext);
  //console.log({ authInputs });
  const authfuntion = () => {
    // const getValues = { ...authInputs };

    return console.log("submitbutton", { authInputs });
  };
  return (
    <div>
      <textarea placeholder="Enter username"></textarea>
      <textarea placeholder="Enter password"></textarea>
      <button onClick={() => authfuntion()}>Submit</button>
    </div>
  );
};
export default Homepage;
