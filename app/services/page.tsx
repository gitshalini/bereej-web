import { Metadata } from "next";
import { services } from "./services";
import { PagesHero } from "@/components/layout/pagesHero";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";
import ContactCard from "@/components/layout/contactCard";

export const metadata: Metadata = {
  title: "Services - Bereej Tech",
};

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 md:px-8 pt-16">
        <PagesHero
          title="Services"
          description="We believe in a collaborative approach, working closely with our clients to understand their goals and target audience."
        />
      </div>
      <Image
        src="/images/services.jpg"
        alt="team image"
        width={100}
        height={100}
        sizes={"(max-width: 1439px) 100vw, 1440px"}
        className="w-full object-cover object-center max-h-[40rem] h-auto rounded-xl"
      />
      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 md:px-8 py-16">
        <section className="w-full pb-16 mb-16 text-center">
          <div className="container">
            <p className="text-3xl font-medium text-neutral-800">
              At Bereej, we empower businesses to accelerate revenue growth by
              optimizing every touchpoint of the customer journey. From CRM and
              sales to marketing automation and customer engagement, our
              capabilities help you build lasting relationships, drive
              conversions, and scale efficiently.
              <br />
              <span className="text-neutral-400">
                Explore our capabilities below, and click through to learn more
                about each solution.
              </span>
            </p>
          </div>
        </section>
        <div className="mb-16">
          <BentoGrid>
            {services.map((services, idx) => (
              <BentoCard key={idx} {...services} />
            ))}
          </BentoGrid>
        </div>
        <ContactCard />
      </div>
    </>
  );
}
