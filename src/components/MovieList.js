import React from "react";
import MovieCards from "../components/MovieCards";
const MovieList = ({ title, movies }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl text-white font-semibold py-4">{title}</h1>

      <div className=" flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCards key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
