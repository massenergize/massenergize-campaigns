import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Searchbar = ({ setText, text, onChange }) => {
  return (
    <div className="relative">
      <input
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
