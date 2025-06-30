import { PagesHero } from "@/components/layout/pagesHero";
import AboutCards from "@/components/layout/aboutCard";
import Image from "next/image";
import VerticalTabs from "@/components/layout/verticalTabs";
import { services } from "../services/services";
import Link from "next/link";
import ContactCard from "@/components/layout/contactCard";
import { ShineBorder } from "@/components/magicui/shine-border";

const teamMembers = [
  {
    name: "Sudeep Khire",
    role: "Founder and Director",
    image: "/images/sudeep1.png",
    linkedin: "https://www.linkedin.com/in/sudeep-khire/",
    bgColor: "bg-[#7b9efa]",
  },
  {
    name: "Advait Joshi",
    role: "Solution Architect",
    image: "/images/Advait.png",
    bgColor: "bg-[#b8afd7]",
  },
  {
    name: "Rakesh Roshan",
    role: "Head of Technology",
    image: "/images/dummy-man.png",
    linkedin: "https://www.linkedin.com/in/rakesh-roshan-3327994/",
    bgColor: "bg-[#fd8686]",
  },
  {
    name: "Kuldeep Walujkar",
    role: "Head  of Business Development",
    image: "/images/Kuldeep.png",
    linkedin: "https://www.linkedin.com/in/kuldeep-walujkar-2357ab20/",
    bgColor: "bg-blue-600",
  },
];
const content = [
  {
    title: "Flexible & Understanding",
    desc: "We understand that life is full of twists and turns, and sometimes plans need to be adjusted. That's why we take a dynamic and accommodating approach to provide you with tailored solutions.",
  },
  {
    title: "Growth & Development",
    desc: "We understand that growth takes many forms – from personal development to organizational advancement. Our mission is to be your partner in this transformative journey, providing you with the resources, tools, and guidance you need to thrive.",
  },
  {
    title: "Open & Transparent",
    desc: "We understand that transparency is not just a buzzword; it's a guiding principle that influences everything we do. From our communication with clients, partners, and team members to our business practices and decision-making, we strive to be forthright and candid.",
  },
];

const tabs = [
  {
    title: "Experience excellence with our expert team",
    content: (
      <p>
        {`We take pride in our exceptional team of experts who bring a wealth of
        experience to every project. With years of industry knowledge and a
        passion for innovation, our team is dedicated to delivering top-notch
        solutions that exceed your expectations.`}
      </p>
    ),
  },
  {
    title: "Customized solutions for your unique needs",
    content: (
      <p>
        {`One size does not fit all, and we understand that your needs are unique.
        That's why we offer fully customized solutions tailored to your specific
        requirements. From the initial consultation to the final implementation,
        we collaborate closely with you to ensure the perfect fit for your
        goals.`}
      </p>
    ),
  },
  {
    title: "Transparent communication and collaboration",
    content: (
      <p>
        {`We take pride in our exceptional team of experts who bring a wealth of
        experience to every project. With years of industry knowledge and a
        passion for innovation, our team is dedicated to delivering top-notch
        solutions that exceed your expectations.`}
      </p>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 md:px-8 py-16">
        <PagesHero
          title="About US"
          description="We help online business grow Together."
        ></PagesHero>
        <AboutCards content={content} />
        <div className="w-full ">
          <h3 className="text-2xl font-bold mb-6 text-center py-16 px-4">
            Why we are better
          </h3>
          <VerticalTabs tabs={tabs} />
        </div>
      </div>
      <Image
        src="/images/about.avif"
        alt="team image"
        width={100}
        height={100}
        sizes={"(max-width: 1439px) 100vw, 1440px"}
        className="w-full object-cover"
      />
      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white py-16">
        <ul className="flex flex-wrap w-full gap-4 list-none pt-16">
          {services.map((item, idx) => (
            <li
              key={idx}
              className="relative overflow-hidden flex flex-col justify-end h-auto rounded-2xl bg-gray-100 px-6 py-6
            w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.666rem)]"
            >
              <ShineBorder
                shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="rounded-2xl h-full"
              />
              <Link href={`/services/${item.id}`}>
                {item.Icon && (
                  <Image
                    width={100}
                    height={100}
                    src={item.Icon}
                    alt={item.title}
                    className="w-12 h-12"
                  />
                )}
                <h2 className="relative z-10 mt-3 text-xl font-bold text-neutral-800">
                  {item.title}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col py-16">
          <h3 className="text-2xl text-neutral-800 font-medium uppercase text-center w-full mb-4">
            LEADERSHIP TEAM
          </h3>
          <h2 className="text-6xl text-neutral-800 font-bold mb-8 text-center w-full">
            Meet our People.
          </h2>
          <section className="w-full pt-16">
            <div className="grid gap-4 grid-cols-4 auto-cols-fr grid-rows-[auto] mb-4 pt-[26px]">
              {teamMembers.map((member, index) => (
                <Link key={index} href={"/our-values"}>
                  <div
                    className={`${member.bgColor} rounded-xl aspect-[308/295] mb-6 relative overflow-visible`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="300px"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-lg">{member.role}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
        <section className="w-full flex flex-col py-16">
          <div className="w-full flex bg-gray-200 rounded-xl p-6">
            <div className="w-1/2 flex flex-col justify-around px-6">
              <h2 className="w-full text-5xl text-neutral-800 font-semibold">
                Help us
                <br />
                <span className="text-indigo-800">make a difference</span>.
              </h2>
              <Link
                href="/careers"
                className="w-45 h-auto transform rounded-lg bg-blue-800 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
              >
                Explore Careers
              </Link>
            </div>
            <div className="w-1/2">
              <Image
                width={100}
                height={100}
                src="https://cdn.prod.website-files.com/6703ab04ad9a0080c460594f/67405c35db4f75e91933225d_pablo-merchan-montes-D_1s1abegJc-unsplash%201.avif"
                alt=""
                className="w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        <ContactCard />
      </div>
    </>
  );
}
