import React from "react";
import { useSelector } from "react-redux";
import { movieSelector } from "../../redux/MovieSlice";
import { MovieData } from "../../utils/static/type";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import AppLogo from "../../utils/media/appLogo.png";

const WatchList = () => {
  const { watchList } = useSelector(movieSelector);
  return (
    <div>
      <header className="w-screen flex align-middle py-2 z-10 shadow-none bg-gradient-to-br from-black px-4 justify-center md:justify-between">
        <Link to="/browse">
          <img
            className="md:w-32 h-12 md:ml-4 mt-1.5"
            src={AppLogo}
            alt="app logo"
          />
        </Link>
      </header>
      <h1 className="ml-16 p-8 pt-10 pb-6 text-white font-bold text-xl">
        WatchList »
      </h1>
      <div className="mt-5">
        {watchList.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-14">
            {watchList?.map((m: MovieData) => {
              if (!m.poster_path) return null;
              return (
                <div key={m.id} className="flex flex-col items-center pb-4">
                  <MovieCard
                    movie={m}
                    moviePoster={m.poster_path}
                    movieTitle={m.title}
                    movieId={m.id}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <span className="flex justify-center items-center ml-16 p-8 pt-10 pb-6 text-white font-medium text-base ">
            Nothing in the WatchList yet!!
          </span>
        )}
      </div>
    </div>
  );
};

export default WatchList;
