import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
const FontSizeSelector = ({ handleChange }) => {
  return (
    <>
      <h5>Font Size</h5>
      <Select
        defaultValue={12}
        className="mw-120"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={14}>14</MenuItem>
        <MenuItem value={16}>16</MenuItem>
        <MenuItem value={18}>18</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
    </>
  );
};

export default FontSizeSelector;
