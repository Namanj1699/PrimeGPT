import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../utils/customizedHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/customizedHooks/usePopularMovies";
import useTopRatedMovies from "../utils/customizedHooks/useTopRatedMovies"
import useUpcomingMovies from "../utils/customizedHooks/useUpcomingMovies"
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";


const BrowsingPage = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const data = useSelector((store)=>store.gpt)
  
  return (
    <div className="bg-black">
      <Header />
      {data.gptFlag ? <> 
      <MainContainer />
      <SecondaryContainer/>      
      </> :<>
      <GPTSearch/>
      </>}
      
    </div>
  );
};

export default BrowsingPage;
