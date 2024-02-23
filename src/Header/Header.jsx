import { NavLink } from "react-router-dom";

import { FaHouseUser } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

import useStore from "../zustand/store";

const Header = () => {
  const { cartItems } = useStore();
  return (
    <section>
      <nav className="flex items-center justify-center md:justify-between gap-5 rounded-b-xl bg-white shadow-md py-5 px-5 md:px-10  top-0 mx-auto md:w-[100%] w-[100%] ">
        <h1 className=" text-2xl text-center  font-semibold md:block hidden">
          DiviMart<span className="absolute mr-5">🛒</span>
        </h1>

        <div className="flex items-center justify-center w-full md:w-[300px] gap-4 ">
          <NavLink
            to="/"
            className={`text-md font-semibold   rounded-md text-black px-3 py-1 flex items-center gap-2 hover:text-white hover:bg-black hover:transition hover:duration-300`}
          >
            <FaHouseUser className=" md:text-2xl" /> Home
          </NavLink>
          <NavLink
            to="/products/AllProducts"
            className={`text-md font-semibold  rounded-md text-black e px-3 py-1 flex items-center gap-2 hover:text-white hover:bg-black hover:transition hover:duration-300`}
          >
            <FaProductHunt className="md:text-2xl" /> Products
          </NavLink>
          <NavLink
            to="/cart"
            className={`text-md font-semibold  rounded-md text-black  px-3 py-1 flex items-center gap-2 hover:text-white hover:bg-black hover:transition hover:duration-300`}
          >
            <div className="relative  ">
              <BsCart3 className="text-xl md:text-2xl" />
              <div className="absolute top-[-18px] right-[-15px] flex items-center justify-center ">
                {cartItems.length > 0 && (
                  <p className="bg-red-600 w-6 h-6 rounded-full text-center font-semibold text-white">
                    {cartItems.length}
                  </p>
                )}
              </div>
            </div>
          </NavLink>
        </div>
      </nav>
    </section>
  );
};

export default Header;
