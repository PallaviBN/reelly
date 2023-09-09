import { useEffect } from "react";
import fetchWrapper from "../utils/static/fetchWrapper";
import { useDispatch } from "react-redux";
import {
  addToNowPlaying,
  addToPopular,
  addToTopRated,
  addToUpcoming,
  setFeaturedMovieIndex,
} from "../utils/redux/MovieSlice";

const usePopulateMovies = (
  type: "NOW_PLAYING" | "POPULAR" | "UPCOMING" | "TOP_RATED"
): void => {
  const dispatch = useDispatch();
  const getMoviesUrl = () =>
    `https://api.themoviedb.org/3/movie/${type.toLowerCase()}?page=1`;

  useEffect(() => {
    getNowPlayingList();
  }, []);

  const getNowPlayingList = async () => {
    try {
      const data = await fetchWrapper(getMoviesUrl());

      // Define a mapping of types to dispatch functions
      const typeToDispatch = {
        NOW_PLAYING: addToNowPlaying,
        POPULAR: addToPopular,
        UPCOMING: addToUpcoming,
        TOP_RATED: addToTopRated,
      };
      // Dispatch the appropriate action based on the type
      if (typeToDispatch[type]) {
        dispatch(typeToDispatch[type](data?.results));
        if (type === "NOW_PLAYING") dispatch(setFeaturedMovieIndex());
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
};

export default usePopulateMovies;
