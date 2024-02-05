import { useContext } from "react";
import { CartContext } from "../Hooks/CartContext";

const ItemsCart = () => {
  
  const {cartItem, quantity } = useContext(CartContext)

  return (
    <section>
      {cartItem.map((item) => (
        <div className="md:flex items-center justify-around mb-10 bg-white p-5 rounded-md" key={item.id} >
          <div className="sm:w-full md:w-[250px]">
            <img
              className="w-full h-full object-cover"
              src={item.img}
              alt="product"
            />
          </div>
          <div className="middle w-full sm:mt-5 md:mt-0">
            <h1 className="text-2xl text-center font-bold">{item.name}</h1>
            <p className="text-center font-semibold">{item.description}</p>
            <div className="product-quantity mt-5 mx-auto w-[70%]">
              <div>  
                <button  className="cursor-pointer"><i className="fa-regular fa-trash-can"></i> Remove Item</button>
              </div>
              <p className="product-price text-xl font-semibold mt-5">
                ₱2000.00
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ItemsCart;
