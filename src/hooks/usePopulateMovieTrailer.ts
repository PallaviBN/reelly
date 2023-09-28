import { useEffect } from "react";
import fetchWrapper from "../utils/static/fetchWrapper";
import { useDispatch, useSelector } from "react-redux";
import { addFeaturedTrailer, movieSelector } from "../utils/redux/MovieSlice";
import { MovieVideo } from "../utils/static/type";
import { TMDB_VIDEO_API } from "../utils/static/constants";

const usePopulateMovieTrailer = (movieId: number): void => {
  const dispatch = useDispatch();
  const { featuredMovieTrailer } = useSelector(movieSelector);

  useEffect(() => {
    // Call only if featuredMovieTrailer is empty
    if (featuredMovieTrailer && Object.keys(featuredMovieTrailer).length === 0) {
      getVideos();
    }
  }, [featuredMovieTrailer]);

  const getVideos = async () => {
    try {
      const data = await fetchWrapper(TMDB_VIDEO_API(movieId));
      const trailerVideo = await data?.results?.filter(
        (videoObj: MovieVideo) => videoObj.type === "Trailer"
      );
      const trailer = trailerVideo.length ? trailerVideo[0] : data?.results[0];
      dispatch(addFeaturedTrailer(trailer));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
};

export default usePopulateMovieTrailer;
