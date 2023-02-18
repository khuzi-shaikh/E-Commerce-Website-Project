import { TextField } from "@mui/material";
import React, { useState } from "react";
import { SubAbout } from "./SubAbout";

export const About = () => {
  const [text, setText] = useState("Hello World");
  const handleChange = (value) => {
    setText(value);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "500px", padding: "30px" }}
      ></TextField>
      <SubAbout text={text} handleChange={handleChange} />
    </div>
  );
};
