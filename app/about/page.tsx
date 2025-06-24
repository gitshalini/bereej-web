import { PagesHero } from "@/components/layout/pagesHero";
import AboutCards from "./aboutCard";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 pt-20 md:px-8 md:pt-40">
        <PagesHero
          title="About US"
          description="We help online business grow Together."
        ></PagesHero>
        <AboutCards />
      </div>
      <Image
        src="/images/about.avif"
        alt="team image"
        width={100}
        height={100}
        sizes={"(max-width: 1439px) 100vw, 1440px"}
        className="w-full object-fill"
      />
      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 pt-20 md:px-8 md:pt-40">
        <div className="flex flex-col">
          <h3 className="text-2xl text-neutral-800 font-medium uppercase text-center w-full mb-4">
            LEADERSHIP TEAM
          </h3>
          <h2 className="text-6xl text-neutral-800 font-bold mb-8 text-center w-full">
            Meet our People.
          </h2>
        </div>
      </div>
    </>
  );
}
