import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="my-10 mx-auto md:w-[80%] w-[90%] relative">
      <h1 className=" text-3xl text-center italic mb-10 font-semibold sm:block md:hidden">
        Divimart<span className="absolute"> 🛒</span>{" "}
      </h1>
      <div className="h-[100vh] grid md:grid-cols-2 xl:grid-cols-3 gap-2 ">
        <Link
          to="/products/furniture"
          className="relative overflow-hidden col-span-2  "
        >
          <img
            className="w-full h-full object-cover  "
            src="../src/images/furniture.jpg"
          />
          <h1 className="absolute top-0 left-0 bg-slate-900 text-white p-3 font-semibold">
            Furnitures
          </h1>
        </Link>
        <Link
          to="/products/skincare"
          className="relative overflow-hidden row-span-2"
        >
          <img
            className="w-full h-full object-cover  "
            src="../src/images/skincare.jpg"
          />
          <h1 className="absolute top-0 left-0 bg-slate-900 text-white p-3 font-semibold">
            Skincare
          </h1>
        </Link>
        <Link to="/products/kitchen" className="relative overflow-hidden ">
          <img
            className="w-full h-full object-cover "
            src="../src/images/kitchen.jpg"
          />
          <h1 className="absolute top-0 left-0 bg-slate-900 text-white p-3 font-semibold">
            Kitchen
          </h1>
        </Link>
        <Link to="/products/gadgets" className="relative overflow-hidden ">
          <img
            className="w-full h-full object-cover "
            src="../src/images/gadgets.jpg"
          />
          <h1 className="absolute top-0 left-0 bg-slate-900 text-white p-3 font-semibold">
            Gadgets
          </h1>
        </Link>
      </div>
    </section>
  );
};

export default Home;
