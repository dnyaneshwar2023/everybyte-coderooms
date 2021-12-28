import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
const ThemeSelector = ({ handleChange }) => {
  return (
    <>
      <Select
        defaultValue="monokai"
        className="mw-120"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        <MenuItem value={"github"}>Github</MenuItem>
        <MenuItem value={"monokai"}>Monokai</MenuItem>
        <MenuItem value={"solarized_light"}>Solarized Light</MenuItem>

        <MenuItem value={"solarized_dark"}>Solarized Dark</MenuItem>
        <MenuItem value={"eclipse"}>Eclipse</MenuItem>
        <MenuItem value={"dracula"}>Dracula</MenuItem>
      </Select>
    </>
  );
};

export default ThemeSelector;
