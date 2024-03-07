import { configureStore } from "@reduxjs/toolkit";
import postReducer2 from "../features/post/postSlice";

const store = configureStore({
    reducer:{
    post:postReducer2
    }
})
export default store;