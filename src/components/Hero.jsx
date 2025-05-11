import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import Button from "./Button";

const scaleVariant = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <div className="relative h-dvh bg-[url('/img/black-hero.png')] bg-cover bg-center flex hero-wrapper">
      {/* Left Side */}
      <div
        data-scroll
        data-scroll-speed="0.1"
        className="w-full lg:w-1/2 h-full py-36 px-26 text-white flex flex-col"
      >
        <AnimatedText
          as="h1"
          text="Glow naturally"
          className="text-4xl lg:text-6xl font-Gt-Planer-R leading-[1.1]"
          delay={0}
        />
        <AnimatedText
          as="h1"
          text="every day."
          className="text-6xl font-Gt-Planer-R leading-[1.1]"
          delay={0.15}
        />
        <AnimatedText
          as="p"
          text="Discover our skincare essentials, crafted with love and powered by nature."
          className="text-xs w-96 mt-4 font-thin font-Gt-Planer-L"
          delay={0.3}
        />

        <motion.div
          variants={scaleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 w-fit"
        >
          <Button>
            <div className="overflow-hidden">
              <AnimatedText
                text="Shop now"
                className="block"
                delay={0.4}
                index={0}
              />
            </div>
          </Button>
        </motion.div>
      </div>

      {/* Right Card */}
      <div
        data-scroll
        data-scroll-speed="0.2"
        className="w-1/2 h-full flex items-end justify-end py-30 px-26"
      >
        <motion.div
          variants={scaleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card w-62 bg-white p-4 rounded-sm flex flex-col"
        >
          <div className="card-text-container mb-2">
          <AnimatedText
            text="Ultra-Gentle"
            className="text-2xl font-light font-Gt-Planer-L"
            delay={0}
          />
          <AnimatedText
            text="foaming facial"
            className="text-2xl font-light font-Gt-Planer-L"
            delay={0.1}
          />
          <AnimatedText
            text="cleanser"
            className="text-2xl font-light font-Gt-Planer-L"
            delay={0.2}
          />
          </div>
          <motion.div
            variants={scaleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <img src="/img/cream-black.png" alt="" className="rounded-lg" />
          </motion.div>
          <div className="flex gap-3 pl-0.5">
          <AnimatedText
            text="$ 79.00 USD"
            className="text-xs mt-2"
            delay={0.4}
          />
          <AnimatedText
            text="$ 99.00 USD"
            className="text-xs mt-2 text-gray-400"
            delay={0.4}
          />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
