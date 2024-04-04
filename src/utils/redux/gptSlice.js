import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        gptFlag : true 
    },
    reducers : {
        modifyGptFlag : (state,action) =>{
            state.gptFlag = !state.gptFlag
        }
    }
})

export const {modifyGptFlag} = gptSlice.actions;
export default gptSlice.reducer;
