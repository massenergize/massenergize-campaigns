import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Searchbar = ({ setText }) => {
  return (
    <div className="relative">
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        className="searchbar"
        placeholder="Search for campaign"
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};

export default Searchbar;
