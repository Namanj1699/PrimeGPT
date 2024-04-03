import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        gptFlag : false 
    },
    reducers : {
        modifyGptFlag : (state,action) =>{
            state.gptFlag = !action.payload
        }
    }
})

export const {modifyGptFlag} = gptSlice.actions;
export default gptSlice.reducer;
