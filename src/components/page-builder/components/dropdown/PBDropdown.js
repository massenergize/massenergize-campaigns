import React from "react";
import "./pb-dropdown.css";
function PBDropdown() {
  return (
    <div className="pb-dropdown">
      <select className="pb-undefault">
        <option>Center</option>
        <option> Left</option>
        <option>Right</option>
      </select>
    </div>
  );
}

export default PBDropdown;
