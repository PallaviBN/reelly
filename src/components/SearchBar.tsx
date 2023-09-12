import React, { SyntheticEvent } from "react";
import translate from "../utils/intl/translate";
import { useIntl } from "react-intl";

const SearchBar = () => {
  const searchHandler = () => {};
  return (
    <div className="">
      <form
        className="flex items-center justify-center w-screen pt-[8%] bg-black"
        onSubmit={(event: SyntheticEvent) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          className="p-4 m-4 rounded-md w-[30%] border-white border-2 bg-gray-700 font-bold text-white text-lg"
          placeholder={useIntl().formatMessage({ id: "search.placeholder" })}
        ></input>
        <button
          className="bg-red-500 p-2 font-medium text-yellow-50 rounded-md"
          onClick={searchHandler}
        >
          {translate("search.text")}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
