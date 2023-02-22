import React, { useEffect, useRef } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";

export const NavBar = () => {
  const dispatch = useDispatch();
  const reference = useRef("");
  const handleSearch = (e) => {
    console.log("reference");
    dispatch({
      type: "SEARCH_DATA_TAKE",
      payload: e.target.value,
    });
  };
  useEffect(() => {
    reference.current.focus();
  }, []);
  return (
    <div className="navbar">
      <div className="logo-container">
        <h3>Khuzi's Online Store</h3>
      </div>
      <div>
        <TextField
          label="Type Something..."
          variant="outlined"
          onChange={handleSearch}
          inputRef={reference}
        />
      </div>
      <div className="nav-container">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/About">About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Blog">Blog</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Contact">Contact</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};
