import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Searchbar = ({ setText, text, onChange }) => {
  return (
    <div className="relative">
      <input
        style={{ border: "dotted 2px var(--admin-theme-color)", borderRadius: 0, padding: "10px 20px" }}
        onChange={(e) => {
          typeof setText === "function" && setText(e.target.value);
          typeof onChange === "function" && onChange(e.target.value);
        }}
        value={text}
        type="text"
        className="searchbar"
        placeholder="Search for campaign"
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};

export default Searchbar;
