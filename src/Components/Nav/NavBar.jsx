import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export const NavBar = () => {
  const select = useSelector((state)=>state)
  const dispatch = useDispatch()
  const handleSearch = (e) => {
    dispatch({
      type: "SEARCH_DATA",
      payload: e.target.value
    })
  }
  console.log(select.ProductReducer.searchData);
  return (
    <div className="navbar">
      <div className="logo-container">
        <h3>Khuzi's Online Store</h3>
      </div>
      <div><TextField label="Type Something..." variant="standard" onChange={handleSearch} /></div>
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
