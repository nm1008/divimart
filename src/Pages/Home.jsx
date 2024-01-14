import { Link } from "react-router-dom";
import TopItems from "../components/TopItems";
import CallToAction from "../components/CallToAction";
import CarouselPromotion from "../components/CarouselPromotion";

const Home = () => {
  return (
    <section className="my-10 mx-auto md:w-[80%] w-[90%] relative">
      <h1 className=" text-3xl text-center italic mb-10 font-semibold sm:block md:hidden">
        Divimart<span className="absolute"> 🛒</span>{" "}
      </h1>
      <div className="h-[100vh] grid md:grid-cols-2 xl:grid-cols-3 gap-2 ">
        <Link
          to="/products/backpacks"
          className="relative overflow-hidden col-span-2  "
        >
          <img
            className="w-full h-full object-cover  "
            src="../src/images/backpack.jpg"
          />
          <h1 className="absolute top-0 left-0 bg-slate-900 text-white p-3 font-semibold">
            Backpacks
          </h1>
        </Link>
        <Link
          to="/products/jewelry"
          className="relative overflow-hidden row-span-2"
        >
          <img
            className="w-full h-full   "
            src="../src/images/jewelry.jpg"
          />
          <h1 className="absolute top-0 left-0 bg-slate-900 text-white p-3 font-semibold">
            Jewelry
          </h1>
        </Link>
        <Link to="/products/clothing" className="relative overflow-hidden ">
          <img
            className="w-full h-full object-cover "
            src="../src/images/clothing.jpg"
          />
          <h1 className="absolute top-0 left-0 bg-slate-900 text-white p-3 font-semibold">
            Clothing
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
      <TopItems />
      <CallToAction />
      <CarouselPromotion />
    </section>
  );
};

export default Home;
