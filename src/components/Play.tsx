import React from "react";
import usePopulateMovieTrailer from "../hooks/usePopulateMovieTrailer";
import { useSelector } from "react-redux";
import { movieSelector } from "../utils/redux/MovieSlice";
import { Link, useParams } from "react-router-dom";
import AppLogo from "../utils/media/appLogo.png";

const Play = () => {
  const { id } = useParams();
  const movieId: number = id ? parseInt(id) : -1;
  const { featuredMovieTrailer } = useSelector(movieSelector);
  usePopulateMovieTrailer(movieId);

  return (
    <>
      <div className="opacity-0 hover:opacity-100 absolute top-0 z-50 w-screen">
        <header className="flex align-middle w-full py-2 z-10 shadow-none absolute bg-gradient-to-br from-black px-4 justify-center md:justify-between">
          <Link to="/browse">
            <img
              className="md:w-32 h-12 md:ml-4 mt-1.5"
              src={AppLogo}
              alt="app logo"
            />
          </Link>
        </header>
      </div>
      <iframe
        className="relative top-0 left-0 w-screen h-screen bg-black"
        src={`https://www.youtube.com/embed/${featuredMovieTrailer?.key}?si=nZLq1uJMBPznnyfN?playlist=${featuredMovieTrailer?.key}&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  );
};

export default Play;
