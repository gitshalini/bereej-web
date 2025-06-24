import { services } from "../services";
import { notFound } from "next/navigation";
import ServiceContent from "@/components/layout/ServiceContent";

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await params; // await here
  const service = services.find((s) => s.id === awaitedParams.id);
  return {
    title: service
      ? `${service.title} - Bereej Technologies`
      : "Service Not Found",
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await params;
  const service = services.find((s) => s.id === awaitedParams.id);

  if (!service) {
    notFound();
  }

  return <ServiceContent service={service} />;
}
