import React from "react";
import MovieCards from "../components/MovieCards";
import { Link } from "react-router-dom";
const MovieList = ({ title, movies }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl text-white font-semibold py-4">{title}</h1>

      <div className=" flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies?.map((movie) => (
            <Link key={movie.id} to={"/overview/"+movie.id}>
            <MovieCards  posterPath={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
