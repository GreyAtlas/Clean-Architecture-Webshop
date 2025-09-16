import { create } from "zustand"
import { persist } from "zustand/middleware";
import type { CartItem } from "../types/cartTypes";
import type { Product } from "@/features/products/types/productTypes";

interface CartState {
  cartItems: CartItem[]
}

type CartActions = {
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
  reduceAmountOfProduct: (product: Product) => void;
  increaseAmountOfProduct: (product: Product) => void;
  clearCart: () => void;
}


export const useCartStore = create<CartState & CartActions>()(
  persist(
    (set) => ({
      cartItems: [] as CartItem[],

      addProductToCart: (product: Product) =>
        set((state) => {
          const existingIndex = state.cartItems.findIndex((item) => item.id === product.id);

          if (existingIndex !== -1) {
            const updatedCart = [...state.cartItems];
            updatedCart[existingIndex] = {
              ...updatedCart[existingIndex],
              amount: updatedCart[existingIndex].amount + 1,
            };
            return { cartItems: updatedCart };
          }
          return { cartItems: [...state.cartItems, { ...product, amount: 1 }] }
        }),

      removeProductFromCart: (product: Product) => set((state) => {
        const existingIndex = state.cartItems.findIndex((item) => item.id === product.id)
        if (existingIndex !== -1) {
          const updatedCart = [...state.cartItems.filter((item) => item.id !== product.id)];
          return { cartItems: updatedCart };
        }
        return { cartItems: [...state.cartItems] }
      }),
      reduceAmountOfProduct: (product: Product) => set((state) => {
        const existingIndex = state.cartItems.findIndex((item) => item.id === product.id)
        if (existingIndex !== -1) {
          const existingAmount = state.cartItems.at(existingIndex)?.amount
          if (existingAmount && existingAmount >= 1) {
            const updatedCart = [...state.cartItems];
            updatedCart[existingIndex] = {
              ...updatedCart[existingIndex],
              amount: updatedCart[existingIndex].amount - 1,
            };
            return { cartItems: updatedCart };
          }
        }
        return { cartItems: [...state.cartItems] }
      }),
      increaseAmountOfProduct: (product: Product) => set((state) => {
        const existingIndex = state.cartItems.findIndex((item) => item.id === product.id)
        if (existingIndex !== -1) {
          const updatedCart = [...state.cartItems];
          updatedCart[existingIndex] = {
            ...updatedCart[existingIndex],
            amount: updatedCart[existingIndex].amount + 1,
          };
          return { cartItems: updatedCart };

        }
        return { cartItems: [...state.cartItems] }
      }),
      clearCart: () => set({
        cartItems: [] as CartItem[]
      }),
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({ cartItems: [...state.cartItems] })
    }
  )
)