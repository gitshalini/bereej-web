import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    Icon: (
      <img
        src="/images/maintenance.svg"
        alt="Maintenance Icon"
        className="w-12 h-12"
      />
    ),
    name: "Website Maintenance",
    description:
      "Involves the ongoing management and updates required to keep a website functioning smoothly.",
    href: "/services/Website-Maintenance",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img
        src="/images/web-maintenance.png"
        alt="web-maintenance"
        className="absolute right-2 top-0 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
  {
    Icon: (
      <img src="/images/cloud-cog.svg" alt="Cloud Icon" className="w-12 h-12" />
    ),
    name: "Cloud Services and Migration",
    description:
      "Transitioning your business to the cloud, unlocking scalability, efficiency, and enhanced collaboration across your organization.",
    href: "/services/Cloud-Services-and-Migration",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img
        src="/images/cloud-migration-services.png"
        alt="app-development"
        className="absolute right-2 top-0 h-[400px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
  {
    Icon: (
      <img
        src="/images/monitor-smartphone.svg"
        alt="Mobile App Icon"
        className="w-12 h-12"
      />
    ),
    name: "Mobile App Development",
    description:
      "Creating captivating and user-friendly mobile applications that engage your audience and enhance your brand presence is a crucial aspect of business.",
    href: "/services/QA-Testing",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img
        src="/images/mobile-application-development.png"
        alt="app-development"
        className="absolute right-2 top-0 h-[400px] w-fit scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
  {
    Icon: (
      <img
        src="/images/globe-lock.svg"
        alt="security Icon"
        className="w-12 h-12"
      />
    ),
    name: "Cybersecurity Solutions",
    description:
      "Safeguarding your invaluable digital assets and fortifying your online against the relentless and ever-evolving global landscape of cyber threats.",
    className: "col-span-3 lg:col-span-1",
    href: "/services/Account-Security",
    cta: "Learn more",
    background: (
      <img
        src="/images/Account-Security.png"
        alt="Security"
        className="absolute right-2 top-0 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
];

export default function Services() {
  return (
    <section className="w-full px-4 py-0 sm:py-20 lg:px-4">
      <div className="w-full flex flex-col items-center justify-center text-center px-4 mb-20">
        <h2 className="text-xl md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
          How we help you
        </h2>
        <p className="max-w-xl mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          We are committed to staying at the forefront of technological
          innovation, constantly exploring emerging trends and incorporating the
          latest advancements into our solutions.
        </p>
      </div>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
