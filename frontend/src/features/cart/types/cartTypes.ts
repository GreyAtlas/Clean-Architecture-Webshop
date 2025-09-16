import type { Product } from "@/features/products/types/productTypes";

export interface CartItem extends Product {
  amount: number;
}
