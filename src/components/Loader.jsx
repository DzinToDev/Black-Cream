import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import AnimatedText from "./AnimatedText";

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const logoRef = useRef(null);
  const counterRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 3) + 1;
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          gsap.to([logoRef.current, counterRef.current], {
            y: -100,
            opacity: 0,
            duration: 2,
            ease: "power3.inOut",
            stagger: 0.1,
          });
          gsap.to(".p-bar", {
            y: -100,
            opacity: 0,
            duration: 2,
            ease: "power3.inOut",
            stagger: 0.1,
          });

          gsap.to(loaderRef.current, {
            y: "-100%",
            duration: 1.2,
            ease: "power4.inOut",
            delay: 1,
            onComplete,
          });

          return 100;
        }
        return next;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 h-screen w-screen bg-black text-white z-[9999] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="overflow-hidden h-10 flex items-center">
        <div
          ref={logoRef}
          className="relative overflow-hidden flex items-center gap-2 text-sm uppercase tracking-widest "
        >
          <span className="border border-white px-2 py-0.5">B</span>
          <span>BLACK CREAM</span>
        </div>
      </div>

      <div className=" overflow-hidden">
        {/* Progress Bar */}
        <div className="p-bar w-[200px] h-0.5 bg-gray-600 relative mt-4 mb-6 ">
          <div
            className="absolute top-0 left-0 h-full bg-white"
            style={{ width: `${count}%`, transition: "width 0.3s ease" }}
          />
        </div>
      </div>
      {/* Counter */}
      <div className="absolute bottom-6 right-8 h-12 w-34 overflow-hidden text-5xl font-Gt-Planer-M text-right flex items-end justify-end">
        <div ref={counterRef}>{count}%</div>
      </div>
    </div>
  );
};

export default Loader;
