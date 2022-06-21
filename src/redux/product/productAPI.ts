import httpClient from "../../core/httpClient";
import { NewProductModel, ProductModel } from "../../models/ProductModel";

export const fetchProducts = async (): Promise<Array<ProductModel>> => {
  try {
    const resposeData = await httpClient.fetch<any, Array<ProductModel>>({
      path: "/products/",
      method: "GET",
    });

    return resposeData;
  } catch (err: any) {
    console.log("fetchProducts Error : ", err?.message || JSON.stringify(err));
    return [];
  }
};

export const fetchSingleProduct = async (
  id: string
): Promise<ProductModel | null> => {
  try {
    const resposeData = await httpClient.fetch<any, ProductModel>({
      path: `/products/${id}`,
      method: "GET",
    });

    return resposeData;
  } catch (err: any) {
    console.log("fetchProduct Error : ", err?.message || JSON.stringify(err));
    return null;
  }
};

export const createProduct = async (
  product: NewProductModel
): Promise<ProductModel | null> => {
  try {
    const resposeData = await httpClient.fetch<any, ProductModel>({
      path: `/products`,
      method: "POST",
      body: product,
    });

    return resposeData;
  } catch (err: any) {
    console.log("fetchProduct Error : ", err?.message || JSON.stringify(err));
    return null;
  }
};
