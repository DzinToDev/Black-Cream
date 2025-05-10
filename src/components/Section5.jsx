import React from "react";
import AnimatedText from "../components/AnimatedText";

const Section5 = () => {
  return (
    <div className="w-full h-dvh bg-[#090A09] px-22 py-18 flex items-center justify-between">
      <div className="left w-[23%] h-full flex items-end">
        <img
          data-scroll
          data-scroll-speed="0.05"
          src="/img/section5-l.png"
          alt=""
        />
      </div>

      <div className="center-text w-[37%] text-white font-Gt-Planer-L font-thin text-xl flex flex-col gap-1">
        <AnimatedText
          text="B Black cream is the only cream that clears pimples,"
          className="bg-clip-text bg-gradient-to-b from-white to-gray-500"
          delay={0.1}
        />
        <AnimatedText
          text="wrinkles, marks, hives even shadows under the eyes"
          className="bg-clip-text bg-gradient-to-b from-white to-gray-500"
          delay={0.2}
        />
        <AnimatedText
          text="and turns your skin white. B Black whitening cream"
          className="bg-clip-text bg-gradient-to-b from-white to-gray-500"
          delay={0.3}
        />
        <AnimatedText
          text="makes your face softer, brighter and fairer. B Black"
          className="bg-clip-text bg-gradient-to-b from-white to-gray-500"
          delay={0.4}
        />
        <AnimatedText
          text="whitening cream is useful to remove surface scars."
          className="bg-clip-text bg-gradient-to-b from-white to-gray-500"
          delay={0.5}
        />
      </div>

      <div className="right w-[23%] h-full">
        <img
          data-scroll
          data-scroll-speed="0.04"
          src="/img/section5-r.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Section5;
