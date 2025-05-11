import React from "react";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

// Overlay animation (starts as full screen, falls to bottom right)
const overlayVariant = {
  hidden: {
    x: "0%",
    y: "0%",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // full image
  },
  visible: {
    x: "100%",
    y: "100%",
    clipPath: "polygon(90% 90%, 100% 90%, 100% 100%, 90% 100%)", // bottom right corner
    transition: {
      duration: 1.4,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

// Add button animation
const buttonVariant = {
   hidden: { y: -50, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // bouncey ease
    },
  },

};

const Product = ({ image }) => {
  return (
    <motion.div
      className="w-72 group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Image wrapper */}
      <div className="pro-img w-full relative overflow-hidden rounded-sm">
        {/* Actual Image */}
        <img
          className="h-96 object-cover object-top w-full"
          src={image}
          alt=""
        />

        {/* Gray overlay that falls to bottom-right */}
        <motion.div
          variants={overlayVariant}
          className="absolute top-0 left-0 w-full h-full bg-gray-200 z-10 rounded-sm"
        />

        {/* Add button above overlay */}
        <motion.div
          variants={buttonVariant}
          className="add absolute bottom-1 right-1 w-11 h-9 bg-white rounded-sm z-20 text-black flex justify-center items-center transition-transform duration-300 group-hover:scale-110"
        >
          <GoPlus />
        </motion.div>
      </div>

      {/* Text */}
      <div className="mt-2 flex flex-col gap-0.5 overflow-hidden">
        <AnimatedText className="text-xs">
          $ 79.00 USD{" "}
          <span className="text-[10px] ml-1.5 text-gray-400">$ 99.00 USD</span>
        </AnimatedText>
        <AnimatedText className="text-sm">Deep nourishing day cream</AnimatedText>
        <AnimatedText className="text-[10px]">★ 4.0 stars, 3504 Reviews</AnimatedText>
      </div>
    </motion.div>
  );
};

export default Product;
