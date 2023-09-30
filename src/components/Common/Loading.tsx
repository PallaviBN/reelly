import React from "react";
import LoadingGIF from "../../utils/media/31a97258737059.5a07705b4b565.gif";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={LoadingGIF}
        className="h-40 w-40 rounded-full"
        alt="loading..."
      />
    </div>
  );
};

export default Loading;
