import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";

const faqs = [
  {
    question: "What skin types are your products suitable for?",
    answer:
      "You can return any product within 30 days of purchase with the receipt.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide with additional charges.",
  },
  {
    question: "How do I track my order?",
    answer:
      "After placing your order, you’ll get an email with tracking information.",
  },
  {
    question: "Are your products vegan?",
    answer: "Yes, all our products are 100% vegan and cruelty-free.",
  },
  {
    question: "Can I cancel my order?",
    answer: "Yes, you can cancel your order before it is shipped.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-[#090A09] flex items-center justify-center px-22 py-16 gap-16">
      {/* Left Side */}
      <div className="w-1/3 flex flex-col justify-start text-white ">
        <p className="font-FragmentMono text-xs">FAQs</p>
        <h1 className="text-2xl font-light mt-6 ">
          Your answers to <br /> popular questions
        </h1>
        <img
          src="/img/FAQ.png"
          alt="FAQ"
          className="w-full max-w-sm rounded-xs shadow-lg mt-4"
        />
      </div>

      {/* Right Side */}
      <div className="w-1/3 space-y-3 ">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-[#151515] shadow-md rounded-xs overflow-hidden transition-all duration-400 pt-4 "
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 text-center cursor-pointer "
            >
              <span className="text-sm font-light text-white">
                {item.question}
              </span>
              <span className="text-xl font-thin text-white transition-all duration-900 transform ">
                {activeIndex === index ? <HiOutlineMinusSmall /> : <GoPlus />}
              </span>
              
            </button>
            <div
              className={`px-4 pb-4 text-gray-300 text-sm transition-all duration-400 ease-in-out ${
                activeIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
