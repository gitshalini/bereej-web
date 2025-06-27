"use client";
import React, { useState } from "react";

type Tab = {
  title: string;
  content: React.ReactNode;
};

// const tabs: Tab[] = [
//   {
//     title: "Experience excellence with our expert team",
//     content: (
//       <p>
//         {`We take pride in our exceptional team of experts who bring a wealth of
//         experience to every project. With years of industry knowledge and a
//         passion for innovation, our team is dedicated to delivering top-notch
//         solutions that exceed your expectations.`}
//       </p>
//     ),
//   },
//   {
//     title: "Customized solutions for your unique needs",
//     content: (
//       <p>
//         {`One size does not fit all, and we understand that your needs are unique.
//         That's why we offer fully customized solutions tailored to your specific
//         requirements. From the initial consultation to the final implementation,
//         we collaborate closely with you to ensure the perfect fit for your
//         goals.`}
//       </p>
//     ),
//   },
//   {
//     title: "Transparent communication and collaboration",
//     content: (
//       <p>
//         {`We take pride in our exceptional team of experts who bring a wealth of
//         experience to every project. With years of industry knowledge and a
//         passion for innovation, our team is dedicated to delivering top-notch
//         solutions that exceed your expectations.`}
//       </p>
//     ),
//   },
// ];

export default function VerticalTabs({ tabs }: { tabs: Tab[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex">
      <div className="flex flex-col w-full md:w-1/2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`group flex items-center px-4 py-3 text-left text-3xl text-neutral-400 font-medium cursor-pointer transition-all ${
              activeIndex === index ? "text-neutral-800 font-semibold" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="w-full md:w-[450px]">{tab.title}</span>
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transform transition-all duration-200">
              →
            </span>
          </button>
        ))}
      </div>

      <div className="w-full md:w-1/2 h-[288px] flex-1 px-6 py-10 bg-[linear-gradient(125deg,#b47599,#38bdf8)] rounded-xl text-2xl items-center font-semibold">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}
