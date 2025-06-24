"use client";

import { caseStudies } from "./case-studies";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import ContactCard from "@/components/layout/contactCard";
import Testimonials from "@/components/home/Testimonials";

export default function CaseStudiesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const cards = caseStudies.map(
    ({ id, title, description, image, category }, index) => (
      <Card
        key={id}
        card={{ id, title, description, image, category }}
        index={index}
      />
    )
  );

  return (
    <div
      ref={ref}
      className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 md:px-8 py-16"
    >
      <div className="mx-auto flex flex-wrap px-4 mt-10 md:mt-20">
        <div className="lg:w-1/2 w-full px-10 py-20 items-center justify-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-semibold mb-8 tracking-tight text-neutral-800"
          >
            Case Studies
          </motion.h3>
          <motion.p
            className="text-neutral-400 text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Explore the transformative journey as Tech collaboratively empowers
            clients to achieve their digital innovation goals.
          </motion.p>
        </div>
        <div className="lg:w-1/2 w-full lg:h-auto flex items-center justify-center">
          <Image
            alt="ecommerce"
            src="https://cdn.prod.website-files.com/61ba09162b87002e87715b91/6738e97fd57d477447a64554_keynote-img.webp"
            width={600}
            height={500}
          />
        </div>
      </div>
      <ContactCard />
      <Carousel items={cards} />
      <Testimonials />
    </div>
  );
}
