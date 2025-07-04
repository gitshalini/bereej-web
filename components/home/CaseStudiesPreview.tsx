"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { Tabs } from "../ui/tabs";
import Image from "next/image";

type DummyContentProps = {
  image: string;
};

export default function CaseStudiesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const tabs = [
    {
      title: "IT Consultancy",
      value: "IT Consultancy",
      bg: "bg-sky-100 text-sky-800 cursor-pointer font-semibold",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-500 via-sky-400 to-blue-500">
          <p className="mb-2.5">Streamlining Workflows</p>
          <DummyContent image="/images/unsplash.jpeg" />
        </div>
      ),
    },
    {
      title: "Development/Design",
      value: "Development/Design",
      bg: "bg-pink-200 text-pink-800 font-semibold cursor-pointer",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-400">
          <p className="mb-2.5">
            Enhancing Market Reach with E-commerce Integration
          </p>
          <DummyContent image="/images/6640eccaa8b910da67fbd967__luke-chesser-JKUTrJ4vK00-unsplash-p-800.jpeg" />
        </div>
      ),
    },
    {
      title: "IT Development",
      value: "IT Development",
      bg: "bg-orange-100 text-orange-800 font-semibold cursor-pointer",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-amber-500 via-orange-400 to-rose-300">
          <p className="mb-2.5">Implementation of Billing Charge in SAP IS-U</p>
          <DummyContent image="/images/6640eccaa8b910da67fbd94c_pexels-cottonbro-studio-5082579-p-800.jpeg" />
        </div>
      ),
    },
    {
      title: "IT Design",
      value: "IT Design",
      bg: "bg-teal-100 text-teal-800 font-semibold cursor-pointer",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400">
          <p className="mb-2.5">Onson - marketing agency website</p>
          <DummyContent image="/images/6640eccaa8b910da67fbd9a1__pexels-amina-filkins-5424635-p-800.jpeg" />
        </div>
      ),
    },
  ];

  return (
    <section ref={ref} className="w-full px-4 py-16">
      <div className="w-full flex flex-col items-center justify-center text-center px-4 mb-16">
        <motion.h2
          className="text-xl md:text-4xl font-bold tracking-tight text-neutral-800"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Our latest projects
        </motion.h2>
      </div>

      <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full items-start justify-start">
        <Tabs tabs={tabs} />
      </div>

      <div className="text-center mt-16 sm:mt-24 md:mt-32">
        <button className="w-60 h-16 text-lg transform rounded-lg bg-[#0071eb] hover:bg-[#0062cc] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5">
          <Link href="/case-studies">View All Case Studies</Link>
        </button>
      </div>
    </section>
  );
}

const DummyContent: React.FC<DummyContentProps> = ({ image }) => {
  return (
    <Image
      src={image}
      alt="dummy image"
      width={1000}
      height={1000}
      className="w-full h-auto object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px] mx-auto rounded-2xl"
    />
  );
};
