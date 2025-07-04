"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { career } from "./career";
import ContactCard from "@/components/layout/contactCard";

export default function Career() {
  const openingsRef = useRef<HTMLDivElement | null>(null);

  const scrollToOpenings = () => {
    openingsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="w-full flex flex-col md:flex-row gap-8 py-16 px-4 sm:px-6 lg:px-8">
        {/* Left text and button section */}
        <div className="w-full md:w-1/3 flex flex-col justify-center p-4 md:p-6">
          <div className="mb-6">
            <p className="text-4xl sm:text-5xl md:text-6xl text-neutral-800 font-semibold leading-tight">
              Your Skills.
            </p>
            <p className="text-4xl sm:text-5xl md:text-6xl text-neutral-400 font-semibold leading-tight">
              Our Stage.
            </p>
          </div>
          <p className="text-lg sm:text-xl text-neutral-800 font-normal mb-8 md:mb-12">
            Join the Bereej team today!
          </p>
          <button
            onClick={scrollToOpenings}
            className="w-full md:w-auto h-auto rounded-lg bg-blue-800 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 cursor-pointer"
          >
            Explore Careers
          </button>
        </div>

        {/* Right image section */}
        <div className="w-full md:w-2/3">
          <Image
            src="/images/career.avif"
            width={1000}
            height={600}
            sizes="(max-width: 479px) 95vw, (max-width: 767px) 97vw, (max-width: 991px) 60vw, (max-width: 1439px) 64vw, 842.671875px"
            alt="career image"
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        </div>
      </div>
      <p className="text-4xl text-neutral-800 font-semibold w-full py-20 text-center">
        At Bereej, Discover a rewarding career journey with us. We offer
        exciting opportunities, a collaborative environment, and the chance to
        make a meaningful impact in the world of IT Consulting.
        <span className="text-neutral-400">
          {" "}
          We celebrate creativity and curiosity, building a team where every
          idea is valued. Join us as we push boundaries together.
        </span>
      </p>
      <section ref={openingsRef} className="py-12 bg-white w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-800 via-purple-700 to-indigo-900">
            Currently available positions at Tech
          </h2>
          <div className="space-y-6 max-w-7xl mx-auto">
            {career.map((job, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 flex flex-col md:flex-row justify-between items-center shadow"
              >
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold">{job.title}</h3>
                  <p className="text-gray-600">{job.location} | Full-time</p>
                </div>
                <Link
                  key={job.id}
                  href={`/careers/${job.id}`}
                  className="w-auto transform rounded-lg bg-[#0071eb] hover:bg-[#0062cc] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Apply
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCard />
    </section>
  );
}
