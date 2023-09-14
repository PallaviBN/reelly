import { createSlice } from "@reduxjs/toolkit";
import { MovieData } from "../static/type";

const initialGPTState = {
  isSearchView: false,
  locale: "en",
  movieSearchResult: {
    gptResponse: [] as Array<string>,
    movies: [] as MovieData[],
  },
};

const gptSlice = createSlice({
  name: "gpt",
  initialState: initialGPTState,
  reducers: {
    toggleSearchView: (state, { payload }) => {
      state.isSearchView = payload;
    },
    setLocale: (state, { payload }) => {
      state.locale = payload;
    },
    addMovieResult: (state, { payload }) => {
      state.movieSearchResult.gptResponse = payload.movieNames;
      state.movieSearchResult.movies = payload.movies;
    },
    resetMovieSearchResult: (state) => {
      state.movieSearchResult.movies = [];
    },
  },
});

export const {
  toggleSearchView,
  setLocale,
  addMovieResult,
  resetMovieSearchResult,
} = gptSlice.actions;
export default gptSlice.reducer;
export const gptSelector = (state: any) => state.gptData;
