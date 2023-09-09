import Header from "./Header";
import { useSelector } from "react-redux";
import { movieSelector } from "../utils/redux/MovieSlice";
import usePopulateMovies from "../hooks/usePopulateMovies";
import PrimarySection from "./PrimarySection";
import SecondarySection from "./SecondarySection";
import Search from "./Search";
import { gptSelector } from "../utils/redux/GPTSlice";

const Browse = () => {
  usePopulateMovies("NOW_PLAYING");

  const { isSearchView } = useSelector(gptSelector);

  return (
    <div className="w-screen">
      <Header />
      {isSearchView ? (
        <Search />
      ) : (
        <>
          <PrimarySection />
          <SecondarySection />
        </>
      )}
    </div>
  );
};

export default Browse;
