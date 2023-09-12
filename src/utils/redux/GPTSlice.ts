import { createSlice } from "@reduxjs/toolkit";

const initialGPTState = {
  isSearchView: false,
  locale: "en",
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
  },
});

export const { toggleSearchView, setLocale } = gptSlice.actions;
export default gptSlice.reducer;
export const gptSelector = (state: any) => state.gptData;
