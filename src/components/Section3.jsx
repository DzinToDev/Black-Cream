import React from "react";
import { BsBoxSeam } from "react-icons/bs";

const Section3 = () => {
  return (
    <div className="w-full h-dvh bg-black flex items-end justify-center">
      <div className="container w-[72%] h-[87%] flex  items-start text-white ">
        <img
          className="w-[51%] h-full object-cover object-top"
          src="/img/section3.png"
          alt=""
        />
        <div className="px-14 py-11 w-[45%] ">
          <p className="text-[10px] font-thin font-FragmentMono mb-1.5">
            Hapiness Guarentee
          </p>
          <h2 className="text-3xl font-Gt-Planer-L">Love it, or it's on us.</h2>
          <div className="flex gap-6 items-center justify-center my-3 px-8 py-3 bg-[#161616] ">
            <BsBoxSeam className="w-12 h-12" />
            <div className="w-">
              <p className="font-Gt-Planer-L text-sm">Confidence in every bottle</p>
              <p className="font-FragmentMono font-thin text-[11px]">
                Feel radiant with cosmetics that work as hard as you do
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center my-3 px-8 py-3 bg-[#161616] ">
            <BsBoxSeam className="w-12 h-12" />
            <div className="w-">
              <p className="font-Gt-Planer-L text-sm">Confidence in every bottle</p>
              <p className="font-FragmentMono font-thin text-[11px]">
                Feel radiant with cosmetics that work as hard as you do
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center my-3 px-8 py-3 bg-[#161616] ">
            <BsBoxSeam className="w-12 h-12" />
            <div className="w-">
              <p className="font-Gt-Planer-L text-sm">Confidence in every bottle</p>
              <p className="font-FragmentMono font-thin text-[11px]">
                Feel radiant with cosmetics that work as hard as you do
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-center my-3 px-8 py-3 bg-[#161616] ">
            <BsBoxSeam className="w-12 h-12" />
            <div className="w-">
              <p className="font-Gt-Planer-L text-sm">Confidence in every bottle</p>
              <p className="font-FragmentMono font-thin text-[11px]">
                Feel radiant with cosmetics that work as hard as you do
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
