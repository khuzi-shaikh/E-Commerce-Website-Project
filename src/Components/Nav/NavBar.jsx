import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <h3>Khuzi's Online Store</h3>
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
