import useStore from "../zustand/store";
import { FaRegTrashAlt } from "react-icons/fa";

const ItemsCart = () => {
  const { cartItems } = useStore();

  return (
    <section className="border">
      {cartItems.map((item, i) => (
        <div
          className="md:flex items-center justify-around mb-10 bg-white p-5 rounded-md"
          key={i}
        >
          <div className="w-full md:w-[250px] flex justify-center mb-5 md:mb-0">
            <img
              className="w-[200px] h-full object-cover"
              src={item.image}
              alt="product"
            />
          </div>
          <div className="middle w-full sm:mt-5 md:mt-0">
            <h1 className="text-2xl text-center font-bold">{item.name}</h1>
            <p className="text-center font-semibold">{item.description}</p>
            <div className="mt-5 mx-auto w-[70%]">
              <div className="flex gap-2 cursor-pointer">
                <button>
                 <FaRegTrashAlt />
                </button>
                <p>Remove Item</p>
              </div>
              <p className="product-price text-xl font-semibold mt-5">
                ₱ {item.price}.00
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ItemsCart;
