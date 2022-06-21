export interface CategoryModel {
  createdAt: string;
  name: string;
  id: string;
}
export interface CategoryState {
  categories: Array<CategoryModel>;
  status: "idle" | "loading" | "failed";
}
