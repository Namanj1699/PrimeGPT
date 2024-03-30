import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movies',
    initialState : {
        movieList : [],
        trailerVideo : []
    },
    reducers : {
        addPlayingMovies : (state,action) =>{
            state.movieList = action.payload;
        },
        addTrailerVideo : (state,action) =>{
            state.trailerVideo = action.payload;
        }
    }
});

export const {addPlayingMovies,addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;