import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="mt-20 md:mt-40 mx-auto  relative">
      <div className="my-20 ">
        <div className="flex bg-white items-center py-10  h-[350px] md:h-[400px] overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
          <div className=" w-full flex flex-col items-center ">
            <div className="mx-auto w-[80%] md:w-[50%]">
              <h1 className="text-slate-900 font-bold text-3xl text-center md:text-start">
                Enjoy a comfortable lifestyle
              </h1>

              <p className="my-4 font-semibold text-center md:text-start ">
                {" "}
                Products are all made to standard sizes so that you can mix and
                match them freely.
              </p>
              <div className="flex justify-center md:block ">
                <Link
                  to="/products/AllProducts"
                  className="bg-slate-900 text-white px-2 py-2 rounded-md mt-2 "
                  onClick={() => window(0, 0)}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full hidden md:block">
            <div className="h-full w-full">
              <img
                className="w-full h-full object-cover"
                src="../src/images/cta.jpg"
                alt="cta-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
