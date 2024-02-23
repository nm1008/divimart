import Products from "../../api/Products";
import { Link } from "react-router-dom";
import useStore from "../../zustand/store";

const AllProducts = () => {
  const { addToCart, notify } = useStore();

  return (
    <div className=" mt-5 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {Products.map((items) => {
        return (
          <div
            className="bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] pb-2 rounded-xl"
            key={items.id}
          >
            <Link onClick={() => window.top(0, 0)} to={`/product/${items.id}`}>
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
                  notify();
                }}
                className="bg-slate-900 text-white py-1 mt-2 "
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
