import React from "react";
import Header from "./Header";
import usePlayingMovies from "../utils/customizedHooks/usePlayingMovies";
import MainContainer from "./MainContainer";

const BrowsingPage = () => {
  usePlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default BrowsingPage;
