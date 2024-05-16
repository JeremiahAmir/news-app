import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";

const storeConfig = configureStore({
    reducer: {
        news: newsReducer,
    },
});

export default storeConfig;
