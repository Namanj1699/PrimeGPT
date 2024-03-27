import { TMDb_options } from "../constant/Constant";
import { useDispatch } from "react-redux";
import { addPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";


const usePlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDb_options
    );
    const res = await data.json();
    dispatch(addPlayingMovies(res.results));
  };
};

export default usePlayingMovies;
