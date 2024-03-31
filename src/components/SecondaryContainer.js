import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.movieList && (
      <div className="pl-6 -mt-72 relative z-[5]">
        <MovieList title={"Now on Screens"} movies={movies.movieList} />
        <MovieList title={"Trending"} movies={movies.movieList} />
        <MovieList title={"Popular"} movies={movies.movieList} />
        <MovieList title={"Upcoming Movies"} movies={movies.movieList} />

      </div>
    )
  );
};

export default SecondaryContainer;
