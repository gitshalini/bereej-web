"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
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
    offset: ["start end", "end start"],
  });

  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined" && window.innerWidth < 768) {
  //     setIsMobile(true);
  //   }
  // }, []);

  // const scaleX = useTransform(
  //   scrollYProgress,
  //   [1, 0.3],
  //   [1, isMobile ? 1 : 1.2]
  // );
  // const scaleY = useTransform(
  //   scrollYProgress,
  //   [1, 0.3],
  //   [1, isMobile ? 1 : 1.2]
  // );
  const translate = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const rawRotate = useTransform(scrollYProgress, [0, 0.4], [25, 0]);
  const rotate = useSpring(rawRotate, {
    damping: 40,
    stiffness: 200,
  });

  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex lg:min-h-[60vh] shrink-0 transform flex-col items-center justify-start [perspective:1000px] scale-90 sm:scale-95 md:scale-100"
    >
      <style>
        {`
          :root {
            --color-1: #60a5fa;
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
              #60a5fa,
              #a78bfa,
              #f472b6,
              #facc15
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
            opacity: 0.5;
          }
        `}
      </style>

      {title && (
        <motion.h2
          style={{ translateY: textTransform, opacity: textOpacity }}
          className="mb-10 text-center text-2xl sm:text-3xl font-bold text-neutral-800"
        >
          {title}
        </motion.h2>
      )}

      <Lid src={src} rotate={rotate} translate={translate} />
    </div>
  );
};

export const Lid = ({
  rotate,
  translate,
  src,
}: {
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:1000px] h-auto -top-5 w-full px-4">
      <motion.div
        style={{
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="relative w-full max-w-[100vw] sm:max-w-[30rem] md:max-w-[40rem] lg:max-w-[50rem] mx-auto"
      >
        {/* Animated Gradient Border */}
        <div className="animated-border rounded-[20px] relative z-10">
          <div className="relative z-20 rounded-[16px] overflow-hidden bg-[#272729]">
            <Image
              width={100}
              height={100}
              sizes="100vw"
              src={
                src ||
                "https://assets.aceternity.com/pro/aceternity-landing.webp"
              }
              alt="macbook"
              className="w-full h-auto object-cover object-center"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
