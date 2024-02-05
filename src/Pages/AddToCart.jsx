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
    <section className="mt-40 m-auto w-[90%] md:w-[80%]  p-10">
      <main>
        <h1 className="text-3xl font-semibold tracking-wide">
          Your Cart ({cartItems.length}) 🛒{" "}
          {/*Show the Number of Items in the Cart */}
        </h1>
        <div className="cart-body mt-20">
          {cartItems.length < 1 ? ( // Add Condition if the Cart is Empty (below 1 items) show the Cart is Empty else import the component (<ItemCarts/>)
            <div className="flex flex-col items-center justify-center ">
              <h1 className="text-center font-bold tracking-wide text-3xl">
                Your Cart is Empty <span className="absolute">😪</span>
              </h1>
              <div className="sm:w-[300px] md:w-[350px] mt-20">
                <img
                  className="w-full h-full object-cover"
                  src="../src/images/empty-cart.svg"
                  alt=""
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
