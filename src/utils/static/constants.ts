import { SupportedLanguage } from "./type";

export const TOKEN = process.env.REACT_APP_TMDB_KEY;

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const USER_ICON =
  "https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg";

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = [
  { id: "en", name: "English" },
  { id: "fr", name: "French" },
  { id: "hi", name: "हिंदी" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const TMDB_MOVIES_API = (type: string): string =>
  `https://api.themoviedb.org/3/movie/${type.toLowerCase()}?page=1`;

export const TMDB_VIDEO_API = (movieId: number): string =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

export const TMDB_SEARCH_API = (movie: string): string =>
  `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&total_results=1&page=1`;
