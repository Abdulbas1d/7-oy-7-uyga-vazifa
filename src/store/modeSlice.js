import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name: "mode",
    initialState: {value: "light"},
    reducers: {

    }
})

export const {} = modeSlice.actions;
export default modeSlice.reducer;