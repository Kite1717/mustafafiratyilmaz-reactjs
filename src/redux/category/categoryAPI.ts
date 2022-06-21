import httpClient from "../../core/httpClient";
import { CategoryModel } from "../../models/CategoryModel";

export const fethCategories = async (): Promise<Array<CategoryModel>> => {
  try {
    const resposeData = await httpClient.fetch<any, Array<CategoryModel>>({
      path: "/categories/",
      method: "GET",
    });

    return resposeData;
  } catch (err: any) {
    console.log("fetchProducts Error : ", err?.message || JSON.stringify(err));
    return [];
  }
};
