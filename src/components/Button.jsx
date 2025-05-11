import React from 'react';

const Button = ({ children }) => {
  return (
    <div className="text-[10px] px-5 py-2 w-fit bg-white text-black mt-4 rounded-sm font-FragmentMono cursor-pointer">
      {children}
    </div>
  );
};

export default Button;
