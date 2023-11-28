import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import updateLikeNow from "./UpdateLikeApi";

const initialState = {
  isLoading: false,
  isUpdate: false,
  error: "",
};

export const updatelike = createAsyncThunk(
  "update/updatelike",
  async (data) => {
    const blogs = await updateLikeNow(data);
    return blogs;
  }
);

const updateLikeSlice = createSlice({
  name: "updatelike",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updatelike.pending, (state) => {
        state.isLoading = true;
        state.isUpdate = true;
      })
      .addCase(updatelike.fulfilled, (state) => {
        state.isLoading = false;
        state.isUpdate = true;
      })
      .addCase(updatelike.rejected, (state, action) => {
        state.error = action.error.message;
        state.isUpdate = true;
      });
  },
});

export default updateLikeSlice.reducer;
