import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    topHeadlines: [],
    allNews: [],
    sources: [],
    newsBySource: [],
    category: null,
  },
  reducers: {
    addTopHeadlines: (state, action) => {
      state.topHeadlines = action.payload;
    },
    addAllNews: (state, action) => {
      state.allNews = action.payload;
    },
    addSources: (state, action) => {
      state.sources = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    getNewsBySource: (state, action) => {
      state.newsBySource = action.payload;
    },
  },
});

export const {
  addTopHeadlines,
  addAllNews,
  addSources,
  getNewsBySource,
  setCategory,
} = newsSlice.actions;

export default newsSlice.reducer;
