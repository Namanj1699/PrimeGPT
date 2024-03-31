import React from "react";
import Header from "./Header";
import usePlayingMovies from "../utils/customizedHooks/usePlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const BrowsingPage = () => {
  usePlayingMovies();

  return (
    <div className="bg-black">
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  );
};

export default BrowsingPage;
