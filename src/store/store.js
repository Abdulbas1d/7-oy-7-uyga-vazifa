import { configureStore } from "@reduxjs/toolkit";
import changeColorReducer from './changeColorSlice'
import modeReducer from './modeSlice'

export const store = configureStore({
    reducer: {
        "changeColor": changeColorReducer,
        "mode": modeReducer
    }
})