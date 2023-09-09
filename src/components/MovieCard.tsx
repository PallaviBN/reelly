import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/static/constants";

interface MovieCardProps {
  movieBackdrop: string;
  moviePoster: string;
  movieTitle: string;
}

const MovieCard = ({
  movieBackdrop,
  moviePoster,
  movieTitle,
}: MovieCardProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div
      className="w-48 hover:w-96"
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <img
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseOut={() => {
          setIsHover(false);
        }}
        className={`h-60 w-44 hover:w-96 hover:pr-3 transition-all ease-in-out delay-150 duration-500 rounded-md`}
        src={IMG_CDN_URL + (isHover ? movieBackdrop : moviePoster)}
        alt={movieTitle + " poster"}
      />
      {/* {isHover && (
        <div className="text-white absolute left-0 right-0 top-0 bottom-0">
          <h3 className="text-white absolute">{movieTitle}</h3>
        </div>
      )} */}
    </div>
  );
};

export default MovieCard;
