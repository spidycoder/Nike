import { truckFast, shieldTick, support } from "../assets/icons";
const Services = () => {
  return (
    <section className="sm:mr-6 ">
      <section className="max-container">
        <div className="flex gap-5">
          <div className="flex-1 sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16">
            <div className=" bg-white rounded-md">
              <div className="flex justify-center  bg-coral-red rounded-full w-11 h-11 mb-6">
                <img src={truckFast} alt="truck" width={24} height={24} />
              </div>
              <h1 className="font-palanquin font-bold text-[30px]">
                Free shipping
              </h1>
              <p className="lg:max-w-lg text-[20px] text-slate-500 font-montserrat">
                Enjoy seamless shopping with our complimentary shipping service.
              </p>
            </div>
          </div>
          <div className="flex-1 rounded-[20px] shadow-3xl px-10 py-16">
            <div className=" bg-white rounded-md">
              <div className="flex justify-center  bg-coral-red rounded-full w-11 h-11 mb-6">
                <img src={shieldTick} alt="truck" width={24} height={24} />
              </div>
              <h1 className="font-palanquin font-bold text-[30px]">
                Free shipping
              </h1>
              <p className="lg:max-w-lg text-[20px] text-slate-500 font-montserrat">
                Enjoy seamless shopping with our complimentary shipping service.
              </p>
            </div>
          </div>
          <div className="flex-1 rounded-[20px] shadow-3xl px-10 py-16">
            <div className=" bg-white rounded-md">
              <div className="flex justify-center  bg-coral-red rounded-full w-11 h-11 mb-6">
                <img src={support} alt="truck" width={24} height={24} />
              </div>
              <h1 className="font-palanquin font-bold text-[30px]">
                Free shipping
              </h1>
              <p className="lg:max-w-lg text-[20px] text-slate-500 font-montserrat">
                Enjoy seamless shopping with our complimentary shipping service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
