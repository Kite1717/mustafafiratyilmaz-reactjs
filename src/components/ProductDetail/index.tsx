import React from "react";
import { ProductModel } from "../../models/ProductModel";
import noImageUrl from '../../assets/no-img.png'

const ProductDetail = (prop: { product: ProductModel }): JSX.Element => {
  const { product } = prop;
  return (
    <div className="relative max-w-2xl mx-auto py-16 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1  gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="shadow-md border lg:min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
          <img
            onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
              event.currentTarget.src = noImageUrl;
            }}
            src={product.avatar}
            alt={`${product.id}-${product.name}`}
            className="object-center object-contain lg:w-full lg:h-full"
          />
        </div>

        <div className="flex lg:flex-col md:flex-col justify-between lg:pl-6 md:pl-4">
          <h2 className="xl:text-2xl md:text-xl sm:text-l text-black font-bold">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </h2>

          <p className="xl:text-xl md:text-l sm:text-md font-medium text-gray-900">
            $ {product.price}
          </p>
        </div>
      </div>
      <hr className="mx-2 h-1 mt-6 bg-black opacity-40" />
      <div className="mt-4">
        <h4 className="xl:text-xl md:text-l sm:text-md text-black font-bold mb-2">
          <span aria-hidden="true" className="absolute inset-0" />
          Description
        </h4>
        <p className="font-light opacity-70 text-sm">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
