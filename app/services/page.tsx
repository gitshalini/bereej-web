import { Metadata } from "next";
import { services } from "./services";
import { PagesHero } from "@/components/layout/pagesHero";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

export const metadata: Metadata = {
  title: "Services - Bereej Tech",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full flex flex-col max-w-6xl bg-white px-4 py-20 md:px-8 md:py-40">
      <PagesHero
        title="Services"
        description="We believe in a collaborative approach, working closely with our clients to understand their goals and target audience."
      />

      <BentoGrid>
        {services.map((services, idx) => (
          <BentoCard key={idx} {...services} />
        ))}
      </BentoGrid>
    </div>
  );
}
