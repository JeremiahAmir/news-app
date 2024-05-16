import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "news",
    initialState: {
        topHeadlines: [],
    },
    reducers: {
        addTopHeadlines: (state, action) => {
            state.topHeadlines = action.payload;
        },
    },
});

export const { addTopHeadlines } = newsSlice.actions;

export default newsSlice.reducer;
