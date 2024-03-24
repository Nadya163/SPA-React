import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cats: [],
    likeCat: [] as number[],
    showLiked: false,
};

export const catsSlice = createSlice({
    name: "cats",
    initialState,
    reducers: {
        setCats: (state, action) => {
            state.cats = action.payload;
        },
        setLikeCat: (state, action) => {
            state.likeCat = action.payload;
        },
        toggleLike: (state, action) => {
            const catId = action.payload;
            if (state.likeCat[catId]) {
                state.likeCat = state.cats.filter((id) => id !== catId);
            } else {
                state.likeCat.push(catId);
            }
        },
        toggleShowLiked: (state) => {
            state.showLiked = !state.showLiked;
        },

        removeCat: (state, action) => {
            state.cats = state.cats.filter(
                (cat: { id: number }) => cat.id !== action.payload,
            );
        },
    },
});

export const { setCats, setLikeCat, toggleLike, toggleShowLiked, removeCat } =
    catsSlice.actions;

export const catsSelector = (state: { cats: { cats: any } }) => state.cats.cats;
export const likeCatSelector = (state: { cats: { cats: any, likeCat: any } }) =>
    state.cats.likeCat;
export const showLikedSelector = (state: { cats: { showLiked: any } }) =>
    state.cats.showLiked;

export const catsReducer = catsSlice.reducer;
