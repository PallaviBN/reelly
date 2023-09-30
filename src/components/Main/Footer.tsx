import React from "react";
import { useSelector } from "react-redux";
import { gptSelector } from "../../redux/GPTSlice";
import LinkedInSVG from "../../utils/media/icons8-linkedin.svg";
import GithubSVG from "../../utils/media/icons8-github.svg";
import translate from "../../utils/intl/translate";

const Footer = () => {
  const { isSearchView } = useSelector(gptSelector);
  return (
    <footer
      className={`bottom-0 font-mono w-full text-yellow-100 text-center px-8 pt-14 pb-1 mx-2 ${isSearchView ? "relative" : "relative"} overflow-hidden`}
    >
      <span>{translate("footer.text")}</span>
      <div className="mt-3">
        <a
          href="https://github.com/PallaviBN"
          target="_blank"
          className="hover:text-yellow-300 mx-2 inline-block w-7 hover:bg-yellow-200 rounded-xl"
        >
          <img src={GithubSVG} alt="Github Link" />
        </a>
        <a
          href="https://www.linkedin.com/in/pallavi-nagarkar-7283a7109/"
          target="_blank"
          className="hover:text-yellow-300 mx-2 inline-block w-7 hover:bg-yellow-200 rounded-xl"
        >
          <img src={LinkedInSVG} alt="LinkedIn Link" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
