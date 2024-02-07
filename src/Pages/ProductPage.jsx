import CarouselPromotion from "../components/CarouselPromotion";
import useStore from "../zustand/store";
import { useParams } from "react-router-dom";
import Products from "../api/Products";
import { useState } from "react";
import DeliveryDetails from "../components/DeliveryDetails";

import { AiTwotoneMinusCircle } from "react-icons/ai";
import { AiTwotonePlusCircle } from "react-icons/ai";

const ProductPage = () => {
  const { id } = useParams();

  const item = Products.filter((item) => item.id === parseInt(id));

  const [image, setImage] = useState(item[0].image);

  const { addToCart, quantity, setQuantity } = useStore();

  return (
    <>
      <div className="flex items-center sm:text-[11px] md:text-sm mt-28 gap-5 mx-auto md:w-[80%] sm:w-[90%] font-bold tracking-wide relative border-b border-slate-900 pb-1">
        <h1 className="ml-2">Offers & Promotions</h1>
        <h1>Everyday essentials under ₱200</h1>
        <h1 className="mr-2">Last Chance</h1>
      </div>
      <section className="my-20 mx-auto md:w-[80%] sm:w-[90%] relative">
        <main className="xl:flex  gap-5 ">
          <div className=" w-full xl:flex xl:flex-row-reverse gap-2 items-center justify-center overflow-hidden ">
            <div className=" h-full flex items-center justify-center">
              <img className="w-[250px] object-cover " src={image} alt="" />
            </div>
          </div>

          <div className="right-item w-full bg-white py-10 sm:mt-10 xl:mt-0 ">
            <h1 className="text-center font-bold tracking-wide text-2xl">
              {item[0].name}
            </h1>
            <div className="m-auto sm:w-[90%] md:w-[80%]  ">
              {/* Details of ITEMS */}
              <p className="text-center">{item[0].description}</p>
              <div className="mt-10 flex items-center justify-around ">
                {" "}
                {/* SET QUANTITY OF ITEMS  */}
                <h1 className="text-md font-semibold ">Items</h1>
                <div className="flex gap-2">
                  <button
                    disabled={quantity <= 1}
                    className="bg-zinc-100 px-2 py-1 text-md flex justify-center items-center active:opacity-75"
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    <AiTwotoneMinusCircle />
                  </button>
                  <p className="text-md px-5 py-1 text-center border">
                    {quantity}
                  </p>
                  <button
                    className=" px-2 py-1 text-md flex justify-center items-center active:opacity-90"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <AiTwotonePlusCircle />
                  </button>
                </div>
                <p className="product-price text-md font-semibold">
                  ₱{item[0].price * quantity}.00
                </p>
              </div>
              {/* BUTTONS FOR CART */}
              <div className="flex justify-center gap-2 items-center mt-10">
                <button
                  onClick={() => {
                    addToCart(item[0]);
                  }}
                  className="bg-slate-900 text-white px-5 py-1 rounded active:bg-black hover:bg-slate-800 sm:text-md md:text-xl"
                >
                  Add to Cart
                </button>
                <a href="/cart">
                  <button className="px-5 py-1 bg-zinc-100 sm:text-md md:text-xl">
                    Check Out
                  </button>
                </a>
              </div>
              <DeliveryDetails />
            </div>
          </div>
        </main>

        <main className="mt-10">
          <CarouselPromotion />
        </main>
      </section>
    </>
  );
};

export default ProductPage;
