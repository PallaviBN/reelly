import React from "react";
import { IMG_CDN_URL } from "../../utils/static/constants";
import { useDispatch } from "react-redux";
import { resetFeaturedTrailer } from "../../redux/MovieSlice";
import { useNavigate } from "react-router-dom";
import { MovieData } from "../../utils/static/type";

interface MovieCardProps {
  movie: MovieData;
  moviePoster: string;
  movieTitle: string;
  movieId: number;
}

const MovieCard = ({
  movie,
  moviePoster,
  movieTitle,
  movieId,
}: MovieCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const playMovieHandler = (event: any) => {
    event.preventDefault();
    dispatch(resetFeaturedTrailer());
    navigate({
      pathname: "/play/" + movieId,
    });
  };

  const viewDetailsHandler = (event: any) => {
    event.preventDefault();
    navigate(
      {
        pathname: "/details/" + movieId,
      },
      { state: { movieObj: movie } }
    );
  };

  return (
    <div className="relative w-44 xl:w-56 h-64 xl:h-80 ml-4">
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
            <button
              onClick={playMovieHandler}
              className="m-2 pl-5 pr-4 text-center py-2.5 bg-red-500 text-white text-2xl rounded-full hover:bg-red-700 transition-colors ease-in-out duration-300"
            >
              ▷
            </button>
            <button
              onClick={viewDetailsHandler}
              className="m-2 px-6 py-2.5 bg-blue-500 text-white text-2xl rounded-full hover:bg-blue-700 transition-colors ease-in-out duration-300"
            >
              ℹ️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
