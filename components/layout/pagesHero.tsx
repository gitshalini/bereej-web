"use client";

import { motion } from "motion/react";
import React from "react";

export function PagesHero({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <h1
        className="max-w-5xl text-center text-4xl sm:text-6xl font-bold mb-6 text-neutral-800"
        style={{ lineHeight: "4.5rem" }}
      >
        {title}
      </h1>
      <div className="text-xl text-neutral-600 mb-8 max-w-4xl text-center">
        {description}
      </div>
    </motion.div>
  );
}
