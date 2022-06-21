import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import productReducer from "./product/productSlice";
import categoryReducer from "./category/categorySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    category: categoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
