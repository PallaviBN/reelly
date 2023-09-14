import React from "react";

interface FeaturedTitleProps {
  title: string;
  overview: string;
}

const FeaturedTitle = ({ title, overview }: FeaturedTitleProps) => {
  return (
    <div className="pt-[16%] pl-14 absolute bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="font-bold text-4xl text-white">{title}</h1>
      <p className="pt-3 w-2/6 text-white">{overview}</p>
      <div className="pt-3">
        <button className="bg-white px-5 py-1.5 rounded-[4px] text-black pr-6 mr-2 hover:bg-opacity-70">
          {`▷ Play`}
        </button>
        <button className="bg-gray-500 bg-opacity-60 px-5 py-1.5 rounded-[4px] text-white pr-6 mr-2 hover:bg-opacity-70">
          {`ℹ️  More Info`}
        </button>
      </div>
    </div>
  );
};

export default FeaturedTitle;
