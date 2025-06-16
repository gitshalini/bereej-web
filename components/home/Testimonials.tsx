"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { testimonials } from "@/app/testimonials/testimonial";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section ref={ref} className="w-full px-4 py-0 sm:py-20 lg:px-4">
      <div className="w-full flex flex-col items-center justify-center text-center px-4 mb-20">
        <motion.h2
          className="pt-4 font-bold text-lg md:text-4xl text-center text-neutral-800 dark:text-neutral-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Trusted by more than 1000+ company’s around the world
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-base text-center text-neutral-600 dark:text-neutral-300 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We are more than just a business; we are a community driven by our
          passion for serving our customers with excellence. Our success is
          intertwined with the success of each individual and company we proudly
          call our customers
        </motion.p>
      </div>
      <InfiniteMovingCards
        items={testimonials.map((item) => ({
          quote: item.content,
          name: item.author,
          title: `${item.initials}`,
        }))}
        direction="left"
        speed="slow"
      />
    </section>
  );
}
