import { services } from "../services";
import Image from "next/image";
import { notFound } from "next/navigation";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import { PagesHero } from "@/components/layout/pagesHero";

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const service = services.find((serve) => serve.id === id);

  if (!service) {
    return {
      title: "Services Not Found - Bereej Technologies",
    };
  }

  return {
    title: `${service.title} - Bereej Technologies`,
  };
}

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return services.map((serve) => ({
    id: serve.id,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = services.find((serve) => serve.id === id);

  if (!service) {
    notFound();
  }

  return (
    <div className="mx-auto w-full flex flex-col max-w-6xl bg-white px-4 pt-20 md:px-8 md:pt-40">
      <PagesHero title={service.title} description={service.description} />
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold mb-2">{service.Service}</h2>
          <p className="text-base text-gray-600">{service.servicedesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="relative w-full h-64">
            <Image
              src="/images/sw-result 1.webp"
              alt="Result"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {service.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">{service.Benefits}</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {service.Benefitdata.map((item, i) => (
              <li key={i}>
                <strong>{item.title}</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CaseStudiesPreview />
    </div>
  );
}
