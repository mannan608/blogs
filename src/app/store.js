import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/BlogsSlice";
import blogReducer from "../features/blog/BlogSlice";
import relatedblogsReducer from "../features/relatedblogs/RelatedBlogsSlice";
import updatelikeReducer from "../features/updatelike/UpdateLikeSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedblogs: relatedblogsReducer,
    update: updatelikeReducer,
  },
});
