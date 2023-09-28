import { createSlice } from "@reduxjs/toolkit";
import { Genre, MovieData, MovieVideo } from "../static/type";

const initialMovieState = {
  nowPlayingMovies: [] as MovieData[],
  popularMovies: [] as MovieData[],
  upcomingMovies: [] as MovieData[],
  topRatedMovies: [] as MovieData[],
  featuredMovieTrailer: {} as MovieVideo,
  featureMovieIndex: null as null | number,
  genreList: [] as Genre[],
  watchList: [] as MovieData[],
};

const movieSlice = createSlice({
  name: "movie",
  initialState: initialMovieState,
  reducers: {
    setFeaturedMovieIndex: (state) => {
      state.featureMovieIndex = Math.floor(
        Math.random() * state.nowPlayingMovies?.length
      );
    },
    addToNowPlaying: (state, { payload }) => {
      state.nowPlayingMovies = payload;
    },
    addToPopular: (state, { payload }) => {
      state.popularMovies = payload;
    },
    addToUpcoming: (state, { payload }) => {
      state.upcomingMovies = payload;
    },
    addToTopRated: (state, { payload }) => {
      state.topRatedMovies = payload;
    },
    addFeaturedTrailer: (state, { payload }) => {
      state.featuredMovieTrailer = payload;
    },
    resetFeaturedTrailer: (state) => {
      state.featuredMovieTrailer = {} as MovieVideo;
    },
    addToGenreList: (state, { payload }) => {
      state.genreList = payload;
    },
    addToWatchlist: (state, { payload }) => {
      const movieExists = state.watchList.filter((m) => m.id === payload.id);
      movieExists.length
        ? (state.watchList = state.watchList.filter((m) => m.id !== payload.id))
        : state.watchList.push(payload);
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
  addToGenreList,
  addToWatchlist,
} = movieSlice.actions;

export default movieSlice.reducer;

export const movieSelector = (state: any) => state.movieData;
