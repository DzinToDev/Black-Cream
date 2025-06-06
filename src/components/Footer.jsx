import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  "home",
  "error404",
  "checkout",
  "blog home",
  "blog post",
  "details",
  "cookies",
  "terms",
  "privacy",
  "pricing table",
  "about us",
];

const Footer = () => {
  const letterTopRef = useRef([]);
  const letterBottomRef = useRef([]);
  const lineRefs = useRef([]);
  const linkRefs = useRef([]);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ===== ScrollTrigger Timeline =====
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer-container",
          start: "top 50%",
        },
      });
  
      tl.fromTo(
        [...letterTopRef.current, ...letterBottomRef.current],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 1.2, ease: "power2.out" }
      ).fromTo(
        lineRefs.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 0.8, duration: 1.2, ease: "power2.out" },
        "<"
      );
  
      // ===== Magnet Hover Effect =====
      const img = imgRef.current;
      const container = containerRef.current;
  
      const handleMouseMove = (e) => {
        const bounds = container.getBoundingClientRect();
        const x = e.clientX - bounds.left - bounds.width / 2;
        const y = e.clientY - bounds.top - bounds.height / 2;
  
        gsap.to(img, {
          x: x * 0.1,
          y: y * 0.1,
          ease: "power3.out",
          duration: 0.4,
        });
      };
  
      const handleMouseLeave = () => {
        gsap.to(img, {
          x: 0,
          y: 0,
          ease: "power3.out",
          duration: 0.6,
        });
      };
  
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
  
      // Cleanup on unmount
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  
    return () => ctx.revert(); // Cleanup context
  }, []);
  

  return (
    <div className="footer-container w-full h-screen bg-[url('/img/section4-1.png')] bg-cover relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#090A09] opacity-90 z-0"></div>
      <div className="w-full h-full flex flex-col items-center justify-end gap-20 relative z-10">
        {/* Centered Letters & Image */}
        <div className="w-[55%] h-2/5 flex flex-col justify-between items-center">
          <div className="letter w-full flex items-center justify-between text-sm text-white font-FragmentMono">
            {["B", "L", "A", "C", "K"].map((char, i) => (
              <span
                key={`top-${i}`}
                ref={(el) => el && (letterTopRef.current[i] = el)}
              >
                {char}
              </span>
            ))}
          </div>

          <div ref={containerRef} className="relative w-[60%] h-[55%] border border-[#2d2d2d] bg-[#11111124] flex justify-center items-center">
            <div
              ref={(el) => (lineRefs.current[0] = el)}
              className="absolute w-[107%] 2xl:w-[102%] h-[1px] bg-[#454545] opacity-40 rotate-[20deg] 2xl:rotate-[16deg] z-10"
            ></div>
            <div
              ref={(el) => (lineRefs.current[1] = el)}
              className="absolute w-[107%] 2xl:w-[102%] h-[1px] bg-[#454545] opacity-80 rotate-[-20.5deg] 2xl:rotate-[-16deg]"
            ></div>
            <img
             ref={imgRef}
              src="/img/cream-black.png"
              alt=""
              className="w-1/2 h-3/4 object-cover z-20"
            />
          </div>

          <div className="letter w-full flex items-center justify-between text-sm text-white font-FragmentMono">
            {["C", "R", "E", "A", "M"].map((char, i) => (
              <span
                key={`bottom-${i}`}
                ref={(el) => el && (letterBottomRef.current[i] = el)}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="w-full h-1/3 px-28 flex items-center justify-between">
          {[...Array(3)].map((_, colIndex) => (
            <ul
              key={colIndex}
              className="text-[9px] font-FragmentMono capitalize font-thin text-white flex flex-col gap-1 overflow-hidden"
            >
              {links.map((link, index) => (
                <div key={index} className="overflow-hidden">
                  <li
                    className="group relative inline-block translate-y-0 opacity-100"
                    ref={(el) =>
                      (linkRefs.current[index + colIndex * links.length] = el)
                    }
                  >
                    <span className="relative z-10 group-hover:text-black transition-all duration-300">
                      <span className="relative z-10">{link}</span>
                      <span className="absolute left-0 bottom-0 h-full w-0 bg-white z-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </span>
                  </li>
                </div>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
