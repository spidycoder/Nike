import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import {
  thumbnailShoe1,
  thumbnailShoe3,
  thumbnailShoe2,
} from "../assets/images";
import Button from "../components/Button";
const Hero = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-between min-h-screen gap-10 max-container">
      <div className="relative lg:ml-14 xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-[25px] text-coral-red font-montserrat">
          Our Summer Collections
        </p>
        <h1 className=" font-palanquin font-bold">
          <span className="text-[100px] xl:whitespace-nowrap relative z-10">
            The New Arrival
          </span>
          <span className="text-[100px] text-coral-red inline-block">
            Nike{" "}
          </span>
          <p className="text-[100px] inline-block ml-3">Shoes</p>
        </h1>
        <p className="text-[25px] text-slate-500 font-montserrat">
          Discover stylish Nike arrivals,quality comfort and innovation for
          active life
        </p>
        <br />
        <Button label="Shop now" imgUrl={arrowRight} />

        <div className="mt-4 flex gap-4 ">
          <h1>
            <span className="text-[60px] font-bold">1k+</span>
            <p className="ml-2 text-slate-600">Brands</p>
          </h1>
          <h1>
            <span className="text-[60px] font-bold">500+</span>
            <p className="ml-2 text-slate-600">Shops</p>
          </h1>
          <h1>
            <span className="text-[60px] font-bold">250k+</span>
            <p className="ml-2 text-slate-600">Customers</p>
          </h1>
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="big-shoe"
          height={500}
          width={610}
          className="object-contain relative z-10"
        />
        {/* start wrapping all these into div */}
        <div className="mt-[740px]  flex sm:gap-2 gap-7 absolute -botton-[5%] sm:left-[10%] max-sm:px-6">
          <div className="mr-3">
            <div className="border-2 rounded-xl hover:bg-coral-red  cursor-pointer max-sm:flex-1">
              <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 rounded-xl">
                <img
                  src={thumbnailShoe1}
                  alt="shoe-collection"
                  width={127}
                  height={103}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mr-3">
            <div className="border-2 rounded-xl hover:bg-coral-red  cursor-pointer max-sm:flex-1">
              <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 rounded-xl">
                <img
                  src={thumbnailShoe2}
                  alt="shoe-collection"
                  width={127}
                  height={103}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="border-2 rounded-xl hover:bg-coral-red  cursor-pointer max-sm:flex-1">
              <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 rounded-xl">
                <img
                  src={thumbnailShoe3}
                  alt="shoe-collection"
                  width={127}
                  height={103}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
