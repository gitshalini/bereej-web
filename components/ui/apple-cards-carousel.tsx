"use client";
import React, { useEffect, useState, createContext, JSX } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  id: string;
  title: string;
  category: string;
  // content: React.ReactNode;
  description: string;
  image: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full pt-40">
        <div className="flex flex-row items-center justify-between px-5">
          <h2 className="text-4xl text-neutral-800 font-bold">
            Latest Case Studies
          </h2>

          <div className="flex gap-2">
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white-100 disabled:opacity-50 cursor-pointer"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
            >
              <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
            </button>
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white-100 disabled:opacity-50 cursor-pointer"
              onClick={scrollRight}
              disabled={!canScrollRight}
            >
              <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>

        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-16"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl" // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[5%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  return (
    <motion.div
      layoutId={layout ? `card-${card.title}` : undefined}
      className="relative z-10 flex w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-white min-h-[30rem] h-full md:w-96"
    >
      <Link href={`/case-studies/${card.id}`}>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative h-60">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className=" inset-0 z-10 object-cover"
          />
        </div>
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left text-sm font-medium text-neutral-600 md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.h2
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left text-xl font-semibold [text-wrap:balance] text-neutral-800 md:text-3xl"
          >
            {card.title}
          </motion.h2>
        </div>
      </Link>
    </motion.div>
  );
};
