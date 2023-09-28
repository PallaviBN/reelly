import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  movieSelector,
  resetFeaturedTrailer,
} from "../utils/redux/MovieSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { MovieData } from "../utils/static/type";

interface FeaturedTitleProps {
  id: number;
  title: string;
  overview: string;
  movie: MovieData;
}

const FeaturedTitle = ({ id, title, overview, movie }: FeaturedTitleProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { watchList } = useSelector(movieSelector);
  const location = useLocation();

  const isDetailsPage = location.pathname.includes("/details");

  const playMovieHandler = (event: any) => {
    event.preventDefault();
    dispatch(resetFeaturedTrailer());
    navigate({
      pathname: "/play/" + id,
    });
  };

  const viewDetailsHandler = (event: any) => {
    event.preventDefault();
    navigate(
      {
        pathname: "/details/" + id,
      },
      { state: { movieObj: movie } }
    );
  };

  const addToWatchlistHandler = (event: any) => {
    event.preventDefault();
    dispatch(addToWatchlist(movie));
  };

  return (
    <div
      className={`pt-[16%] absolute bg-gradient-to-r from-black w-screen ${
        isDetailsPage ? "pl-20 aspect-square h-full" : "pl-14 aspect-video"
      }`}
    >
      <h1 className="font-bold text-2xl md:text-4xl text-white">{title}</h1>
      <p
        className={`hidden xl:block text-white ${
          isDetailsPage ? "text-lg pt-8 md:w-4/6 pb-10" : "pt-3 w-2/3 md:w-2/6"
        }`}
      >
        {overview}
      </p>
      <div className={`${isDetailsPage ? "p-0" : "pt-3"} `}>
        <button
          onClick={playMovieHandler}
          className={`bg-white text-black pr-6 mr-2 hover:bg-opacity-70 ${
            isDetailsPage
              ? "px-7 py-5 rounded-full text-4xl"
              : "px-5 py-1.5 rounded-[4px]"
          }`}
        >
          {`▷ ${!isDetailsPage ? "Play" : ""}`}
        </button>
        {!isDetailsPage && (
          <button
            onClick={viewDetailsHandler}
            className="bg-gray-500 bg-opacity-60 px-5 py-1.5 rounded-[4px] text-white pr-6 mr-2 hover:bg-opacity-70"
          >
            {`ℹ️  More Info`}
          </button>
        )}
        {isDetailsPage && (
          <div className="m-8 inline-block">
            <button
              onClick={addToWatchlistHandler}
              className="bg-gray-500 bg-opacity-60 pb-2 pt-0 px-3 rounded-sm text-3xl text-white hover:bg-opacity-70"
            >
              {watchList?.some((m: MovieData) => m.id === movie.id) ? "✓" : "+"}
            </button>
            <span className="ml-2 text-white mb-1 pb-1 text-lg font-bold">
              Watchlist
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedTitle;
