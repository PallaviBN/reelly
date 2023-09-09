import React, { SyntheticEvent } from "react";

const SearchBar = () => {
  return (
    <div className="">
      <form className="flex items-center justify-center w-screen pt-[8%] bg-black">
        <input
          type="text"
          className="p-4 m-4 rounded-md w-[30%] border-white border-2 bg-gray-700 font-bold text-white text-lg"
          placeholder="What do you feel like watching?"
        ></input>
        <button
          className="bg-red-500 p-2 font-medium text-yellow-50 rounded-md"
          onClick={(event: SyntheticEvent) => {
            event.preventDefault();
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
