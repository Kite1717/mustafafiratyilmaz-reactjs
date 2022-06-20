import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { ProductModel, ProductState } from "../../models/ProductModel";
import { fetchProducts } from "./productAPI";

const initialState: ProductState = {
  products: [],
  status: "idle",
};

export const fetchProductsAsync = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response: Array<ProductModel> = await fetchProducts();
    return response;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchAll: (state, action: PayloadAction<Array<ProductModel>>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const selectProducts = (state: RootState): Array<ProductModel> =>
  state.product.products;

export const { fetchAll } = productSlice.actions;

export default productSlice.reducer;