import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IMG_CDN_URL, TMDB_GENRE_API } from "../../utils/static/constants";
import { Genre, MovieData } from "../../utils/static/type";
import BGSVG from "../../utils/media/background.svg";
import { addToGenreList, movieSelector } from "../../redux/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppLogo from "../../utils/media/appLogo.png";
import FeaturedTitle from "../LandingPage/FeaturedTitle";
import usePopulateGenres from "../../hooks/usePopulateGenres";

const Details = () => {
  const navigate = useNavigate();
  const { genreList } = useSelector(movieSelector);
  const location = useLocation();
  const {
    id,
    backdrop_path,
    title,
    genre_ids,
    adult,
    overview,
    release_date,
    vote_average,
  }: MovieData = location.state?.movieObj;

  usePopulateGenres();

  return (
    <div className="h-auto">
      <header className="w-screen flex align-middle py-2 z-10 shadow-none bg-gradient-to-br from-black px-4 justify-center md:justify-between">
        <Link to="/browse">
          <img
            className="md:w-32 h-12 md:ml-4 mt-1.5"
            src={AppLogo}
            alt="app logo"
          />
        </Link>
        <Link
          to="/watchlist"
          className="text-white mt-2.5 mr-10 w-10 h-10 cursor-pointer text-3xl bg-amber-50 rounded-full shadow-black shadow-md"
        >
          📺
        </Link>
      </header>
      <div className="relative w-[100rem] h-[35rem]">
        <div
          className="bg-cover bg-center h-full bg-opacity-70 transition-all duration-300 ease-in-out"
          style={{
            backgroundImage: `url(${
              backdrop_path ? IMG_CDN_URL + backdrop_path : BGSVG
            })`,
          }}
        >
          <FeaturedTitle
            id={id}
            title={title}
            overview={overview}
            movie={location?.state?.movieObj}
          />
        </div>
        <div className="py-8 pl-20 relative bottom-0">
          <span className="text-lg bg-[#999] font-medium rounded-md leading-10 py-1 text-neutral-700 text-600 m-0 w-fit px-2">
            Release Year: {release_date.slice(0, 4)}
          </span>
          <span className="ml-4 text-lg bg-[#999] font-medium rounded-md leading-10 py-1 text-neutral-700 text-600 m-0 w-fit px-2">
            TMDb Rating: {vote_average}
          </span>
          <span className="ml-4 text-lg bg-[#999] font-medium rounded-md leading-10 py-1 text-neutral-700 text-600 m-0 w-fit px-2">
            {adult ? "A" : "UA"}
          </span>
          <div className="inline-block ml-2">
            {genre_ids?.map((id: Number) => {
              return genreList?.map((genre: Genre) => {
                if (genre.id === id) {
                  return (
                    <span
                      key={genre?.id}
                      className="text-lg font-medium rounded-md leading-10 py-1 text-white cursor-pointer text-600 m-0 w-fit px-2 underline underline-offset-4"
                    >
                      {genre?.name}
                    </span>
                  );
                }
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
