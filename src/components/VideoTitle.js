import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  const [displayFlag, setDisplayFlag] = useState(false);

  const handleDisplayFlag = () => {
    setDisplayFlag(!displayFlag);
  };

  return (
    <div className="w-screen aspect-video absolute text-white bg-gradient-to-r from-black px-24 pt-[10%]">
      <h1 className="text-2xl md:text-4xl font-semibold md:font-bold ml-[-80px] md:ml-0 py-1 md:py-8">
        {title}
      </h1>

      {displayFlag ? (
        <p className="py-4 text-xs w-1/4 md:text-lg">
          {displayFlag && overview}
        </p>
      ) : (
        <button
          className="hidden md:inline-block mx-2 bg-gray-500 text-white p-2 md:p-4 px-3 md:px-12 text-xl rounded-lg bg-opacity-50 ml-[-80px] md:ml-[-10px]"
          onClick={handleDisplayFlag}
        >
          <FontAwesomeIcon icon={faCircleInfo} size="lg" className="px-2" />
          More Info
        </button>
      )}
    </div>
  );
};

export default VideoTitle;
