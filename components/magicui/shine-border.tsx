"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Width of the border in pixels
   * @default 1
   */
  borderWidth?: number;
  /**
   * Duration of the animation in seconds
   * @default 14
   */
  duration?: number;
  /**
   * Color of the border, can be a single color or an array of colors
   * @default "#000000"
   */
  shineColor?: string | string[];
}

/**
 * Shine Border
 *
 * An animated background border effect component with configurable properties.
 */
export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor,
  className,
  style,
  ...props
}: ShineBorderProps) {
  // Default user-centric, bright color palette with good contrast
  const defaultColors = [
    "#d23859", // bright red-pink (rgb(210,56,89))
    "#f59e0b", // amber (rgb(245,158,11))
    "#10b981", // teal (rgb(16,185,129))
    "#3b82f6", // blue (rgb(59,130,246))
    "#8b5cf6", // violet (rgb(139,92,246))
  ];

  const colors = shineColor
    ? Array.isArray(shineColor)
      ? shineColor
      : [shineColor]
    : defaultColors;

  return (
    <div
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          backgroundImage: `radial-gradient(circle at center, ${colors.join(
            ", "
          )})`,
          backgroundSize: "300% 300%",
          mask: `linear-gradient(#f2f2f2 0 0) content-box, linear-gradient(#f2f2f2 0 0)`,
          WebkitMask: `linear-gradient(#f2f2f2 0 0) content-box, linear-gradient(#f2f2f2 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "var(--border-width)",
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position] motion-safe:animate-shine",
        className
      )}
      {...props}
    />
  );
}
