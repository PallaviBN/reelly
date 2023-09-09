import { createSlice } from "@reduxjs/toolkit";

const initialGPTState = {
  isSearchView: false,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState: initialGPTState,
  reducers: {
    toggleSearchView: (state, {payload}) => {
      state.isSearchView = payload;
    },
  },
});

export const { toggleSearchView } = gptSlice.actions;
export default gptSlice.reducer;
export const gptSelector = (state: any) => state.gptData;
