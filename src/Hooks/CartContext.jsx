/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { ProductsContext } from "./productContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  const calculatePrice = (quantity, item) => {
    return quantity * item;
  };

  const [deleteItem, setDeleteItem] = useState(cartItem);

  //   const { addToCart, notify } = useContext(CartContext) *tbc

  return (
    <CartContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
