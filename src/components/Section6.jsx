import React, { useState } from "react";
import CardWithHover from "../components/CardWithHover";
import AnimatedText from "./AnimatedText";

const Section6 = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cards = [1, 2, 3];

  return (
    <div className="w-full h-dvh bg-[#090A09] text-white flex flex-col items-center justify-center">
      <AnimatedText
        text="Your Daily Routine"
        className="font-FragmentMono text-sm font-thin h-fit"
      />

      <div className="w-10/12 h-2/3 mt-6">
        <img
          className="w-full h-[62%] object-cover object-top rounded-sm"
          src="/img/section5.png"
          alt=""
        />
        <div className="card w-full h-[38%] py-4 flex justify-between gap-4">
          {cards.map((_, index) => (
            <CardWithHover
              key={index}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              layout="horizontal"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
