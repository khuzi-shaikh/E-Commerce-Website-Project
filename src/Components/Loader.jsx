import { CircularProgress } from "@mui/material";
import React from "react";
import "./Loader.css"

export const Loader = () => {
  return (
    <div className="spinner-container">
      <CircularProgress />
      {/* <div className="loading-spinner"></div> */}
    </div>
  );
};
