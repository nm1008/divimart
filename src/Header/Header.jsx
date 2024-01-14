import { NavLink } from "react-router-dom";

import { FaHouseUser } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
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
          to="/products"
            className={`text-md font-semibold  rounded-md text-black e px-3 py-1 flex items-center gap-2 hover:text-white hover:bg-black hover:transition hover:duration-300`}
          >
            <FaProductHunt className="md:text-2xl" /> Products
          </NavLink>
          <NavLink
          to="/cart"
            className={`text-md font-semibold  rounded-md text-black  px-3 py-1 flex items-center gap-2 hover:text-white hover:bg-black hover:transition hover:duration-300`}
          >
            <BsCart3 className="text-xl md:text-2xl" />
          </NavLink>
        </div>
      </nav>
    </section>
  );
};

export default Header;
