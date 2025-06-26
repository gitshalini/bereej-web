"use client";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { services } from "@/app/services/services";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section className="w-full px-4 py-16" ref={ref}>
      <div className="w-full flex flex-col items-center justify-center text-center px-4 mb-16">
        <motion.h2
          className="text-md md:text-4xl font-bold tracking-tight text-neutral-800"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          How we help you
        </motion.h2>
        <motion.p
          className="max-w-xl mt-4 text-sm text-neutral-600"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          We are committed to staying at the forefront of technological
          innovation, constantly exploring emerging trends and incorporating the
          latest advancements into our solutions.
        </motion.p>
      </div>

      <BentoGrid>
        {services.slice(0, 6).map((services, idx) => (
          <BentoCard key={idx} {...services} index={idx} />
        ))}
      </BentoGrid>
    </section>
  );
}
