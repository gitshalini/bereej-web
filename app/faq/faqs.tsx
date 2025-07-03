"use client";

import { useState } from "react";
import { PagesHero } from "@/components/layout/pagesHero";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import ContactCard from "@/components/layout/contactCard";

const faqData = [
  {
    question: "How do I get started with your consulting and services?",
    answer:
      "To begin, please reach out to us via our contact form or phone number on our website. We'll schedule an initial consultation to discuss your specific requirements and create a tailored strategy for your business.",
  },
  {
    question:
      "Can you provide examples of successful projects or case studies?",
    answer:
      "Yes, we can provide references and case studies upon request. Feel free to contact us for more information.",
  },
  {
    question: "What types of Custom Software Development do you offer?",
    answer:
      "We provide custom software development services tailored to your specific needs. Whether you need a web application, mobile app, or enterprise software, we can design, develop, and maintain the software solution that aligns with your business goals.",
  },
  {
    question: "What kind of Cybersecurity Solutions do you provide?",
    answer:
      "Our Cybersecurity Solutions encompass a range of services, including risk assessments, security audits, threat detection and response, and employee training. We help protect your data, systems, and networks from cyber threats and breaches.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 md:px-8 pt-16">
        <PagesHero title="Frequently asked questions" />
      </div>
      <Image
        src="/images/faq.webp"
        alt="team image"
        width={100}
        height={100}
        sizes={"(max-width: 1439px) 100vw, 1440px"}
        className="w-full object-cover object-center max-h-[40rem] h-auto rounded-xl"
      />

      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 md:px-8 py-16">
        <h2 className="text-3xl md:text-5xl font-bold my-20 text-center">
          The most common questions
        </h2>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 border rounded-lg">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer"
            >
              <span className="font-medium">{item.question}</span>
              <span>
                {openIndex === index ? (
                  <Minus className="ml-2 h-4 w-4 font-bold" />
                ) : (
                  <Plus className="ml-2 h-4 w-4 font-bold" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 border-t bg-gray-50">
                {item.answer}
              </div>
            )}
          </div>
        ))}
        <ContactCard />
      </div>
    </>
  );
}
