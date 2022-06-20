import React from "react";
import { ProductModel } from "../../models/ProductModel";
import Product from "../Product";

const ProductList = (prop: { products: Array<ProductModel> }): JSX.Element => {
  const { products } = prop;
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product: ProductModel) => (
          <Product key={`${product.createdAt}-${product.id}`} product={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
