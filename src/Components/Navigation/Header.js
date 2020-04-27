import React from "react";
import SearchButton from "../Utilities/SearchButton";
import Greeting from "../Utilities/Greeting";

const header = () => {
  return (
    <div>
      <Greeting />
      My BookShelf
      <SearchButton />
    </div>
  );
};
export default header;
