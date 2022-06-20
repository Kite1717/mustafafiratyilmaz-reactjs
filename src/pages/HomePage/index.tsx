import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProductList";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchProductsAsync,
  selectProducts,
} from "../../redux/product/productSlice";

const HomePage = (): JSX.Element => {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("sdfsdf",products); 
    if(products.length === 0) {
      dispatch(fetchProductsAsync());

    }
  }, [products]);


  return (
    <div>
      <ProductList products={products || []} />
    </div>
  );
};

export default HomePage;
