import { Link } from "react-router-dom";
import TopItems from "../components/TopItems";
import CallToAction from "../components/CallToAction";
import CarouselPromotion from "../components/CarouselPromotion";
import useStore from "../zustand/store";


const Home = () => {
  const { setItemName } = useStore();

  return (
    <>
      <section className="my-10 mx-auto md:w-[80%] w-[90%] relative">
        <h1 className=" text-3xl text-center  mb-10 font-semibold sm:block md:hidden">
          Divimart<span className="absolute"> 🛒</span>{" "}
        </h1>
        <div className="h-[100vh] grid md:grid-cols-2 xl:grid-cols-3 gap-2 ">
          <Link
            to="./products/Backpacks"
            className="relative overflow-hidden col-span-2  "
            onClick={() => setItemName("Backpacks")}
          >
            <img
              className="w-full h-full object-cover  "
              src="/images/backpack.jpg"
            />
            <h1 className="absolute top-0 left-0 bg-slate-900 text-white p-3 font-semibold">
              Backpacks
            </h1>
          </Link>
          <Link
            to="./products/Jewelries"
            className="relative overflow-hidden row-span-2"
            onClick={() => setItemName("Jewelries")}
          >
            <img className="w-full h-full   " src="/images/jewelry.jpg" />
            <h1 className="absolute top-0 left-0 bg-slate-900 text-white p-3 font-semibold">
              Jewelry
            </h1>
          </Link>
          <Link
            to="./products/MensClothing
          "
            className="relative overflow-hidden "
            onClick={() => setItemName("Men's Clothing")}
          >
            <img
              className="w-full h-full object-cover "
              src="/images/clothing.jpg"
            />
            <h1 className="absolute top-0 left-0 bg-slate-900 text-white p-3 font-semibold">
              Clothing
            </h1>
          </Link>
          <Link
            to="./products/Electronics"
            className="relative overflow-hidden "
            onClick={() => setItemName("Electronics")}
          >
            <img
              className="w-full h-full object-cover "
              src="/images/gadgets.jpg"
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
    </>
  );
};

export default Home;
