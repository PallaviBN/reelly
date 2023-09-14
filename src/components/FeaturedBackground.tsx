import usePopulateMovieTrailer from "../hooks/usePopulateMovieTrailer";
import { useSelector } from "react-redux";
import { movieSelector } from "../utils/redux/MovieSlice";
import React from "react";
interface FeaturedBackgroundProps {
  movieId: number;
}

const FeaturedBackground = ({ movieId }: FeaturedBackgroundProps) => {
  //fetch the trailer by making an API call using the movieId

  usePopulateMovieTrailer(movieId);

  const { featuredMovieTrailer } = useSelector(movieSelector);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${featuredMovieTrailer?.key}?si=nZLq1uJMBPznnyfN?playlist=${featuredMovieTrailer?.key}&loop=1&amp;start=5&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default FeaturedBackground;
