import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMoviesTrailer from "../utils/customizedHooks/useMoviesTrailer";
import { useSelector } from "react-redux";
import useMovieCredit from "../utils/customizedHooks/useMovieCredit";
import CrewCards from "./CrewCards";
import { tmdbGetOptions } from "../utils/constant/Constant";
import navailable from '../images/navailable.jpeg'

const MovieOverview = () => {
  
  const { movieId } = useParams();
  const [overview , setOverview] = useState(null);
  const [title , setTitle] = useState(null);

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"?language=en-US",
      tmdbGetOptions
    );
  
    const jsonNew = await data.json();
    setOverview(jsonNew.overview);
    setTitle(jsonNew.title)
  }
  
  useMoviesTrailer(movieId, true);
  const trailer = useSelector((store) => store.movies.overviewTrailer);
  
  useMovieCredit(movieId);
  const movieCast = useSelector((store)=>store.movies.cast);
  
  return trailer===undefined ?(<div>
    <img className="w-6/12 mx-auto my-12" src={navailable}/>
    <h1 className="text-white mx-12 my-10 text-4xl">{title}</h1>
      <p className="text-white mx-12">{overview}</p>
      <h1 className="text-white mx-12 my-10 text-2xl">Cast & Crew</h1>
      <div className=" flex overflow-x-scroll my-6 mx-10">
        <div className="flex">
          {movieCast?.map((cast) => (
            <CrewCards key={cast.id} profile_path={cast.profile_path} name={cast.name} />
          ))}
        </div>
      </div>
  </div>): (
    <div>
      <iframe
        className="w-screen aspect-video"
        height="500"
        src={
          "https://www.youtube.com/embed/" +
          trailer.key +
          "?si=BFBYOBci8Cdy9ZHN&autoplay=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h1 className="text-white mx-12 my-10 text-4xl">{title}</h1>
      <p className="text-white mx-12">{overview}</p>
      <h1 className="text-white mx-12 my-10 text-2xl">Cast & Crew</h1>
      <div className=" flex overflow-x-scroll my-6 mx-10">
        <div className="flex">
          {movieCast?.map((cast) => (
            <CrewCards key={cast.id} profile_path={cast.profile_path} name={cast.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieOverview;




