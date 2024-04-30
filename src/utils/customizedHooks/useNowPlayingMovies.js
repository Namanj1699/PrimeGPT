import { tmdbGetOptions } from "../constant/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const data = useSelector((store)=>store.movies);

  useEffect(() => {
    !data.nowPlayingMovies &&
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      tmdbGetOptions
    );
    const res = await data.json();
    dispatch(addNowPlayingMovies(res.results));
  };
};

export default useNowPlayingMovies;
