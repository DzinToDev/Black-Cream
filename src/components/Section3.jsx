import React, { useState } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const content = [
  {
    title: "Confidence in every bottle",
    desc: "Feel radiant with cosmetics that work as hard as you do",
  },
  {
    title: "Zero Compromise",
    desc: "Beauty and performance, hand-in-hand",
  },
  {
    title: "Ethically Sourced",
    desc: "Crafted with care for people and the planet",
  },
  {
    title: "Dermatologist Approved",
    desc: "Backed by science, loved by users",
  },
];

const Section3 = () => {
  const [hoverY, setHoverY] = useState(0);
  const itemHeight = 84; // in px (py-3 + my-3 + text etc.)

  return (
    <div className="w-full h-dvh bg-black flex items-end justify-center relative overflow-hidden">
      <div className="container w-[72%] h-[87%] flex items-start text-white z-10 relative">
        {/* Left Image */}
        <img
          className="w-[51%] h-full object-cover object-top 2xl:object-cover 2xl:object-center"
          src="/img/section3.png"
          alt=""
        />

        {/* Text and Items */}
        <div className="px-14 py-11 w-[45%] relative">
          <AnimatedText
            text="Happiness Guarantee"
            className="text-[10px] font-thin font-FragmentMono mb-1.5"
          />
          <AnimatedText
            text="Love it, or it's on us."
            className="text-3xl font-Gt-Planer-L z-10 relative"
          />
          <div className="relative mt-4">
            {/* Hovered Background Highlighter */}
            <motion.div
              className="absolute left-0 w-full h-[84px] bg-[#2d2d2d] rounded-sm z-0"
              animate={{ top: hoverY }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            />

            {/* Foreground Items */}
            {content.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoverY(i * itemHeight)}
                className="flex gap-6 items-center my-3 px-8 py-3 relative cursor-pointer z-10"
              >
                <BsBoxSeam className="w-12 h-12" />
                <div className=" w-[80%]">
                  <p className="font-Gt-Planer-L text-sm">{item.title}</p>
                  <p className="font-FragmentMono font-thin text-[11px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
