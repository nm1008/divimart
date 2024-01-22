import Products from "../api/Products";
import { Link } from "react-router-dom";

const TopItems = () => {
  const filterItems = Products.filter((items) => {
    return items;
  });

  return (
    <div className="mt-20">
      <h1 className="font-bold text-2xl text-slate-900 tracking-wide">
        Top Items this season
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        {filterItems.map((items) => {
          return (
            <div
              className="bg-white space-y-4 pb-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-t-md hover:scale-105 transition ease-in-out duration-300 "
              key={items.id}
            >
              <Link
                className="flex justify-center "
                to={`/categories/product/${items.id}`}
              >
                <div className="h-[200px]">
                  <img
                    className="h-full rounded-t-md p-4 "
                    src={items.image}
                    alt={items.name}
                  />
                </div>
              </Link>

              <div className="p-2 flex flex-col">
                <h1 className="font-semibold mb-2">{items.name}</h1>
                <p className="mb-2">{items.description}</p>
                <span className="font-semibold tracking-wide">
                  ₱ {items.price}.00
                </span>
                <button className="bg-slate-900 text-white mt-2 py-1">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopItems;
