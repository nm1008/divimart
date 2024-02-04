/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartItem, setCartItem] = useState([]);
  // const calculatePrice = (quantity, item) => {
  //   return quantity * item;
  // };

  // const [deleteItem, setDeleteItem] = useState(cartItem);

  //   const { addToCart, notify } = useContext(CartContext) *tbc

  return (
    <CartContext.Provider
      value={{ quantity, setQuantity, cartItem, setCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
