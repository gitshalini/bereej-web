import Image from "next/image";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import { PagesHero } from "@/components/layout/pagesHero";
import ContactCard from "@/components/layout/contactCard";
import Testimonials from "@/components/home/Testimonials";

export default function ChoosePage() {
  return (
    <>
      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 md:px-8 pt-16">
        <PagesHero
          title="Why choose us"
          description="We provide a wide range of IT services, from strategic planning
                and cybersecurity to cloud computing and custom software
                development."
        />
      </div>
      <Image
        src="/images/choose.webp"
        alt="team image"
        width={100}
        height={100}
        sizes={"(max-width: 1439px) 100vw, 1440px"}
        className="w-full object-cover object-center max-h-[40rem] h-auto rounded-xl"
      />
      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 md:px-8 py-16">
        <section className="w-full py-12 bg-background">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
            {/* Image */}
            <div className="w-full">
              <h2 className="text-4xl font-semibold mb-4">
                We are more than just a remarkable company
              </h2>
              <p className="text-muted-foreground">
                We are architects of innovation, trailblazers of technological
                advancement, and partners in your success. As a dynamic and
                forward-thinking organization, we are dedicated to reshaping
                industries and empowering businesses to navigate the digital age
                with confidence.
              </p>
            </div>
            {/* Text */}
            <div className="px-12">
              <div
                className="inline-flex py-4 gap-4"
                style={{ borderBottom: "1px solid #ddd" }}
              >
                <h2 className="text-6xl font-semibold mb-4 text-[#D23859]">
                  5+
                </h2>
                <p className="text-muted-foreground">
                  Years of experience in software development
                </p>
              </div>
              <div className="inline-flex py-4 gap-4">
                <h2 className="text-6xl font-semibold mb-4 text-[#D23859]">
                  30+
                </h2>
                <p className="text-muted-foreground">
                  Amassed a portfolio of numerous successfully completed
                  projects
                </p>
              </div>
            </div>
          </div>
        </section>
        <CaseStudiesPreview />
        <Testimonials />
        <ContactCard />
      </div>
    </>
  );
}
