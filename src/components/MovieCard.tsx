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
  return (
    <div className="relative w-56 h-80 ml-4">
      <div
        className="bg-cover bg-center rounded-xl h-full hover:bg-opacity-80 transition-all duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${IMG_CDN_URL + moviePoster})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-end p-4 bg-black bg-opacity-0 hover:bg-opacity-75 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100">
          <h2 className="text-white text-2xl text-center mb-5 font-bold">
            {movieTitle}
          </h2>
          <div className="flex">
            <button className="m-2 pl-5 pr-4 text-center py-2.5 bg-red-500 text-white text-2xl rounded-full hover:bg-red-700 transition-colors ease-in-out duration-300">
              ▷
            </button>
            <button className="m-2 px-6 py-2.5 bg-blue-500 text-white text-2xl rounded-full hover:bg-blue-700 transition-colors ease-in-out duration-300">
              ℹ️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
