import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";
import Spinner from "../../components/Spinner";
import { ProductModel } from "../../models/ProductModel";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchSingleProductAsync,
  resetProductState,
  selectProductState,
} from "../../redux/product/productSlice";

const ProductDetailPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector(selectProductState);
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductModel | undefined>(undefined);

  useEffect(() => {
    if (products.length) {
      //caching
      const currentProduct: ProductModel | undefined = products.find(
        (product: ProductModel) => product.id === productId
      );
      setProduct(currentProduct);
    } else {
      // async
      dispatch(fetchSingleProductAsync(productId || ""));
    }
  }, [products,dispatch,productId]);

  useEffect(() => {
    return () => {
      dispatch(resetProductState());
    };
  }, [dispatch]);

  return (
    <>
      {status === "loading" ? (
        <Spinner />
      ) : (
        product && <ProductDetail product={product} />
      )}
    </>
  );
};

export default ProductDetailPage;
