import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../utils/customizedHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/customizedHooks/usePopularMovies";
import useTopRatedMovies from "../utils/customizedHooks/useTopRatedMovies"
import useUpcomingMovies from "../utils/customizedHooks/useUpcomingMovies"

const BrowsingPage = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black">
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  );
};

export default BrowsingPage;
