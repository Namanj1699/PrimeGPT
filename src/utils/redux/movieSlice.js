import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movies',
    initialState : {
        trailer : [],
        nowPlayingMovies : [],
        popularMovies : [],
        upcomingMovies : [],
        topRatedMovies : []
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
        }
    },
        
});

export const {addTrailer, addNowPlayingMovies, addPopularMovies, addUpcomingMovies, addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;