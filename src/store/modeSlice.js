import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name: "theme",
    initialState: { value: "light" },
    reducers: {
        toggleTheme: (state) => {
            state.value = state.value === "light" ? "dark" : "light";
        },
    },
});

export const { toggleTheme } = modeSlice.actions;
export default modeSlice.reducer;