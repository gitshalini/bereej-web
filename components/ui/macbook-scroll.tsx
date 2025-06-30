"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import Image from "next/image";

export const MacbookScroll = ({
  src,
  title,
}: {
  src?: string;
  title?: string | React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [1, 0.3],
    [1.2, isMobile ? 1 : 1.2]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [1, 0.3],
    [0.6, isMobile ? 1 : 1.2]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const rotate = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.3],
    [24.5587, 24.5587, 0]
  );
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex min-h-[90vh] shrink-0 scale-[0.35] transform flex-col items-center justify-start py-0 [perspective:1000px] sm:scale-50 md:scale-100 md:py-0"
    >
      <style>
        {`
          :root {
            --color-1: #38bdf8;
          }

          @keyframes border-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animated-border {
            position: relative;
            border-radius: 20px;
            padding: 4px;
            background: linear-gradient(
              125deg,
              #cbb9c3,
              #b47599,
              #eec37b,
              #38bdf8
            );
            background-size: 300% 300%;
            animation: border-move 6s ease infinite;
            z-index: 2;
          }

          .animated-border::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 20px;
            padding: 4px;
            background: inherit;
            -webkit-mask:
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            z-index: 1;
          }

          .radial-glow {
            background: radial-gradient(circle closest-side, var(--color-1), transparent 100%);
            position: absolute;
            inset: -60px;
            z-index: 0;
            border-radius: 9999px;
            filter: blur(40px);
            opacity: 0.7;
          }
        `}
      </style>

      {title && (
        <motion.h2
          style={{ translateY: textTransform, opacity: textOpacity }}
          className="mb-20 text-center text-3xl font-bold text-neutral-800"
        >
          {title}
        </motion.h2>
      )}

      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:1000px] h-auto">
      <motion.div
        style={{
          scaleX,
          scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="w-[50rem] relative"
      >
        {/* Radial background glow behind the image */}
        {/* <div className="radial-glow" /> */}

        {/* Animated Gradient Border */}
        <div className="animated-border rounded-[20px] relative z-10">
          <div className="relative z-20 rounded-[16px] overflow-hidden bg-[#272729]">
            <Image
              width={100}
              height={100}
              sizes={"(max-width: 1439px) 100vw, 1440px"}
              src={
                src ||
                "https://assets.aceternity.com/pro/aceternity-landing.webp"
              }
              alt="macbook"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
