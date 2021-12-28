import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
const LanguageSelector = ({ language, handleChange }) => {
  return (
    <>
      <h5>Language</h5>
      <Select
        defaultValue="c_cpp"
        value={language}
        className="mw-120"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        <MenuItem value={"c_cpp"}>C/C++</MenuItem>
        <MenuItem value={"java"}>Java</MenuItem>
        <MenuItem value={"python"}>Python</MenuItem>
        <MenuItem value={"javascript"}>Javascript</MenuItem>
      </Select>
    </>
  );
};

export default LanguageSelector;
