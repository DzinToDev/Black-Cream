import React, { useState } from "react";
import { GoPlus } from "react-icons/go";

const Section7 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cards = [1, 2, 3, 4, 5, 6]; // dummy map array for loop
  return (
    <div className="w-full h-dvh bg-[#090A09] text-white flex flex-col items-center justify-center">
      <p className="text-sm mb-3">Blog</p>
      <p className="font-FragmentMono text-sm mb-8">
        Stay Informed, Stay ahead
      </p>
      <div className="w-3/4">
        <div className="card w-full  py-4 flex justify-between gap-4 flex-wrap">
          {cards.map((_, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-[32%] h-fit rounded-lg p-4 transition-all duration-300 cursor-pointer ${
                hoveredIndex === index ? "opacity-100" : "opacity-40"
              } bg-white text-black
            `}
            >
              <img
                className="w-full h-36 rounded-lg object-cover"
                src="/img/cream-black.png"
                alt=""
              />
              <div className="w-full">
               <div className="flex justify-between">
               <p className="text-xs mt-4 mb-2 font-FragmentMono bg-black text-white">$ 79.00 USD</p>
                <button className="text-xs flex items-center gap-1 font-FragmentMono">
                  <GoPlus /> Add To Cart
                </button>
               </div>
                <h3 className="font-Gt-Planer-L font-thin">
                  Ultra-Gentle foaming facial cleanser
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section7;
