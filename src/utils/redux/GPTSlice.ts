import { createSlice } from "@reduxjs/toolkit";
import { MovieData } from "../static/type";

const initialGPTState = {
  isSearchView: false,
  locale: "en",
  searhTxt: "",
  movieSearchResult: [] as MovieData[],
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
    populateSearchText: (state, { payload }) => {
      state.searhTxt = payload;
    },
    addMovieResult: (state, { payload }) => {
      state.movieSearchResult.push(payload);
    },
  },
});

export const {
  toggleSearchView,
  setLocale,
  addMovieResult,
  populateSearchText,
} = gptSlice.actions;
export default gptSlice.reducer;
export const gptSelector = (state: any) => state.gptData;
