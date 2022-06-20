import httpClient from "../../core/httpClient";
import { ProductModel } from "../../models/ProductModel";

export const fetchProducts = async (): Promise<Array<ProductModel>> => {
  try {
    const resposeData = await httpClient.fetch<any, Array<ProductModel>>({
      path: "/products/",
      method: "GET",
    });

    return resposeData?.data;
  } catch (err: any) {
    console.log("fetchProducts Error : ", err?.message || JSON.stringify(err));
    return [];
  }
};

export const fetchProduct = async (
  id: string
): Promise<ProductModel | null> => {
  try {
    const resposeData = await httpClient.fetch<any, ProductModel>({
      path: `/products/${id}`,
      method: "GET",
    });

    return resposeData?.data;
  } catch (err: any) {
    console.log("fetchProduct Error : ", err?.message || JSON.stringify(err));
    return null;
  }
};

export const createProduct = async (
  product: ProductModel
): Promise<ProductModel | null> => {
  return null;
};

/*
a. GET: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/
b. GET: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/{id}
c. POST: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products */
