import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoryModel, CategoryState } from "../../models/CategoryModel";
import { RootState } from "../store";
import { fethCategories } from "./categoryAPI";

const initialState: CategoryState = {
  categories: [],
  status: "idle",
};

export const fecthCategoriesAsync = createAsyncThunk(
  "category/fethCategories",
  async () => {
    const response: Array<CategoryModel> = await fethCategories();
    return response;
  }
);

export const productSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fecthCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fecthCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      });
  },
});

export const selectCategories = (state: RootState): Array<CategoryModel> =>
  state.category.categories;

export default productSlice.reducer;
