import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { services } from "@/app/services/services";

export default function Services() {
  return (
    <section className="w-full px-4 py-0 sm:py-20 lg:px-4">
      <div className="w-full flex flex-col items-center justify-center text-center px-4 mb-20">
        <h2 className="text-xl md:text-4xl font-bold tracking-tight text-neutral-800">
          How we help you
        </h2>
        <p className="max-w-xl mt-4 text-sm text-neutral-600">
          We are committed to staying at the forefront of technological
          innovation, constantly exploring emerging trends and incorporating the
          latest advancements into our solutions.
        </p>
      </div>
      <BentoGrid>
        {services.slice(0, 10).map((services, idx) => (
          <BentoCard key={idx} {...services} />
        ))}
      </BentoGrid>
    </section>
  );
}
