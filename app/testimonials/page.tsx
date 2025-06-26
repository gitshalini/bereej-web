import ContactCard from "@/components/layout/contactCard";
import { testimonials } from "./testimonial";
import { PagesHero } from "@/components/layout/pagesHero";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export const metadata = {
  title: "Testimonials - Bereej Tech",
};

export default function TestimonialPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 w-full px-4">
      <PagesHero
        title="Testimonials"
        description="Welcome to our Testimonials page, where we let our satisfied clients and customers speak for us."
      />
      <HoverEffect items={testimonials} />
      <ContactCard />
    </div>
  );
}
