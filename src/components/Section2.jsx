import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Product from "./Product";
import AnimatedText from "./AnimatedText";

const scaleVariant = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Section2 = () => {
  const lines = [
    "B Black cream is the only cream that clear pimples, wrinkles, marks, hives",
    "even shadows under the eyes and turns your skin white. B Black whitening",
    "cream makes your face softer brighter and fairer, B Black whitening cream is",
    "useful to removes surface scars.",
  ];

  return (
    <div className="w-full min-h-dvh px-26 py-35 bg-black">
      {/* Mission Section */}
      <div className="mission text-gray-200 text-[14px] font-thin flex justify-between">
        <div className=" w-fit">
          <AnimatedText
            text="Brand Mission"
            className="font-FragmentMono font-thin"
          />
        </div>
        <div className="mission-right w-[39%] leading-6 flex flex-col gap-1">
          {lines.map((line, i) => (
            <AnimatedText key={i} text={line} className="font-Gt-Planer-L" />
          ))}

          <motion.div
            variants={scaleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-2 w-fit"
          >
            <Button>
              <div className="overflow-hidden">
                <AnimatedText text="Larn more about us" />
              </div>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* More Products Section */}
      <div className="more-products text-white mt-40">
        <div className=" w-fit">
          <AnimatedText
            text="Discover more for your skin"
            className="font-Gt-Planer-L text-3xl"
          />
        </div>
        <div className="product flex gap-8 py-8">
          <Product image="/img/prod1.png" />
          <Product image="/img/prod2.png" />
          <Product image="/img/prod3.png" />
          <Product image="/img/prod4.png" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
