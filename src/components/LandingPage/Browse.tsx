import Header from "../Main/Header";
import usePopulateMovies from "../../hooks/usePopulateMovies";
import PrimarySection from "../Sections/PrimarySection";
import SecondarySection from "../Sections/SecondarySection";
import React from "react";
import Footer from "../Main/Footer";

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
