import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel, ProductState } from "../../models/ProductModel";
import { RootState } from "../store";
import { fetchProducts, fetchSingleProduct } from "./productAPI";

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  status: "idle",
};

export const fetchProductsAsync = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response: Array<ProductModel> = await fetchProducts();
    return response;
  }
);

export const fetchSingleProductAsync = createAsyncThunk(
  "product/fetchSingleProduct",
  async (id: string) => {
    const response: ProductModel | null = await fetchSingleProduct(id);
    return response;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProducts: (
      state,
      action: PayloadAction<{ search: string; category: string }>
    ) => {
      state.status = "loading";
      if (!action.payload.search && action.payload.category === "all") {
        state.filteredProducts = state.products;
      }

      state.filteredProducts = state.products.filter(
        (product: ProductModel) =>
          !(
            (action.payload.category !== "all" &&
              product.category !== action.payload.category) ||
            (action.payload.search &&
              product.name
                .toLowerCase()
                .indexOf(action.payload?.search?.toLowerCase()) <= -1)
          )
      );
      state.status = "idle";
    },

    resetProductState: (state) => {
      state.products = [];
      state.filteredProducts = [];
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = state.filteredProducts = action.payload;
      })
      .addCase(fetchSingleProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload) state.products = [action.payload];
      });
  },
});

export const selectProductState = (state: RootState): ProductState =>
  state.product;

export const { filterProducts, resetProductState } = productSlice.actions;

export default productSlice.reducer;
