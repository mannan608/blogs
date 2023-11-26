import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/BlogsSlice";
import blogReducer from "../features/blog/BlogSlice";
import relatedblogsReducer from "../features/relatedblogs/RelatedBlogsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedblogs: relatedblogsReducer,
  },
});
