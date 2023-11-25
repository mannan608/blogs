import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/BlogsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});
