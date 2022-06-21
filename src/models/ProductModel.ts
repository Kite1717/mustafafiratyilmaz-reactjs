export interface ProductModel {
  createdAt: number;
  name: string;
  avatar: string;
  developerEmail: string;
  price: number | string;
  id: string;
  description: string;
  category: string;
}

export interface ProductState {
  products: Array<ProductModel>;
  filteredProducts: Array<ProductModel>;
  status: "idle" | "loading" | "failed";
  createStatus : boolean;
}

export interface NewProductModel {
  name: string;
  avatar: string;
  developerEmail: string;
  price: number | string;
  description: string;
  category: string;
}
