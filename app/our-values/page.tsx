import { PagesHero } from "@/components/layout/pagesHero";
import AboutCards from "@/components/layout/aboutCard";
import Image from "next/image";
import VerticalTabs from "@/components/layout/verticalTabs";
import ContactCard from "@/components/layout/contactCard";
import { Carousel } from "@/components/ui/carousel";

const content = [
  {
    title: "Development",
    desc: "We strive to support and nurture our employees. Professional growth and learning are our priorities",
  },
  {
    title: "Innovation",
    desc: "You'll work on exciting projects and leverage cutting-edge evolving technologies",
  },
  {
    title: "Team Spirit",
    desc: "Our team is like a family. We believe in teamwork and mutual support",
  },
];

const slideData = [
  {
    title: "Pune, India",
    src: "https://cdn.prod.website-files.com/6703ab04ad9a0080c460594f/6784b0553453d674ed6a4e40_Pune-p-500.avif",
  },
  {
    title: "Kuala Lampur, Malaysia",
    src: "/images/Kuala_Lampur.jpg",
  },
  {
    title: "Neon Nights",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const tabs = [
  {
    title: "People",
    content: (
      <p>
        {`We believe that a positive and energetic work environment is the key to fostering professional growth and strengthening working relationships. Our team thrives in an atmosphere where fun meets productivity, allowing us to exceed expectations for our clients and ourselves.`}
      </p>
    ),
  },
  {
    title: "Accountability",
    content: (
      <p>
        {`We take personal responsibility for every decision and action we undertake. By maintaining constant communication with clients from start to finish, we minimize risks and ensure that projects are met with success. Transparency and reliability are the cornerstones of our approach.`}
      </p>
    ),
  },
  {
    title: "Passion",
    content: (
      <p>
        {`Our passion lies in understanding your business needs and leveraging the power of technology to create better outcomes. We are driven by the belief that every challenge has a digital solution that can lead to a more innovative and connected world.`}
      </p>
    ),
  },
  {
    title: "Success",
    content: (
      <p>
        {`Success is not just a destination, but a continuous journey. We deliver positive results by reflecting on past experiences and collaborating with our clients to foster positive changes. Together, we blaze a trail toward a future where businesses thrive.`}
      </p>
    ),
  },

  {
    title: "Integrity",
    content: (
      <p>
        {`We respect and value diversity in all its forms. By celebrating different cultures, backgrounds, experiences, lifestyles, and ideas, we create a rich tapestry of innovation and creativity. Integrity guides us as we build relationships founded on trust and mutual respect.`}
      </p>
    ),
  },
];

export default function ValuesPage() {
  return (
    <>
      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 md:px-8 py-16">
        <PagesHero
          title="Our Values"
          description="Our values are rooted in integrity, innovation, and client-centricity, driving us to deliver exceptional results while fostering long-lasting partnerships"
        ></PagesHero>
        <div className="w-full mb-20">
          <AboutCards content={content} />
        </div>
        <VerticalTabs tabs={tabs} />
      </div>
      <Image
        src="/images/image1.webp"
        alt="team image"
        width={100}
        height={100}
        sizes={"(max-width: 1439px) 100vw, 1440px"}
        className="w-full h-[600] object-cover rounded-xl py-16"
      />
      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white py-16">
        <section className="w-full flex flex-col">
          <div className="w-full flex mb-16">
            <div className="w-1/2 flex flex-col justify-between px-6 py-20">
              <div className="w-full flex flex-col gap-8">
                <p className="text-xl uppercase font-normal text-neutral-600">
                  Our Offices
                </p>
                <h2 className="w-full text-5xl text-neutral-800 font-semibold">
                  Connecting Innovation
                  <br />
                  <span>Worldwide</span>.
                </h2>
              </div>
              <p className="text-xl text-neutral-600 font-normal">
                Our offices in the India, and Malaysia.
              </p>
            </div>
            <div className="w-1/2">
              <div className="relative overflow-hidden w-full h-full py-20">
                <Carousel slides={slideData} />
              </div>
            </div>
          </div>
        </section>

        <ContactCard />
      </div>
    </>
  );
}
