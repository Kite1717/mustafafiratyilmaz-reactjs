import React, { useEffect } from "react";
import ProductList from "../../components/ProductList";
import SelectInput from "../../components/SelectInput";
import TextInput from "../../components/TextInput";
import {
  fecthCategoriesAsync,
  selectCategories,
} from "../../redux/category/categorySlice";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchProductsAsync,
  selectProducts,
} from "../../redux/product/productSlice";

const HomePage = (): JSX.Element => {
  const products = useAppSelector(selectProducts);
  const categories = useAppSelector(selectCategories);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProductsAsync());
    }
  }, [products]);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fecthCategoriesAsync());
    }
  }, [categories]);

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap mt-8">
        <TextInput
          placeholder="Apple Watch, Samsung S21, Macbook Pro,..."
          inputClassNames={[]}
          containerClassNames={["w-2/5"]}
          id="search"
          name="search"
        />

        <SelectInput
          options={categories}
          placeholder="Categories"
          inputClassNames={[]}
          containerClassNames={[]}
          id="category"
          name="category"
        />
      </div>

      <ProductList products={products || []} />
    </div>
  );
};

export default HomePage;
