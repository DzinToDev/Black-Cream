import React from 'react'
import { GoPlus } from "react-icons/go"
import { motion } from "framer-motion"
import AnimatedText from "./AnimatedText"

const scaleVariant = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
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
      {/* Image and Add button */}
      <div className="pro-img w-full relative">
        <img
          className="h-96 object-cover object-top w-full rounded-sm"
          src={image}
          alt=""
        />

        <motion.div
          variants={scaleVariant}
          className="add absolute bg-white bottom-1 right-1 w-11 h-9 rounded-sm z-50 text-black flex justify-center items-center transition-transform duration-300 group-hover:scale-120"
        >
          <GoPlus />
        </motion.div>
      </div>

      {/* Bottom texts wrapped with overflow hidden */}
      <div className="mt-2 flex flex-col gap-0.5 overflow-hidden">
        <AnimatedText className="text-xs">
          $ 79.00 USD{" "}
          <span className="text-[10px] ml-1.5 text-gray-400">$ 99.00 USD</span>
        </AnimatedText>

        <AnimatedText className="text-sm">Deep nourishing day cream</AnimatedText>

        <AnimatedText className="text-[10px]">★ 4.0 stars, 3504 Reviews</AnimatedText>
      </div>
    </motion.div>
  )
}

export default Product
