import { createSlice } from "@reduxjs/toolkit";

export const chooseColorSlice = createSlice({
    name: "color",
    initialState: {color: "#fff"},
    reducers: {
        setColor: (state, action) => {
            state.color = action.payload
        }
    }
})

export const {setColor} = chooseColorSlice.actions;
export default chooseColorSlice.reducer;