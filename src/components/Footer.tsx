import React from "react";
import LinkedInSVG from "../utils/media/icons8-linkedin.svg";
import GithubSVG from "../utils/media/icons8-github.svg";

const Footer = () => {
  return (
    // <div className="m-9 text-white font-mono text-center relative bottom-0">
    <div className="left-4 -right-4 bottom-0 font-mono w-full text-yellow-100 text-center p-8 mx-2 relative overflow-hidden">
      <span>Made with ❤️ by Pallavi🌻</span>
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
        ><img src={LinkedInSVG} alt="LinkedIn Link" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
