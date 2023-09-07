import { useEffect } from "react";
import fetchWrapper from "../utils/static/fetchWrapper";
import { useDispatch } from "react-redux";
import { addFeaturedTrailer } from "../utils/redux/MovieSlice";
import { MovieVideo } from "../utils/static/type";

const usePopulateMovieTrailer = (movieId: number): void => {
  const dispatch = useDispatch();
  const getVideoUrl = () =>
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
      const data = await fetchWrapper(getVideoUrl());
      const trailerVideo = await data?.results?.filter(
        (videoObj: MovieVideo) => videoObj.type === "Trailer"
      );
      console.log("trailer", trailerVideo, data?.results);
      const trailer = trailerVideo.length ? trailerVideo[0]: data?.results[0];
      dispatch(addFeaturedTrailer(trailer));
    
  };
};

export default usePopulateMovieTrailer;
