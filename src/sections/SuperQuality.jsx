// import React from 'react'
import Button from "../components/Button";
import { shoe8 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section>
      <div className="flex gap-16">
        <div>
          <div className="lg:max-w-lg  font-palanquin font-bold text-[55px]">
            <h1 className="mr-2">We Provide You</h1>
            <span className="text-coral-red mr-2">Super Quality</span>
            <h1>Shoes</h1>
          </div>
          <p className="lg:max-w-lg text-[20px] text-slate-500 font-montserrat">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="lg:max-w-lg text-[20px] text-slate-500 font-montserrat mt-5">
          Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-6">
          <Button label="Shop now" imgUrl={arrowRight} />
          </div>
        </div>
        <div className="ml-10">
          <img src={shoe8} alt="shoes" height={600} width={600} />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
