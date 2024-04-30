import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";
import { tmdbGetOptions } from "../constant/Constant";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const data = useSelector((store)=>store.movies);

  useEffect(() => {
    !data.topRatedMovies &&
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      tmdbGetOptions
    );
    const res = await data.json();

    dispatch(addTopRatedMovies(res.results));
  };
};

export default useTopRatedMovies;
