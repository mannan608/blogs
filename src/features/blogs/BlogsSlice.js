import { getBlogs } from "./BlogsApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogs = await getBlogs();
  return blogs;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    sort: (state, action) => {
      if (action.payload === "newest") {
        const sortedDAta = [...state.blogs].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        state.blogs = sortedDAta;
      } else if (action.payload === "most_liked") {
        const sortedDAta = [...state.blogs].sort((a, b) => b.likes - a.likes);
        state.blogs = sortedDAta;
      }
    },
    filter: (state, action) => {
      if (action.payload === "saved") {
        const sortedDAta = state.blogs.filter((blog) => blog.isSaved);
        state.blogs = sortedDAta;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default blogsSlice.reducer;
export const { sort, filter } = blogsSlice.actions;
