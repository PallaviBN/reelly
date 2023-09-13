import React from "react";
import translate from "../utils/intl/translate";
import { useSelector } from "react-redux";
import { gptSelector } from "../utils/redux/GPTSlice";

const SearchResults = () => {
  const { searchTxt } = useSelector(gptSelector);
  console.log(searchTxt)
  return (
    <div className="m-auto w-[80%] h-screen text-white mt-8 font-semibold text-base p-2">
      <div className=""></div>
      {translate("search.result")}
      {searchTxt}
    </div>
  );
};

export default SearchResults;
