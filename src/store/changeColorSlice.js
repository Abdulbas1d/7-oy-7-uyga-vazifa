import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: "red"}

const changeColorSlice = createSlice({
    name: "changeColor",
    initialState,
    reducers: {
        changeColors: (state, action) => {
            state.value = action.payload.value || state.value
        } 
    }
})
 
export default changeColorSlice.reducer
export const {changeColors} = changeColorSlice.actions
