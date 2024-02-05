import { create } from "zustand";

const useStore = create((set) => ({
  cartItems: [],
  quantity: 1,
  itemName: "All Products",
  setCartItems: (newItem) =>
    set((state) => ({ cartItems: [...state.cartItems, newItem] })),
  setQuantity: (newQuantity) => set({ quantity: newQuantity }),
  setItemName: (newItemName) => set({ itemName: newItemName }),
}));

export default useStore;
