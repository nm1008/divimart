
import { Link } from "react-router-dom";
import useStore from "../../zustand/store";
import AllProducts from "../../api/Products";

const Jewelry = () => {
  const { addToCart } = useStore();

  const filterItems = AllProducts.filter(
    (items) => items.category === "jewelry"
  );

  return (
    <section className=" mt-5 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      {filterItems.map((items) => {
        return (
          <div
            className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] pb-2 rounded-xl"
            key={items.id}
          >
            <Link
              onClick={() => window.top(0, 0)}
              to={`/categories/product/${items.id}`}
            >
              <div className="h-[200px] flex justify-center">
                <img
                  className="h-full rounded-t-md p-4 "
                  src={items.image}
                  alt={items.name}
                />
              </div>
            </Link>

            <div className="p-2 flex flex-col">
              <h1 className="font-semibold">{items.name}</h1>
              <p>{items.description}</p>
              <span className="font-bold">₱{items.price}.00</span>
              <button
                onClick={() => {
                  addToCart(items);
                }}
                className="bg-slate-900 text-white mt-2 py-1"
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Jewelry;
