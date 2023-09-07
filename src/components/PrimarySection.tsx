import { useSelector, useDispatch } from "react-redux";
import FeaturedBackground from "./FeaturedBackground";
import FeaturedTitle from "./FeaturedTitle";
import {
  movieSelector,
  setFeaturedMovieIndex,
} from "../utils/redux/MovieSlice";
import { MovieData } from "../utils/static/type";
import { useEffect } from "react";

const PrimarySection = () => {
  const { nowPlayingMovies, featureMovieIndex } = useSelector(movieSelector);
  // early return
  if (!nowPlayingMovies) return;

  const featuredMovie: MovieData = nowPlayingMovies[featureMovieIndex];
  return (
    <>
      {featuredMovie && (
        <div className="">
          <FeaturedTitle
            title={featuredMovie?.original_title}
            overview={featuredMovie?.overview}
          />
          <FeaturedBackground movieId={featuredMovie?.id} />
        </div>
      )}
    </>
  );
};

export default PrimarySection;
