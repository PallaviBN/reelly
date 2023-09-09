import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { movieSelector } from "../utils/redux/MovieSlice";
import usePopulateMovies from "../hooks/usePopulateMovies";
import { MovieType } from "../utils/static/type";

const SecondarySection = () => {
  
  usePopulateMovies("POPULAR");
  usePopulateMovies("TOP_RATED");
  usePopulateMovies("UPCOMING");

  const { nowPlayingMovies, popularMovies, upcomingMovies, topRatedMovies } =
    useSelector(movieSelector);
  return (
    <div className="bg-black pb-4 pl-6">
      <div className="-mt-72 relative z-20">
        <MovieList type={"NOW PLAYING"} movies={nowPlayingMovies} />
        <MovieList type={"POPULAR"} movies={popularMovies} />
        <MovieList type={"TOP RATED"} movies={topRatedMovies} />
        <MovieList type={"UPCOMING"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondarySection;
