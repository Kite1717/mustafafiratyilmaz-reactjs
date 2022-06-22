import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";
import categoryReducer from "./category/categorySlice";

const reducer = {
  
    product: productReducer,
    category: categoryReducer,
  
}
export const store = configureStore({ reducer });

export function getStoreWithState(preloadedState?: RootState) {
  return configureStore({ reducer, preloadedState });
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
