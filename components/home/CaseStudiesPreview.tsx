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
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-r from-purple-200 via-sky-100 to-pink-50">
          <p className="mb-2.5">Streamlining Worfklows</p>
          <DummyContent image="/images/unsplash.jpeg" />
        </div>
      ),
    },
    {
      title: "Development/Design",
      value: "Development/Design",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-r from-purple-200 via-sky-100 to-pink-50">
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
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-r from-purple-200 via-sky-100 to-pink-50">
          <p className="mb-2.5">Implementation of Biling Charge in SAP IS-U</p>
          <DummyContent image="/images/6640eccaa8b910da67fbd94c_pexels-cottonbro-studio-5082579-p-800.jpeg" />
        </div>
      ),
    },
    {
      title: "IT Design",
      value: "IT Design",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-r from-purple-200 via-sky-100 to-pink-50">
          <p className="mb-2.5">Onson - marketing agency website</p>
          <DummyContent
            image={
              "/images/6640eccaa8b910da67fbd9a1__pexels-amina-filkins-5424635-p-800.jpeg"
            }
          />
        </div>
      ),
    },
  ];

  return (
    <section ref={ref} className="w-full px-4 py-0 sm:py-16 lg:px-4">
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

      {/* <FocusCards
        cards={
          caseStudies
            .slice(0, 3)
            .map(({ id, title, description, image, category }) => ({
              id,
              title,
              description,
              image,
              category,
            })) as Pick<
            (typeof caseStudies)[number],
            "id" | "title" | "description" | "image" | "category"
          >[]
        }
      /> */}
      <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full  items-start justify-start">
        <Tabs tabs={tabs} />
      </div>

      <div className="text-center mt-16 sm:mt-24 md:mt-32">
        <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800">
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
      width="1000"
      height="1000"
      className="w-full h-auto object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px] mx-auto"
    />
  );
};
