import React, { useState } from "react";
import { searchApi } from "../api/backend";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export const SearchBox = ({ marginT, marginL, label }) => {
  const navigate = useNavigate();
  const [value, setValues] = useState({
    search: "",
  });
  const { search } = value;
  const handleChange = (e) => {
    setValues({ search: e.target.value, redirect: true });
  };

  const handleClick = () => {
    searchApi({ search: search })
      .then((data) => {
        localStorage.setItem("Item", JSON.stringify(data));
      })
      .catch((err) => {
        console.log("Error from searchbox", err);
      });
    navigate("/loader");
  };

  return (
    <div>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          display: "flex",
          mt: marginT,
          ml: marginL,
        }}
      >
        <TextField
          fullWidth
          label={label}
          id="fullWidth"
          onChange={handleChange}
          value={search}
        />
        <Button variant="contained" onClick={handleClick}>
          Search
        </Button>
      </Box>
    </div>
  );
};
