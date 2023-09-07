import Header from "./Header";
import { useSelector } from "react-redux";
import { movieSelector } from "../utils/redux/MovieSlice";
import usePopulateMovies from "../hooks/usePopulateMovies";
import PrimarySection from "./PrimarySection";
import SecondarySection from "./SecondarySection";

const Browse = () => {
  usePopulateMovies("NOW_PLAYING");
  
  return (
    <div className="w-screen">
      <Header />
      <PrimarySection />
      <SecondarySection />
    </div>
  );
};

export default Browse;
