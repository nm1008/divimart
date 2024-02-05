import { NavLink, Outlet } from "react-router-dom";
import useStore from "../zustand/store";

const Products = () => {
  const { itemName, setItemName } = useStore();

  return (
    <>
      <section className="mt-10 mx-auto md:w-[80%] w-[90%]">
        <h1 className="font-bold text-3xl text-center">{itemName}</h1>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
          <NavLink
            to="AllProducts"
            onClick={() => setItemName("All Products")}
            className={`px-2 w-[100px] h-[55px] flex flex-col items-center justify-center text-center bg-slate-900 text-white rounded-md shadow-md focus:bg-white focus:text-slate-900 hover:bg-white hover:text-slate-900 hover:scale-105 transition`}
          >
            All
          </NavLink>
          <NavLink
            to="Backpack"
            onClick={() => setItemName("Backpack")}
            className={`px-2 w-[100px] h-[55px] flex flex-col items-center justify-center text-center bg-slate-900 text-white rounded-md shadow-md focus:bg-white focus:text-slate-900 hover:bg-white hover:text-slate-900 hover:scale-105 transition`}
          >
            Backpack
          </NavLink>
          <NavLink
            to="Electronics"
            onClick={() => setItemName("Electronics")}
            className={`px-2 w-[100px] h-[55px] flex flex-col items-center justify-center text-center bg-slate-900 text-white rounded-md shadow-md focus:bg-white focus:text-slate-900 hover:bg-white hover:text-slate-900 hover:scale-105 transition`}
          >
            Electronics
          </NavLink>
          <NavLink
            to="Jewelry"
            onClick={() => setItemName("Jewelry")}
            className={`px-2 w-[100px] h-[55px] flex flex-col items-center justify-center text-center bg-slate-900 text-white rounded-md shadow-md focus:bg-white focus:text-slate-900 hover:bg-white hover:text-slate-900 hover:scale-105 transition`}
          >
            Jewelry
          </NavLink>
          <NavLink
            to="MensClothing"
            onClick={() => setItemName("Men's Clothing")}
            className={`px-2 w-[120px] h-[55px] flex flex-col items-center justify-center text-center bg-slate-900 text-white rounded-md shadow-md focus:bg-white focus:text-slate-900 hover:bg-white hover:text-slate-900 hover:scale-105 transition`}
          >
            Men&#39;s Clothing
          </NavLink>
        </div>

        <Outlet />
      </section>
    </>
  );
};

export default Products;
