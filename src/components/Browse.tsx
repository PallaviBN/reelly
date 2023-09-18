import Header from "./Header";
import usePopulateMovies from "../hooks/usePopulateMovies";
import PrimarySection from "./PrimarySection";
import SecondarySection from "./SecondarySection";
import React from "react";
import Footer from "./Footer";

const Browse = () => {
  usePopulateMovies("NOW_PLAYING");

  return (
    <div className="w-screen">
      <Header />
      <PrimarySection />
      <SecondarySection />
      <Footer />
    </div>
  );
};

export default Browse;
