"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { MacbookScrollDemo } from "../heroScrollImg";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const logos = [
    "/images/logo1.png",
    "/images/logo2.png",
    "/images/logo3.png",
    "/images/logo4.png",
    "/images/logo5.png",
    "/images/logo6.png",
    "/images/logo7.png",
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className="absolute top-0 mx-auto flex max-w-7xl flex-col items-center justify-center h-full">
          <div className="px-4 py-10 md:py-20">
            <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-semibold text-slate-700 md:text-4xl lg:text-7xl">
              {"Transforming ideas into inspiring experiences"
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="mr-2 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
            </h1>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.8,
              }}
              className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600"
            >
              Your one-stop digital software solutions company. At Bereej Tech,
              we thrive on transforming your ideas into cutting-edge digital
              realities.
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 1,
              }}
              className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800">
                <Link href="/contact">Start a Project</Link>
              </button>
              <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100">
                <Link href="/case-studies">Our Work</Link>
              </button>
            </motion.div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <MacbookScrollDemo />

      {/* Logos Slider */}
      <section className="py-2 bg-white overflow-hidden">
        <p className="relative z-10 mx-auto max-w-xl py-8 text-center text-lg mt-24 font-semibold text-neutral-600 uppercase">
          Trusted by famous brands
        </p>

        <div className="relative w-full">
          <div className="flex w-[200%] animate-scroll">
            <div className="flex gap-8 w-1/2 justify-around items-center">
              {logos.map((logo, index) => (
                <Image
                  key={`logo1-${index}`}
                  src={logo}
                  alt={`Logo ${index}`}
                  width={80}
                  height={50}
                  className="object-contain"
                />
              ))}
            </div>
            <div className="flex gap-8 w-1/2 justify-around items-center">
              {logos.map((logo, index) => (
                <Image
                  key={`logo2-${index}`}
                  src={logo}
                  alt={`Logo ${index}`}
                  width={80}
                  height={50}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
