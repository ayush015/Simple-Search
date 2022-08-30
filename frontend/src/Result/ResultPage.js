import React from "react";
import NavBar from "../Components/Nav";

import { SearchBox } from "../Components/SearchBox";
import { Links } from "../Components/Links";
const ResultPage = () => {
  const arr = JSON.parse(localStorage.getItem("Item"));
  console.log(arr);
  return (
    <div>
      <NavBar></NavBar>
      <SearchBox marginT="5rem" marginL="30rem" label="Search"></SearchBox>
      {arr.map((arrs) => {
        console.log(arrs.LINKS);
        return <Links results={arrs.LINKS} />;
      })}
    </div>
  );
};

export default ResultPage;
