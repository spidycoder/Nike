import { shoe4, shoe5, shoe6, shoe7 } from "../assets/images";
import { star } from "../assets/icons";
const PopularProducts = () => {
  return (
    <section>
      <div className="flex font-palanquin font-bold text-[55px]">
        <h1 className="mr-2">Our</h1>
        <span className="text-coral-red mr-2">Popular</span>
        <h1>Products</h1>
      </div>
      <div className="lg:max-w-lg text-[20px] text-slate-500 font-montserrat">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </div>
      <div className="mt-10 flex gap-20">
        <div>
          <img src={shoe4} alt="shoes" width={250} height={250} />
          <div className="flex">
            <img
              src={star}
              alt="star"
              width={34}
              height={34}
              className="mt-4"
            />
            <p className="ml-6 mt-5 text-2xl  text-slate-500 font-montserrat">
              (4.5)
            </p>
          </div>
          <h2 className="text-3xl font-palanquin font-bold">
            Nike Air Jordan-01
          </h2>
          <span className="text-[40px] text-coral-red">$200</span>
        </div>
        <div>
          <img src={shoe5} alt="shoes" width={250} height={250} />
          <div className="flex">
            <img
              src={star}
              alt="star"
              width={34}
              height={34}
              className="mt-4"
            />
            <p className="ml-6 mt-5 text-2xl  text-slate-500 font-montserrat">
              (4.5)
            </p>
          </div>
          <h2 className="text-3xl font-palanquin font-bold">
            Nike Air Jordan-001
          </h2>
          <span className="text-[40px] text-coral-red">$250</span>
        </div>
        <div>
          <img src={shoe6} alt="shoes" width={250} height={250} />
          <div className="flex">
            <img
              src={star}
              alt="star"
              width={34}
              height={34}
              className="mt-4"
            />
            <p className="ml-6 mt-5 text-2xl  text-slate-500 font-montserrat">
              (4.5)
            </p>
          </div>
          <h2 className="text-3xl font-palanquin font-bold">
            Nike Air Jordan-105
          </h2>
          <span className="text-[40px] text-coral-red">$350</span>
        </div>
        <div>
          <img src={shoe7} alt="shoes" width={250} height={250} />
          <div className="flex">
            <img
              src={star}
              alt="star"
              width={34}
              height={34}
              className="mt-4"
            />
            <p className="ml-6 mt-5 text-2xl  text-slate-500 font-montserrat">
              (4.5)
            </p>
          </div>
          <h2 className="text-3xl font-palanquin font-bold">
            Nike Air Jordan-S
          </h2>
          <span className="text-[40px] text-coral-red">$400</span>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
