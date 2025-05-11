import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "./AnimatedText";

const textVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const menuContainerVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: "100%",
    y: "-100%",
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: "0%",
    y: "0%",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)",
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    x: "100%",
    y: "-100%",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const revealUp = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.1 + 0.5,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const letterTopRef = useRef([]);
  const menuLinkRefs = useRef([]);

  letterTopRef.current = [];
  menuLinkRefs.current = [];
  return (
    <>
      <header className="fixed w-full z-50">
        <nav className="w-full py-6 px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="logo text-white flex items-center gap-1">
            <motion.div
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className="border px-1.5 text-sm font-extralight"
            >
              <h1>B</h1>
            </motion.div>
            <motion.h1
              className="text-lg font-extralight tracking-widest"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              transition={{ ...textVariant.visible.transition, delay: 0.4 }}
            >
              BLACK CREAM
            </motion.h1>
          </div>

          {/* Burger Icon */}
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="menu w-11 h-11 bg-gray-300 cursor-pointer flex flex-col gap-1 items-center justify-center text-black relative z-50"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ ...textVariant.visible.transition, delay: 0.6 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
              className="line w-5 h-0.5 bg-black origin-center"
            />
            <motion.div
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
              className="line w-5 h-0.5 bg-black origin-center"
            />
          </motion.div>
        </nav>
      </header>

      {/* Full Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuContainerVariant}
            className="fixed right-0 top-0 w-[500px] max-w-full h-screen bg-white  z-40 p-12 flex flex-col justify-between"
          >
            {/* Menu Links */}
            <div className="">
              <div className="h-1/3 flex justify-center items-center border-b border-gray-300">
                <AnimatedText className="font-FragmentMono" text="Menu" />
              </div>

              <div className="menu-items flex flex-col gap-6 h-96 justify-center pl-10">
                {["Home", "Shop", "About", "Contact"].map((item, index) => (
                  <div className=" overflow-hidden" key={index}>
                    <motion.div
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={revealUp}
                      className="relative group w-fit overflow-hidden text-4xl font-Gt-Planer-R font-light cursor-pointer"
                    >
                      <span className="relative z-10 group-hover:text-white transition-all duration-300 px-4 py-2">
                        {item}
                      </span>
                      <span className="absolute left-0 bottom-0 h-full w-0 bg-black z-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Branding Footer */}
            <div className="branding pt-12 border-t border-gray-300 ml-5">
              <div className="text-center text-gray-700 text-lg tracking-widest flex items-center justify-center gap-6 font-thin pr-5">
                {["B", "L", "A", "C", "K"].map((char, i) => (
                  <AnimatedText key={`brand-bottom-${i}`} text={char} />
                ))}
              </div>
              <div className="text-center text-gray-700 text-lg tracking-widest flex items-center justify-center gap-6 font-thin pr-5">
                {["C", "R", "E", "A", "M"].map((char, i) => (
                  <AnimatedText key={`brand-bottom-${i}`} text={char} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
