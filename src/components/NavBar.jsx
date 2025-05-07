import React from "react";
import { TfiLineDouble } from "react-icons/tfi";

const NavBar = () => {
  return (
    <header className="fixed  w-full z-50">
      <nav className="w-full py-6 px-4 flex items-center justify-between">
        <div className="logo flex items-center gap-3 text-white">
          <div className="border px-1.5 text-sm font-extralight">
            <h1>B</h1>
          </div>
          <h1 className="text-lg font-extralight ">BLACK CREAM</h1>
        </div>
        <div className="menu w-11 h-11 bg-gray-300 flex items-center justify-center text-black">
          <TfiLineDouble className="w-6 h-6" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
