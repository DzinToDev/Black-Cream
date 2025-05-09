import React, { useState } from "react";
import CardWithHover from "../components/CardWithHover";
import AnimatedText from "./AnimatedText";

const Section7 = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full h-dvh bg-[#090A09] text-white flex flex-col items-center justify-center">
      <AnimatedText text="Blog" className="text-sm mb-3" />
      <AnimatedText
        text=" Stay Informed, Stay ahead"
        className="font-FragmentMono text-sm mb-8"
      />

      <div className="w-3/4">
        <div className="card w-full py-4 flex justify-between gap-4 flex-wrap">
          {cards.map((_, index) => (
            <CardWithHover
              key={index}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              layout="vertical"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section7;
