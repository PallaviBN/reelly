import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { MovieData } from "../utils/static/type";

interface MovieListProps {
  type: string;
  movies: MovieData[];
}

const MovieList = ({ type, movies }: MovieListProps) => {
  const elementRef = useRef<HTMLUListElement>(null);
  const [showArrow, setShowArrow] = useState<number | null>(null);

  const handleHorizantalScroll = (
    element: any,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      setShowArrow(element.scrollLeft);
    }, 25);
  };

  return (
    <div className="mb-12">
      <h2 className="text-lg font-bold text-white px-8 py-2">
        {type}
        {" »"}
      </h2>
      <div className="flex flex-row h-full group">
        <button
          className={`text-white bg-slate-700 opacity-70 w-[4%] -ml-8 absolute left-0 h-[18.75%] text-2xl rounded-r-lg invisible ${
            showArrow && showArrow > 0 ? "group-hover:visible" : ""
          }`}
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 1000, -150);
          }}
        >
          ⬅️
        </button>
        <ul className="flex overflow-x-hidden mx-4" ref={elementRef}>
          {movies.map((movie: MovieData) => {
            return (
              <li key={movie?.id}>
                <MovieCard
                  movieBackdrop={movie?.backdrop_path}
                  moviePoster={movie?.poster_path}
                  movieTitle={movie?.title}
                />
              </li>
            );
          })}
        </ul>
        <button
          className={`text-white bg-slate-700 opacity-70 w-[4%] mr-3 absolute right-0 h-[18.75%] text-2xl
          rounded-l-lg invisible ${
            showArrow === null || showArrow < 2320 ? "group-hover:visible" : ""
          }`}
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 1000, 150);
          }}
        >
          ➡️
        </button>
      </div>
    </div>
  );
};

export default MovieList;
