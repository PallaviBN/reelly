import React, { SyntheticEvent, useRef, useState } from "react";
import translate from "../utils/intl/translate";
import { useIntl } from "react-intl";
import openai from "../utils/static/openai";
import fetchWrapper from "../utils/static/fetchWrapper";
import { TMDB_SEARCH_API } from "../utils/static/constants";
import { useDispatch } from "react-redux";
import { addMovieResult, populateSearchText } from "../utils/redux/GPTSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const searchText = useRef<HTMLInputElement>(null);

  const noResponseText = useIntl().formatMessage({
    id: "search.no.response",
  });
  const emptySearchText = useIntl().formatMessage({
    id: "search.empty.text",
  });
  const searchPlaceholder = useIntl().formatMessage({
    id: "search.placeholder",
  });

  const tmdbSearch = async (movie: string) => {
    const data = await fetchWrapper(TMDB_SEARCH_API(movie));
    console.log(data, data.results);
    return data?.results;
  };

  const searchHandler = async () => {
    // call openai API to get search results
    if (searchText?.current?.value) {
      const searchQuery =
        "Act as a Movie recommendation system and suggest the movie titles for the query:" +
        searchText?.current?.value +
        ". Limit the results to 10 and provide the output as comma separated movie titles, eg: jawan, avengers, mili, mission impossible";
      const searchResult = await openai.chat.completions.create({
        messages: [{ role: "user", content: searchQuery }],
        model: "gpt-3.5-turbo",
      });
      if (!searchResult.choices) {
        setErrorMsg(noResponseText);
      } else {
        dispatch(populateSearchText(searchText?.current?.value));
        const response = searchResult.choices[0].message.content?.split(", ");
        console.log(response);
        // call TMDB to get results for each of the movies
        const tmdbPromiseArray = response?.map((movie: string) => {
          tmdbSearch(movie);
        });

        //wait till each movie search promise is resolved
        if (tmdbPromiseArray) {
          const tmdbResponse = await Promise.all(tmdbPromiseArray);
          await console.log(tmdbResponse);
          // tmdbResponse.map(li)
          dispatch(addMovieResult(tmdbResponse));
        }
      }
    } else {
      setErrorMsg(emptySearchText);
    }
  };

  return (
    <div className="">
      <form
        className="flex items-center justify-center w-screen pt-[8%] bg-black"
        onSubmit={(event: SyntheticEvent) => {
          event.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 rounded-md w-[30%] border-white border-2 bg-gray-700 font-bold text-white text-lg"
          placeholder={searchPlaceholder}
          onChange={() => {
            setErrorMsg(null);
          }}
        ></input>
        <button
          className="bg-red-500 py-2 px-2.5 font-medium text-yellow-50 rounded-md"
          onClick={searchHandler}
        >
          {translate("search.text")}
        </button>
      </form>
      {errorMsg && (
        <p className="font-bold text-red-400 text-center">{errorMsg}</p>
      )}
    </div>
  );
};

export default SearchBar;
