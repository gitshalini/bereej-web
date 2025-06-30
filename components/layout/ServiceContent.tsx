"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import { PagesHero } from "@/components/layout/pagesHero";
import { ShineBorder } from "../magicui/shine-border";

export interface ServiceType {
  id: string;
  title?: string;
  Icon?: string;
  className?: string;
  description?: string;
  cta?: string;
  Service?: string;
  servicedesc?: string;
  features: string[];
  Benefits?: string;
  Benefitdata: { title: string; description: string }[];
  background?: string;
}

export default function ServiceContent({ service }: { service: ServiceType }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <div
      ref={ref}
      className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 md:px-8 py-16"
    >
      <PagesHero title={service.title} description={service.description} />

      <Image
        src="/images/sw-result 1.webp"
        alt="team image"
        width={100}
        height={100}
        sizes="(max-width: 1439px) 100vw, 1440px"
        className="w-full object-cover object-center max-h-[40rem] h-auto rounded-xl"
      />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12 space-y-4">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {service.Service}
          </motion.h2>
          <p className="text-base text-gray-600">{service.servicedesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative w-full h-64">
            <Image
              src="/images/sw-result 1.webp"
              alt="Result"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {service.features.map((item: string, i: number) => (
                <li className="text-xl font-semibold" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <motion.h2
            className="text-4xl font-bold mb-4 text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {service.Benefits}
          </motion.h2>

          <ul className="flex flex-wrap w-full gap-4 list-none">
            {service.Benefitdata.map(
              (item: { title: string; description: string }, i: number) => (
                <li
                  key={i}
                  className="flex flex-col justify-start min-h-32 h-auto rounded-2xl px-6 py-6 bg-gray-50
                  w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)] relative overflow-hidden"
                >
                  <ShineBorder
                    shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    className="rounded-2xl h-full"
                  />
                  <h3 className="text-xl text-neutral-800 font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-md text-neutral-400">{item.description}</p>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      <CaseStudiesPreview />
    </div>
  );
}
