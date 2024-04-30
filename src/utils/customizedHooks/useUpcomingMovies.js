import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../redux/movieSlice";
import { tmdbGetOptions } from "../constant/Constant";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const data = useSelector((store)=>store.movies);


  useEffect(() => {
    // !data.upcomingMovies &&
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      tmdbGetOptions
    );
    const res = await data.json();
    dispatch(addUpcomingMovies(res.results));
  };
};

export default useUpcomingMovies;
