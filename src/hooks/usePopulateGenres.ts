import { useEffect } from "react";
import fetchWrapper from "../utils/static/fetchWrapper";
import { useDispatch } from "react-redux";
import { addToGenreList } from "../utils/redux/MovieSlice";
import { TMDB_GENRE_API } from "../utils/static/constants";

const usePopulateGenres = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = async () => {
    const res = await fetchWrapper(TMDB_GENRE_API);
    dispatch(addToGenreList(res.genres));
  };
};

export default usePopulateGenres;
