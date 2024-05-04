import React, { useRef } from "react";
// import Openai from "../utils/Openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../utils/constant/Constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { tmdbGetOptions } from "../utils/constant/Constant";
import { useDispatch } from "react-redux";
import { addGptSearchMovieList } from "../utils/redux/gptSlice";

const GPTSearchbar = () => {
  const gptSearch = useRef(null);
  const dispatch = useDispatch();

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  //search movie in TMDb
  const searchMovieTMDb = async (movie) => {
    // const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'include_adult=false&language=en-US&page=1', tmdbGetOptions)
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      tmdbGetOptions
    );
    const json = await data.json();
    return json.results;
  };

  const gptResults = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest movies for the query " +
      gptSearch.current.value +
      ". only give me name of 5 movies, comma separated like the example result given ahead. Example Result: Gadar2, animal, sholay, phir hera pheri, dhamaal";

    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const results = response.text();
    const gptMovieList = results.split(",");
    const promiseArray = gptMovieList.map((movie) => searchMovieTMDb(movie));
    const tMDbResults = await Promise.all(promiseArray);
    
    dispatch(addGptSearchMovieList({gptMovieNames : gptMovieList, gptMovieResults : tMDbResults }));

  };

  const handleSearchClick = () => {
    gptResults();
  };

  return (
    <div>
      <div className="absolute mt-20 mx-[320px] md:mx-[1200px] cursor-pointer">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="xl"
          onClick={handleSearchClick}
        />
      </div>
      <div>
        <input
          ref={gptSearch}
          className="border-[1px] border-black p-4 w-9/12 ml-[55px] md:ml-[175px] my-16 rounded-lg cursor-text bg-slate-700 text-white font-semibold"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default GPTSearchbar;
