import { configureStore } from "@reduxjs/toolkit";
import { catsReducer } from "./CatsSlice";

export const store = configureStore({
    reducer: {
        cats: catsReducer,
    },
});

export default store;
