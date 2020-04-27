import React, { useContext } from "react";
import { AuthenticationContext } from "../../Context/Authentication/Authentication";

const SearchButton = () => {
  const [authInputs] = useContext(AuthenticationContext);

  const searchClick = () => {
    console.log("clicking Search button", { authInputs });
  };

  if (authInputs.isLoggedIn === true) {
    return (
      <div>
        <button onClick={searchClick}>Search</button>
      </div>
    );
  } else return null;
};
export default SearchButton;
