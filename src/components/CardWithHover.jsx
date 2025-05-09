import React from "react";
import { GoPlus } from "react-icons/go";
import AnimatedText from "./AnimatedText";

const CardWithHover = ({ index, hoveredIndex, setHoveredIndex, setActiveIndex, activeIndex, layout = "horizontal" }) => {
  const isActive = hoveredIndex !== null ? hoveredIndex === index : activeIndex === index;
  const isVertical = layout === "vertical";

  const scaleVariant = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => {
        setHoveredIndex(null);
        setActiveIndex(index);
      }}
      className={`rounded-lg p-4 transition-all duration-300 cursor-pointer ${
        isActive ? "opacity-100" : "opacity-40"
      } bg-white text-black ${
        isVertical ? "w-[32%] h-fit" : "w-[32%] h-full flex items-center"
      }`}
    >
      {isVertical ? (
        <>
          <img
            className="w-full h-36 rounded-lg object-cover"
            src="/img/cream-black.png"
            alt=""
          />
          <div className="w-full">
            <div className="flex justify-between">
              <AnimatedText
                text="$ 79.00 USD"
                className="text-xs mt-4 mb-2 font-FragmentMono bg-black text-white"
                delay={0.2}
              />
              <button className="text-xs flex items-center gap-1 font-FragmentMono">
                <GoPlus /> Add To Cart
              </button>
            </div>
            <AnimatedText
              text="Ultra-Gentle foaming facial cleanser"
              className="font-Gt-Planer-L font-thin"
              delay={0.3}
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2">
            <AnimatedText
              text="Ultra-Gentle foaming facial cleanser"
              className="font-Gt-Planer-L font-thin"
              delay={0.2}
            />
            <AnimatedText
              text="$ 79.00 USD"
              className="text-xs my-2 font-FragmentMono"
              delay={0.3}
            />
            <button className="text-xs flex items-center gap-1 font-FragmentMono">
              <GoPlus /> Add To Cart
            </button>
          </div>
          <img
            className="w-1/2 h-full rounded-lg"
            src="/img/cream-black.png"
            alt=""
          />
        </>
      )}
    </div>
  );
};

export default CardWithHover;
