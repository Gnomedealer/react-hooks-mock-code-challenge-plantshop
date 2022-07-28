import React from "react";

function Search({setSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;
