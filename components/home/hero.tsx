"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

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
        <div className="absolute top-0 mx-auto flex max-w-7xl flex-col items-center justify-center">
          <div className="px-4 py-10 md:py-20">
            <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-semibold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
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
              className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
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
              <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                <Link href="/contact">Start a Project</Link>
              </button>
              <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                <Link href="/case-studies">Our Work</Link>
              </button>
            </motion.div>
            <p className="relative z-10 mx-auto max-w-xl py-4 text-center text-sm mt-8 font-normal text-neutral-600 dark:text-neutral-400">
              Trusted by famous brands
            </p>
            {/* Logos Slider */}
            <section className="py-2 bg-white overflow-hidden">
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

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
                delay: 1.2,
              }}
              className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
                <img
                  src="https://assets.aceternity.com/pro/aceternity-landing.webp"
                  alt="Landing page preview"
                  className="aspect-[16/9] h-auto w-full object-cover"
                  height={1000}
                  width={1000}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* <div className="w-full flex flex-row md:flex-col justify-center items-center mx-auto mb-4 mt-4 max-w-4xl text-center gap-8">
          <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold text-center text-gray-700 dark:text-neutral-700 tracking-tight">
            Transforming ideas into inspiring{" "}
            <span className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              experiences.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg px-4 text-center text-base/6 text-gray-600 dark:text-gray-200">
            Your one-stop digital software solutions company. At Bereej Tech, we
            thrive on transforming your ideas into cutting-edge digital
            realities.
          </p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 cursor-pointer">
              <Link href="/contact">Start a Project</Link>
            </button>
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 cursor-pointer">
              <Link href="/case-studies">Our Work</Link>
            </button>
          </motion.div>
        </div> */}
      </BackgroundBeamsWithCollision>
    </>
  );
}
