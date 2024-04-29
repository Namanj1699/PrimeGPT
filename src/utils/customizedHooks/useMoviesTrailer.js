import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../redux/movieSlice";
import { tmdbGetOptions } from "../constant/Constant";
import { addOverviewTrailer } from "../redux/movieSlice";

const useMoviesTrailer = (movieId, flag) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      tmdbGetOptions
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json[0];
    if (flag) dispatch(addOverviewTrailer(trailer));
    else dispatch(addTrailer(trailer));
  };
};

export default useMoviesTrailer;
