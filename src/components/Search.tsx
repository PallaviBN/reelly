import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Search = () => {
  return (
    <div className="bg-black">
      <SearchBar />
      <SearchResults />
    </div>
  );
};

export default Search;
