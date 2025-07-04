"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      const directionValue = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty(
        "--animation-direction",
        directionValue
      );

      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);

      setStart(true);
    }
  }, [direction, speed]);
  const [start, setStart] = useState(false);

  // const getDirection = () => {
  //   if (containerRef.current) {
  //     if (direction === "left") {
  //       containerRef.current.style.setProperty(
  //         "--animation-direction",
  //         "forwards"
  //       );
  //     } else {
  //       containerRef.current.style.setProperty(
  //         "--animation-direction",
  //         "reverse"
  //       );
  //     }
  //   }
  // };
  // const getSpeed = () => {
  //   if (containerRef.current) {
  //     if (speed === "fast") {
  //       containerRef.current.style.setProperty("--animation-duration", "20s");
  //     } else if (speed === "normal") {
  //       containerRef.current.style.setProperty("--animation-duration", "40s");
  //     } else {
  //       containerRef.current.style.setProperty("--animation-duration", "80s");
  //     }
  //   }
  // };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="relative flex flex-col justify-between w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px]"
            key={item.name}
          >
            <blockquote className="flex flex-col h-full">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800">
                {item.quote}
              </span>

              <div className="relative z-20 mt-auto flex flex-col pt-6">
                <div className="flex flex-row gap-3 items-center">
                  <Image
                    src={item.image}
                    alt="client image"
                    className="w-12 h-12 object-fill border-1 p-2 rounded-lg"
                    width={48}
                    height={48}
                  />
                  <span className="text-sm leading-[1.6] font-semibold text-neutral-900">
                    {item.name}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
