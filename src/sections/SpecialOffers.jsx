import { offer } from "../assets/images";

const SpecialOffers = () => {
  return (
    <section>
      <div className="flex justify-wrap items-center gap-5 max-container max-xl:flex-col-reverse sm:px-5">
        <div>
          <img
            src={offer}
            height={670}
            width={773}
            className="object-contain w-full"
          />
        </div>
        <div>
          <div className="flex font-palanquin font-bold text-[55px]">
            <span className="text-coral-red mr-2">Special</span>
            <h1>Offer</h1>
          </div>
          <div className="lg:max-w-lg text-[20px] text-slate-500 font-montserrat">
            <p>
              Embark on a shopping journey that redefines your experience with
              unbeatable deals. From premier selections to incredible savings,
              we offer unparalleled value that sets us apart.
            </p>
            <br />
            <p>
              Navigate a realm of possibilities designed to fulfill your unique
              desires, surpassing the loftiest expectations. Your journey with
              us is nothing short of exceptional.
            </p>
          </div>
          <div className="flex gap-6 mt-5">
            <button className="flex justify-center items-center bg-coral-red rounded-full border-red-500 text-white px-7 py-4 gap-2 ">
              view details
            </button>
            <button className="flex justify-center items-center bg-black rounded-full border-red-500 text-white px-7 py-4 gap-2 ">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
