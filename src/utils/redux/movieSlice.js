import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movies',
    initialState : {
        trailer : [],
        nowPlayingMovies : [],
        popularMovies : [],
        upcomingMovies : [],
        topRatedMovies : [],
        overviewTrailer : [],
        cast : [],
    },
    reducers : {
        addTrailer : (state,action) =>{
            state.trailer= action.payload;
        },

        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies= action.payload;
        },

        addPopularMovies : (state,action) =>{
            state.popularMovies= action.payload
        },

        addUpcomingMovies : (state,action) =>{
            state.upcomingMovies= action.payload
        },

        addTopRatedMovies : (state,action) =>{
            state.topRatedMovies= action.payload
        },

        addOverviewTrailer : (state,action) =>{
            state.overviewTrailer= action.payload
        },

        addMovieCast : (state,action) =>{
            state.cast=action.payload
        }

    },
        
});

export const {addTrailer, addNowPlayingMovies, addPopularMovies, addUpcomingMovies, addTopRatedMovies, addOverviewTrailer,addMovieCast} = movieSlice.actions;
export default movieSlice.reducer;