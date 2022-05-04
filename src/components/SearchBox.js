import React from "react";

function SearchBox({ searchText, onSearchTextChange }) {
  return (
    <div className="search-box">
      <input
        type="text"
        value={searchText}
        placeholder="Search"
        onChange={(e) => onSearchTextChange(e.target.value)}
      ></input>
      <button href="#">Lupa</button>
    </div>
  );
}

export default SearchBox;
