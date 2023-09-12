import React from "react";
import translate from "../utils/intl/translate";

const SearchResults = () => {
  return (
    <div className="m-auto w-[80%] h-screen text-white mt-8 font-semibold text-base p-2">
      <div className=""></div>
      {translate("search.result")}
    </div>
  );
};

export default SearchResults;
