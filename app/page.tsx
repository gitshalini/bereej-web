import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import CaseStudiesPage from "@/components/home/CaseStudiesPreview";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/contact";
import Card from "@/components/home/card";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8 md:py-40 bg-neutral-50">
        <Hero />
      </div>
      <section className="mx-auto w-full flex flex-col max-w-6xl bg-white">
        <Services />
        <Card />
        <CaseStudiesPage />
        <Testimonials />
        <Contact />
      </section>
    </>
  );
}
