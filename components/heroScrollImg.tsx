import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden w-full max-w-screen-lg h-auto mx-auto px-4 sm:px-6">
      <MacbookScroll />
    </div>
  );
}
