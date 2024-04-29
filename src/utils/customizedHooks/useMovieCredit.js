import React, { useEffect } from "react";
import { tmdbGetOptions } from "../constant/Constant";
import { useDispatch } from "react-redux";
import { addMovieCast } from "../redux/movieSlice";

const useMovieCredit = (movieId) => {
    const dispatch = useDispatch();
  useEffect(() => {
    getMovieCredit();
  }, []);

  const getMovieCredit = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/credits?language=en-US",
      tmdbGetOptions
    );
    const json = await data.json();
    dispatch(addMovieCast(json.cast));
  };
};

export default useMovieCredit;
