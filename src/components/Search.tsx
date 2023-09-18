import React from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import Footer from "./Footer";
import BGSVG from "../utils/media/background.svg";

const Search = () => {
  return (
    <>
      <Header />
      <>
        <div className="bg-gradient-to-t from-black -z-10 fixed">
          <img
            className="h-screen w-screen bg-cover object-cover"src={BGSVG}
            alt="background image"
          />
        </div>
        <div className="">
          <SearchBar />
          <Footer />
        </div>
      </>
    </>
  );
};

export default Search;
