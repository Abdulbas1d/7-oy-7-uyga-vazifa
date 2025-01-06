import { configureStore } from "@reduxjs/toolkit";
import changeColorReducer from './changeColorSlice'
import modeReducer from './modeSlice'
import  textReducer  from "./textSlice";
import chooseColorReducer from "./chooseColorSlice";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        "changeColor": changeColorReducer,
        "mode": modeReducer,
        "text": textReducer,
        "color": chooseColorReducer,
        "user" : userReducer
    }
})