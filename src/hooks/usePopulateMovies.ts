import { useEffect } from "react";
import fetchWrapper from "../utils/static/fetchWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  addToNowPlaying,
  addToPopular,
  addToTopRated,
  addToUpcoming,
  movieSelector,
  setFeaturedMovieIndex,
} from "../redux/MovieSlice";
import { TMDB_MOVIES_API } from "../utils/static/constants";

const usePopulateMovies = (
  type: "NOW_PLAYING" | "POPULAR" | "UPCOMING" | "TOP_RATED"
): void => {
  const dispatch = useDispatch();

  const { nowPlayingMovies, popularMovies, upcomingMovies, topRatedMovies } =
    useSelector(movieSelector);

  // A map to associate type with state and action function
  const typeMap = {
    NOW_PLAYING: {
      typeState: nowPlayingMovies,
      actionCreator: addToNowPlaying,
    },
    POPULAR: {
      typeState: popularMovies,
      actionCreator: addToPopular,
    },
    UPCOMING: {
      typeState: upcomingMovies,
      actionCreator: addToUpcoming,
    },
    TOP_RATED: {
      typeState: topRatedMovies,
      actionCreator: addToTopRated,
    },
  };

  useEffect(() => {
    const { typeState, actionCreator } = typeMap[type];
    // Call only if state is null
    if (typeState.length === 0) {
      getMovieList(type, actionCreator);
    }
  }, []);

  const getMovieList = async (type: any, actionCreator: any) => {
    try {
      const data = await fetchWrapper(TMDB_MOVIES_API(type));

      // Dispatch the appropriate action based on the type
      dispatch(actionCreator(data?.results.reverse()));
      if (type === "NOW_PLAYING") dispatch(setFeaturedMovieIndex());
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
};

export default usePopulateMovies;
