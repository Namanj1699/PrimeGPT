import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movies',
    initialState : {
        movieList : []
    },
    reducers : {
        addPlayingMovies : (state,action) =>{
            state.movieList = action.payload;
        }
    }
});

export const {addPlayingMovies} = movieSlice.actions;
export default movieSlice.reducer;