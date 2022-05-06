import React, { useState } from "react";
import { ReactComponent as IconSearch } from "../img/icon-search.svg";

function SearchBox({ searchText, handleSubmit }) {
  const [textInput, setTextInput] = useState("");

  return (
    <div className="search-box">
      <input
        type="text"
        value={textInput}
        placeholder="Search"
        onChange={(e) => setTextInput(e.target.value)}
      ></input>
      <a onClick={() => handleSubmit(textInput)}>
        <IconSearch />
      </a>
    </div>
  );
}

export default SearchBox;
