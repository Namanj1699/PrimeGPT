import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="pl-6 -mt-72 relative z-[5]">
        <MovieList title={"Now on Screens"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
