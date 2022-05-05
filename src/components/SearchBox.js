import React, { useState } from "react";

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
      <button onClick={() => handleSubmit(textInput)}>Lupa</button>
    </div>
  );
}

export default SearchBox;
