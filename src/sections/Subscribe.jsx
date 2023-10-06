// import React from 'react'

const Subscribe = () => {
  return (
    <section className="max-container flex justify-center items-center max-lg:flex-col gap-[190px]">
      <h1 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up form
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h1>
      <div className="flex items-center gap-5 border p-3 border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="outline-none pl-3 text-slate-gray"
        />
        <div>
          <button className="flex justify-center items-center bg-coral-red rounded-full border-red-500 text-white px-7 py-4 gap-2 hover:text-[18px]">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
