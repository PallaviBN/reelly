import { useSelector } from "react-redux";
import FeaturedBackground from "../LandingPage/FeaturedBackground";
import FeaturedTitle from "../LandingPage/FeaturedTitle";
import { movieSelector } from "../../redux/MovieSlice";
import { MovieData } from "../../utils/static/type";
import React from "react";

const PrimarySection = () => {
  const { nowPlayingMovies, featureMovieIndex } = useSelector(movieSelector);
  // early return
  if (!nowPlayingMovies) return;

  const featuredMovie: MovieData = nowPlayingMovies[featureMovieIndex];
  return (
    <>
      {featuredMovie && (
        <div className="pt-[20%] md:pt-0">
          <FeaturedTitle
            id={featuredMovie?.id}
            title={featuredMovie?.original_title}
            overview={featuredMovie?.overview}
            movie={featuredMovie}
          />
          <FeaturedBackground movieId={featuredMovie?.id} />
        </div>
      )}
    </>
  );
};

export default PrimarySection;
