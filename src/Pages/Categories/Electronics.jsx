import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Hooks/CartContext";
import AllProducts from "../../api/Products";

const Electronics = () => {
  const filterItems = AllProducts.filter(
    (items) => items.category === "electronics"
  );

  const { addToCart } = useContext(CartContext);

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
              <div className="h-[300px]">
                <img
                  className="w-full h-full object-cover rounded-t-md"
                  src={items.img}
                  alt=""
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

export default Electronics;
