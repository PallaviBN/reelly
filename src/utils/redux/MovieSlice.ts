import { createSlice, current } from "@reduxjs/toolkit";
import { MovieData, MovieVideo } from "../static/type";

const initialMovieState = {
  nowPlayingMovies: [] as MovieData[],
  popularMovies: [] as MovieData[],
  upcomingMovies: [] as MovieData[],
  topRatedMovies: [] as MovieData[],
  featuredMovieTrailer: {} as MovieVideo,
  featureMovieIndex: null as null | number,
};

const movieSlice = createSlice({
  name: "movie",
  initialState: initialMovieState,
  reducers: {
    setFeaturedMovieIndex: (state) => {
      state.featureMovieIndex = Math.floor(
        Math.random() * state.nowPlayingMovies.length
      );
    },
    addToNowPlaying: (state, { payload }) => {
      state.nowPlayingMovies = payload;
      //   console.log(state.nowPlayingMovies, payload);
    },
    addToPopular: (state, { payload }) => {
      state.popularMovies = payload;
      //   console.log(state.popularMovies, payload);
    },
    addToUpcoming: (state, { payload }) => {
      state.upcomingMovies = payload;
      //   console.log(state.upcomingMovies, payload);
    },
    addToTopRated: (state, { payload }) => {
      state.topRatedMovies = payload;
      //   console.log(state.topRatedMovies, payload);
    },
    addFeaturedTrailer: (state, { payload }) => {
      state.featuredMovieTrailer = payload;
      //   console.log(state.featuredMovieTrailer, payload);
    },
    resetFeaturedTrailer: (state) => {
      state.featuredMovieTrailer = {} as MovieVideo;
      //   console.log(state.featuredMovieTrailer, payload);
    },
  },
});

export const {
  setFeaturedMovieIndex,
  addToNowPlaying,
  addToPopular,
  addToUpcoming,
  addToTopRated,
  addFeaturedTrailer,
  resetFeaturedTrailer,
} = movieSlice.actions;

export default movieSlice.reducer;

export const movieSelector = (state: any) => state.movieData;
