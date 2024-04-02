import { tmdbGetOptions } from "../constant/Constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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
