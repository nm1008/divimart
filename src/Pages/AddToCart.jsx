import { Link } from "react-router-dom";
import ItemsCart from "../components/ItemsCart";
import useStore from "../zustand/store";
import { useEffect } from "react";

const AddToCart = () => {
  const { cartItems, total, getTotal } = useStore();

  useEffect(() => {
    getTotal();
  }, [getTotal]);

  return (
    <section className="mt-6 md:mt-10 m-auto w-[90%] md:w-[80%] text-center md:text-start">
      <main>
        <h1 className="text-3xl font-semibold tracking-wide">
          Your Cart ({cartItems.length}) 🛒{" "}
        </h1>
        <div className="cart-body mt-20">
          {cartItems.length < 1 ? (
            <div className="flex flex-col items-center justify-center ">
              <h1 className="text-center font-bold tracking-wide text-2xl">
                Your Cart is Empty <span className="absolute">😪</span>
              </h1>
              <div className="sm:w-[300px] md:w-[350px] mt-20">
                <img
                  className="w-full h-full object-cover"
                  src="../src/images/empty-cart.svg"
                  alt="empty cart image"
                />
              </div>
              <Link
                to={`/categories/allproducts/`}
                className="bg-slate-900 text-white text-2xl px-2 py-1 rounded mt-10"
              >
                Keep Shopping
              </Link>
            </div>
          ) : (
            <ItemsCart />
          )}
          <div className="text-end mt-10 ">
            <h1 className="font-bold text-2xl">Subtotal:</h1>
            <p className="font-semibold text-xl">₱ {total + ".00"}</p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AddToCart;
