"use client";
import React, { useState } from "react";

type Tab = {
  title: string;
  content: React.ReactNode;
};

export default function VerticalTabs({ tabs }: { tabs: Tab[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row w-full gap-4">
      {/* Tab List */}
      <div className="flex flex-col w-full md:w-1/2 max-md:border-b max-md:border-neutral-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`group flex items-center justify-between px-4 py-3 text-left text-xl md:text-2xl text-neutral-500 font-medium transition-all duration-200 ${
              activeIndex === index
                ? "text-neutral-900 font-semibold"
                : "hover:text-neutral-800"
            }`}
          >
            <span className="w-full">{tab.title}</span>
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transform transition-all duration-200">
              →
            </span>
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div className="w-full md:w-1/2 px-4 py-6 md:px-6 md:py-10 bg-gradient-to-br from-pink-400 to-sky-400 rounded-xl text-lg md:text-2xl font-semibold text-white min-h-[200px] flex items-center">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}
