import React from "react";
import { IMG_CDN_URL } from "../utils/static/constants";

interface MovieCardProps {
  moviePoster: string;
  movieTitle: string;
}

const MovieCard = ({ moviePoster, movieTitle }: MovieCardProps) => {
  return (
    <div className="w-48 ">
      <img
        className="h-60 w-44 rounded-md"
        src={IMG_CDN_URL + moviePoster}
        alt={movieTitle + " poster"}
      />
    </div>
  );
};

export default MovieCard;
