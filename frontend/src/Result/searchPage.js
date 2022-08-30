import React from "react";
import NavBar from "../Components/Nav";
import { SearchBox } from "../Components/SearchBox";
const SearchPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <SearchBox marginT="15rem" marginL="30rem" label="Search"></SearchBox>
    </div>
  );
};

export default SearchPage;
