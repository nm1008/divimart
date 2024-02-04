/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../api/Products";

export const ProductsContext = createContext();

export const ProductsProdvider = ({ children }) => {
  const { id } = useParams();
  const items = Products.filter((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(items[0].image);

  return (
    <ProductsContext.Provider
      value={{ quantity, setQuantity, image, setImage }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
