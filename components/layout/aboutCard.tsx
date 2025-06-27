"use client";

import React from "react";

export interface ContentItem {
  title: string;
  desc: string;
}
export default function AboutCards({ content }: { content: ContentItem[] }) {
  return (
    <div className="relative w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:gap-4">
        {content.map((item: ContentItem, idx: number) => (
          <div
            key={idx}
            className="relative flex min-h-10 h-auto flex-col justify-start overflow-hidden rounded-2xl border border-gray-800 bg-white px-6 py-6 shadow-xl md:flex-1"
          >
            <h2 className="relative z-10 mb-3 text-xl font-bold text-neutral-800">
              {item.title}
            </h2>
            <p className="relative z-10 mb-3 text-sm text-neutral-400 h-auto">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
