import React, { useState } from "react";
import { GoPlus } from "react-icons/go";

const Section6 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cards = [1, 2, 3]; // dummy map array for loop

  return (
    <div className="w-full h-dvh bg-[#090A09] text-white flex flex-col items-center justify-center">
      <p className="font-FragmentMono text-sm font-thin mb-6">Your Daily Routine</p>
      <div className="w-10/12 h-2/3">
        <img
          className="w-full h-[62%] object-cover object-top rounded-sm"
          src="/img/section5.png"
          alt=""
        />
        <div className="card w-full h-[38%] py-4 flex justify-between gap-4">
          {cards.map((_, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-[32%] h-full rounded-lg p-4 flex items-center transition-all duration-300 cursor-pointer ${
                hoveredIndex === index ? "opacity-100" : "opacity-40"
              } bg-white text-black
              `}
            >
              <div className="w-1/2">
                <h3 className="font-Gt-Planer-L font-thin">
                  Ultra-Gentle foaming facial cleanser
                </h3>
                <p className="text-xs my-2 font-FragmentMono">$ 79.00 USD</p>
                <button className="text-xs flex items-center gap-1 font-FragmentMono">
                  <GoPlus /> Add To Cart
                </button>
              </div>
              <img
                className="w-1/2 h-full rounded-lg"
                src="/img/cream-black.png"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
