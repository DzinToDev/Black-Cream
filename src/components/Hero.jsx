import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className=" relative h-dvh bg-[url('/img/black-hero.png')] bg-cover bg-center flex">
      <div className="heto-text w-1/2 h-full py-36 px-26 text-white">
        <div>
          <h1 className="text-6xl font-Gt-Planer-R">
            Glow naturally <br />
            every day.
          </h1>
        </div>
        <p  className="text-xs w-96 mt-4 font-thin font-Gt-Planer-L">
          Discover our skincare essentials, crafted with love and powerd by
          nature.
        </p>
        <Button text="Shop now" />
      </div>
      <div className="heto-card w-1/2 h-full flex items-end justify-end  py-30 px-26">
        <div className="card w-62  bg-white p-4 rounded-lg">
            <p className="text-2xl font-light font-Gt-Planer-L mb-3">Ultra-Gentle foaming facial cleanser</p>
            <img className=" rounded-lg mb-3" src="/img/cream-black.png" alt="" />
            <p className="text-xs">$ 79.00 USD <span className="text-[10px] ml-1.5 text-gray-400">$ 99.00 USD</span></p>
        </div>

      </div>
    </div>
  );
};

export default Hero;
