import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tmdbGetOptions } from "../constant/Constant";
import { addPopularMovies } from "../redux/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const data = useSelector((store)=>store.movies);

  useEffect(() => {
    !data.popularMovies &&
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      tmdbGetOptions
    );
    const res = await data.json();
    dispatch(addPopularMovies(res.results));
  };
};

export default usePopularMovies;
