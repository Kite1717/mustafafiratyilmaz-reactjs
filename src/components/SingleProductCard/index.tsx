import React from "react";
import { Link } from "react-router-dom";
import { ProductModel } from "../../models/ProductModel";
import noImageUrl from '../../assets/no-img.png'

const SingleProductCard = (prop: { product: ProductModel }): JSX.Element => {
  const { product } = prop;
  return (
    <Link to={`/product/${product.id}`}>
      <div className="group relative">
        <div className="shadow-md border w-full min-h-80 bg-white  aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
              event.currentTarget.src = noImageUrl;
            }}
            src={product.avatar}
            alt={`${product.id}-${product.name}`}
            className="w-full h-full object-center object-contain lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">$ {product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleProductCard;
