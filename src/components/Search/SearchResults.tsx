import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import { gptSelector, resetMovieSearchResult } from "../../redux/GPTSlice";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../Features/MovieCard";
import { MovieData } from "../../utils/static/type";
import translate from "../../utils/intl/translate";

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
    <div className=" m-auto w-[85%] md:w-[50%] p-16 md:p-32 text-white text-2xl bg-[#231f20] mt-4 rounded-3xl font-bold text-center">
      {translate("search.result.empty.view.text")}
    </div>
  ) : (
    <div className="m-auto w-[90%] md:w-[80%] text-white py-4 font-semibold text-base p-2">
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
                      movie={m}
                      moviePoster={m.poster_path}
                      movieTitle={m.title}
                      movieId={m.id}
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
