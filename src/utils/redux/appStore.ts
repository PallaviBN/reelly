import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./MovieSlice";
import gptReducer from "./GPTSlice";

const appStore = configureStore({
  reducer: {
    userData: userReducer,
    movieData: moviesReducer,
    gptData: gptReducer,
  },
});
export default appStore;
