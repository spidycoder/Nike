// import React from 'react'

import { star } from "../assets/icons";
import { customer1, customer2 } from "../assets/images";

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h1 className="font font-palanquin font-bold text-[55px] text-center">
        What Our
        <span className="text-coral-red"> Customers </span>
        says?
      </h1>
      <p className="text-lg leading-7 m-auto mt-4 text-center text-slate-600 font-montserrat ">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        <div className="flex items-center justify-center flex-col">
          <img
            src={customer1}
            alt="customer"
            height={130}
            width={130}
            className="rounded-full object-cover"
          />
          <p className="mt-4 font-montserrat info-text text-slate-500 lg:max-w-lg ">
            The attention to detail and the quality of the product exceeded my
            expectations. Highly recommended!
          </p>
          <div className="flex">
            <img
              src={star}
              alt="star"
              width={34}
              height={34}
              className="mt-4"
            />
            <p className="ml-6 mt-5 text-2xl   text-slate-500 font-montserrat">
              (4.5)
            </p>
          </div>
          <h1 className="text-3xl font-palanquin font-bold mt-3">
            Morris Chrown
          </h1>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img
            src={customer2}
            alt="customer"
            height={130}
            width={130}
            className="rounded-full"
          />
          <p className="mt-4 font-montserrat text-slate-500 lg:max-w-lg">
            The product not only met but exceeded my expectations. I will
            definitely be a returning customer!
          </p>
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
          <h1 className="text-3xl font-palanquin font-bold mt-3">Marry</h1>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
