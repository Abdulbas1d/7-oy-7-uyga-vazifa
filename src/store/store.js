import { configureStore } from "@reduxjs/toolkit";
import changeColorReducer from './changeColorSlice'

export const store = configureStore({
    reducer: {
        "changeColor": changeColorReducer
    }
})