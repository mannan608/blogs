import { getRelatedBlogs } from "./RelatedBlogsApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  relatedblogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchRelatedBlogs = createAsyncThunk(
  "relatedblogs/fetchRelatedBlogs",
  async ({ tags, id }) => {
    const relatedblogs = await getRelatedBlogs(tags, id);
    return relatedblogs;
  }
);

const relatedblogsSlice = createSlice({
  name: "relatedblogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedblogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedblogs = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedblogsSlice.reducer;
