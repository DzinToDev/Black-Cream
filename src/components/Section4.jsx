import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const images = [
  { url: "/img/section4-1.png", text: "Revitalizing Face Cream", para: "..." },
  { url: "/img/section4-2.jpg", text: "Hydrating Serum Glow", para: "..." },
  { url: "/img/section4-3.png", text: "Night Repair Elixir", para: "..." },
  { url: "/img/section4-4.jpg", text: "Vitamin C Brightener", para: "..." },
];

const TIMER_DURATION = 6;

const Section4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerProgress, setTimerProgress] = useState(0);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const startTimer = () => {
    let progress = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      progress += 1;
      setTimerProgress(progress / (TIMER_DURATION * 60));
      if (progress >= TIMER_DURATION * 60) {
        clearInterval(intervalRef.current);
        goToNext();
      }
    }, 1000 / 60);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimerProgress(0);
    startTimer();
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimerProgress(0);
    startTimer();
  };

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-100, 100], [-15, 15]);

  const handleDragEnd = (_, info) => {
    const offsetX = info.offset.x;
    if (Math.abs(offsetX) > 80) {
      clearInterval(intervalRef.current);
      offsetX > 0 ? goToNext() : goToPrevious();
    }
    animate(x, 0, { type: "spring", stiffness: 300 });
  };

  useEffect(() => {
    if (isInView) {
      startTimer();
    }
    return () => clearInterval(intervalRef.current);
  }, [isInView]);

  return (
    <div ref={sectionRef} className="w-full h-[105vh] relative overflow-hidden bg-[#090A09] px-22 py-18">
      <div className="w-full h-full relative bg-amber-200">
        <img src={images[currentIndex].url} className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-3xl font-bold drop-shadow-lg pb-2 font-Gt-Planer-L">{images[currentIndex].text}</h1>
          <p className="text-xs font-thin w-96 font-FragmentMono">{images[currentIndex].para}</p>
        </div>
        <div className="absolute top-10 right-10 text-black text-sm font-thin bg-white px-4 py-1.5 rounded-sm font-FragmentMono">
          0{currentIndex + 1} / 0{images.length}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2">
          <div className="h-full bg-white transition-all duration-500" style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }} />
        </div>
        <motion.div
          drag="x"
          style={{ x, rotate }}
          dragConstraints={{ left: -100, right: 100 }}
          onDragEnd={handleDragEnd}
          className="absolute right-[30%] top-1/2 -translate-y-1/2 z-10"
        >
          <div className="w-20 h-20 rounded-full border-1 border-white bg-transparent flex items-center justify-center relative">
            <motion.div className="absolute inset-0 flex items-center justify-center" style={{ rotate: timerProgress * 360 }}>
              <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-[-6%]" />
              <div className="w-2.5 h-2.5 bg-white rounded-full absolute bottom-[-6%]" />
            </motion.div>
            <span className="text-white text-[10px] font-semibold tracking-wider">DRAG ME</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section4;
