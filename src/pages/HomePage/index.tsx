import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProductList";
import SelectInput from "../../components/SelectInput";
import Spinner from "../../components/Spinner";
import TextInput from "../../components/TextInput";
import { CategoryModel } from "../../models/CategoryModel";
import {
  fecthCategoriesAsync,
  selectCategories,
} from "../../redux/category/categorySlice";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchProductsAsync,
  filterProducts,
  selectProductState,
} from "../../redux/product/productSlice";

const HomePage = (): JSX.Element => {
  const { filteredProducts, status } = useAppSelector(selectProductState);
  const categories = useAppSelector(selectCategories);
  const [searchWord, setSearchWord] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fecthCategoriesAsync());
    }
  }, [categories, dispatch]);

  useEffect(() => {
    const category: CategoryModel | undefined = categories.find(
      (category: CategoryModel) => category.id === selectedCategoryId
    );

    dispatch(
      filterProducts({
        search: searchWord,
        category: category?.name || "all",
      })
    );
  }, [searchWord, selectedCategoryId, categories, dispatch]);

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap mt-8">
        <TextInput
          placeholder="Apple Watch, Samsung S21, Macbook Pro,..."
          inputClassNames={[]}
          containerClassNames={["w-2/5"]}
          id="search"
          name="search"
          onChange={(
            e?:
              | React.ChangeEvent<HTMLInputElement>
              | React.ChangeEvent<HTMLTextAreaElement>
          ) => setSearchWord(e?.target.value || "")}
        />

        <SelectInput
          options={categories}
          placeholder="Categories"
          inputClassNames={[]}
          containerClassNames={[]}
          id="category"
          name="category"
          onChange={(e?: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedCategoryId(e?.target.value || "all")
          }
          currentValue={selectedCategoryId}
        />
      </div>

      {status === "loading" ? (
        <Spinner />
      ) : (
        <ProductList products={filteredProducts || []} />
      )}
    </div>
  );
};

export default HomePage;
