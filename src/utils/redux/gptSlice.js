import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        gptFlag : true,
        gptMovieNames : null,
        gptMovieResults : null,
    },
    reducers : {
        modifyGptFlag : (state,action) =>{
            state.gptFlag = !state.gptFlag
        },

        addGptSearchMovieList : (state , action)=>{
            const {gptMovieNames, gptMovieResults} = action.payload;
            state.gptMovieNames = gptMovieNames;
            state.gptMovieResults = gptMovieResults;
        }
    }
})

export const {modifyGptFlag, addGptSearchMovieList} = gptSlice.actions;
export default gptSlice.reducer;
