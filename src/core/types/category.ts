import { Products } from "../entities/products.ts";

export type CategoryDto = {
    id: number;
    category: string;
    products: Products[];
  }