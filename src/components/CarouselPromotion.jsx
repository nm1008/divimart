import { Link } from "react-router-dom";
import Products from "../api/Products";

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const CarouselPromotion = () => {
  const filterItems = Products.filter((items) => {
    return items;
  });

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 310;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 310;
  };

  return (
    <section className="relative ">
      <h1 className="font-bold text-2xl text-slate-900 tracking-wide text-center md:text-start my-20">
        Products for this Season
      </h1>
      <main
        id="slider"
        className="my-5 flex items-center gap-2 overflow-auto scroll-smooth  cursor-grab  w-full"
      >
        {filterItems.map((items) => {
          return (
            <Link key={items.id}>
              <div className="w-[300px] flex justify-center ">
                <img
                  className="w-[150px] h-[200px] md:w-[150px] md:h-[200px] lg:w-3/4 lg:h-full"
                  src={items.image}
                  alt={items.name}
                />
              </div>
            </Link>
          );
        })}
      </main>
      <div className="flex items-center justify-between w-full gap-1">
        <button
          id="left"
          onClick={slideLeft}
          className="bg-slate-900 rounded-[100%] absolute top-[50%] left-[-20px] text-white text-2xl p-3"
        >
          <FaArrowCircleLeft />
        </button>
        <button
          id="right"
          onClick={slideRight}
          className="bg-slate-900 rounded-[100%] absolute top-[50%] right-[-20px] text-white text-2xl p-3"
        >
          <FaArrowCircleRight />
        </button>
      </div>
    </section>
  );
};

export default CarouselPromotion;
