import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import { gptSelector, resetMovieSearchResult } from "../utils/redux/GPTSlice";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { MovieData } from "../utils/static/type";

const SearchResults = ({ searchTxt }) => {
  const dispatch = useDispatch();
  const { movieSearchResult } = useSelector(gptSelector);
  const searchPlaceholder = useIntl().formatMessage({
    id: "search.result",
  });

  useEffect(() => {
    return () => {
      dispatch(resetMovieSearchResult());
    };
  }, []);

  !movieSearchResult?.movies && (
    <div>NO SEARCH RESULTS. PLEASE REFINE YOUR SEARCH</div>
  );

  return !searchTxt ? (
    <div className="m-auto w-[50%] p-32 text-white text-2xl font-bold text-center">
      Your Gateway to Movie Bliss Awaits... Begin Searching 🍿.Type to Discover
      Your Next Cinematic Adventure 🎬
    </div>
  ) : (
    <div className="m-auto w-[80%] h-screen text-white py-4 font-semibold text-base p-2">
      {searchTxt && (
        <div className="px-8">
          {searchPlaceholder}
          <span className="text-xl font-bold">"{searchTxt}"</span>
        </div>
      )}
      <div className="mt-5">
        {movieSearchResult?.movies && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movieSearchResult?.movies
              .flat() // Flatten the array of movies
              .map((m: MovieData) => {
                if (!m.poster_path) return null;
                return (
                  <div key={m.id} className="flex flex-col items-center pb-4">
                    <MovieCard
                      movieBackdrop={m.backdrop_path}
                      moviePoster={m.poster_path}
                      movieTitle={m.title}
                    />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
