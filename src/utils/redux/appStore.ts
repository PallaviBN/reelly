import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./MovieSlice";
const appStore = configureStore({
  reducer: { userData: userReducer, movieData: moviesReducer },
});
export default appStore;

