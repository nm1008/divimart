import { NavLink } from "react-router-dom";

import { FaHouseUser } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <section>
      <nav className="flex items-center justify-center md:justify-between gap-5 rounded-b-xl bg-white shadow-md py-5 px-5 md:px-10  top-0 mx-auto md:w-[100%] w-[100%] ">
        <h1 className=" text-xl text-center italic font-semibold md:block hidden">
          DiviMart<span className="absolute mr-5">🛒</span>
        </h1>

        <div className="flex items-center justify-center w-full md:w-[300px] gap-4 ">
          <NavLink
            className={`text-md font-semibold bg-slate-900 rounded-md text-white px-3 py-1 flex items-center gap-2`}
          >
            <FaHouseUser /> Home
          </NavLink>
          <NavLink
            className={`text-md font-semibold bg-slate-900 rounded-md text-white px-3 py-1 flex items-center gap-2`}
          >
            <FaProductHunt /> Products
          </NavLink>
          <NavLink
            className={`text-md font-semibold bg-slate-900 rounded-md text-white px-3 py-1 flex items-center gap-2`}
          >
            <BsCart3 className="text-2xl" />
          </NavLink>
        </div>
      </nav>
    </section>
  );
};

export default Header;
