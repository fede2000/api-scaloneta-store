import { Products } from "../entities/products";

export type CategoryDto = {
    id: number;
    category: string;
    products: Products[];
  }