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
          className={`text-white bg-slate-700 opacity-70 w-[8.5%] md:w-[4.5%] z-20 -ml-8 text-6xl hover:text-8xl absolute left-0 h-[19.1%] md:h-[20.3%] transition-all duration-300 ease-in-out rounded-r-lg invisible ${
            showArrow && showArrow > 0 ? "group-hover:visible" : ""
          }`}
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 1000, -150);
          }}
        >
          ‹
        </button>
        <ul className="flex overflow-x-hidden md:mx-4" ref={elementRef}>
          {movies?.map((movie: MovieData) => {
            return (
              <li key={movie?.id}>
                <MovieCard
                  movie={movie}
                  moviePoster={movie?.poster_path}
                  movieTitle={movie?.title}
                  movieId={movie?.id}
                />
              </li>
            );
          })}
        </ul>
        <button
          className={`text-white bg-slate-700 opacity-70 w-[8.5%] md:w-[4.5%] md:mr-3 absolute right-0 h-[19.1%] md:h-[20.3%] text-6xl hover:text-8xl transition-all duration-300 ease-in-out 
          rounded-l-lg invisible ${showArrow === null || showArrow < 3320 ? "group-hover:visible" : ""}`}
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 1000, 150);
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default MovieList;
