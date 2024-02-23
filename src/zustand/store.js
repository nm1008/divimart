import { create } from "zustand";
import toast from "react-hot-toast";

const useStore = create((set) => ({
  cartItems: [],
  quantity: 1,
  itemName: "All Products",
  total: 0,
  setQuantity: (newQuantity) => set({ quantity: newQuantity }),
  setItemName: (newItemName) => set({ itemName: newItemName }),
  addToCart: (newItem) =>
    set((state) => ({ cartItems: [...state.cartItems, newItem] })),
  getTotal: () => {
    set((state) => {
      const total = state.cartItems.reduce((acc, item) => acc + item.price, 0);
      return { ...state, total: total };
    });
  },
  removeItem: (itemId) => {
    set((state) => {
      const items = state.cartItems.filter((item) => item.id !== itemId);
      return { ...state, cartItems: items };
    });
  },
  notify: () => toast("Item has been added to the cart"),
}));

export default useStore;
