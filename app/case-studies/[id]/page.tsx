import { caseStudies } from "../case-studies";
import Image from "next/image";
import { PagesHero } from "@/components/layout/pagesHero";
import { notFound } from "next/navigation";
import Testimonials from "@/components/home/Testimonials";
import ContactCard from "@/components/layout/contactCard";

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const caseStudy = caseStudies.find((cs) => cs.id === id);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found - Bereej Technologies",
      description: "We couldn't find the case study you're looking for.",
    };
  }

  return {
    title: `${caseStudy.title} - Bereej Technologies`,
    description: caseStudy.description,
  };
}

interface CaseStudyPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({
    id: cs.id,
  }));
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  const { id } = await params;
  const caseStudy = caseStudies.find((cs) => cs.id === id);

  if (!caseStudy) {
    notFound();
  }

  const solutions = [];
  for (let i = 1; i <= 5; i++) {
    const titleKey = `solutitle${i}` as keyof typeof caseStudy;
    const paraKey = `solupara${i}` as keyof typeof caseStudy;
    if (caseStudy[titleKey] && caseStudy[paraKey]) {
      solutions.push({
        title: caseStudy[titleKey],
        para: caseStudy[paraKey],
      });
    }
  }
  const gridImages = [
    caseStudy.gridImage1,
    caseStudy.gridImage2,
    caseStudy.gridImage3,
    caseStudy.gridImage4,
  ].filter(Boolean);

  return (
    <div className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 md:px-8 py-16">
      <PagesHero title={caseStudy.title} description={caseStudy.description} />
      <section className="px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          <div className="flex flex-wrap gap-4 md:w-full">
            {gridImages.map((img, i) => (
              <div
                key={i}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden w-[calc(50%-0.5rem)] ${
                  i % 2 === 1 ? "sm:translate-y-6" : ""
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="py-16 space-y-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {caseStudy.Background}
          </h2>
          <p className="text-base text-gray-600">{caseStudy.bgpara1}</p>
          <p className="text-base text-gray-600">{caseStudy.bgpara2}</p>
        </div>
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-4 text-center">
            {caseStudy.Solutions}
          </h2>
          <ul className="flex flex-wrap w-full gap-4 list-none py-16">
            {solutions.map(
              (item: { title: string; para: string }, i: number) => (
                <li
                  key={i}
                  className="flex flex-col justify-end min-h-32 h-auto rounded-2xl border border-gray-800 bg-white px-6 py-6 shadow-xl
                  w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)]"
                >
                  <h3 className="text-xl text-neutral-800 font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-md text-neutral-400">{item.para}</p>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 py-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">{caseStudy.Result}</h2>
            <p className="text-base text-gray-600">{caseStudy.respara}</p>
          </div>
          <div className="relative">
            <Image
              src={caseStudy.resImage}
              alt="Image 1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      <Testimonials />
      <ContactCard />
    </div>
  );
}
