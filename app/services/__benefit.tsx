import { ShineBorder } from "@/components/magicui/shine-border";
import { services } from "./services";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BenefitCards({ params }: PageProps) {
  const { id } = await params;
  const service = services.find((serve) => serve.id === id);
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4 text-center py-16">
        {service?.Benefits}
      </h2>
      <ul className="flex flex-wrap w-full gap-4 list-none relative overflow-hidden">
        {service?.Benefitdata.map((item, i) => (
          <li
            key={i}
            className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)]"
          >
            <ShineBorder
              shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              className="rounded-2xl h-full"
            />
            <div className="flex flex-col justify-end min-h-32 h-auto rounded-2xl border border-gray-800 bg-white px-6 py-6 shadow-xl">
              <h3 className="text-xl text-neutral-800 font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-md text-neutral-400">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
