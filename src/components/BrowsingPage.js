import React from "react";
import useNowPlayingMovies from "../utils/customizedHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/customizedHooks/usePopularMovies";
import useTopRatedMovies from "../utils/customizedHooks/useTopRatedMovies"
import useUpcomingMovies from "../utils/customizedHooks/useUpcomingMovies"
import Footer from "./Footer"

const BrowsingPage = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    <div className="bg-black">
       <> 
      <MainContainer />
      <SecondaryContainer />     
      <Footer /> 
      </> 
    </div>
  );
};

export default BrowsingPage;
