import React from "react";
import SearchButton from "./SearchButton";
import Greeting from "./Greeting";

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
