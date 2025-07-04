"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, ArrowRight, ThumbsUp } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { PagesHero } from "@/components/layout/pagesHero";
import Image from "next/image";

type Address = {
  country: string;
  city: string;
  areaTitle: string;
  area: string;
  email: string;
  phone: string;
  mapQuery: string; // For Google Maps search
};

const addresses: Address[] = [
  {
    country: "India",
    city: "Pune",
    areaTitle: "area",
    area: "Kothrud",
    email: "dorpely@bereej.com",
    phone: "+91 9922 783337",
    mapQuery:
      "https://www.google.com/maps/place/Landmark+Commercial+Complex,+Sarvatra+Society,+Anand+Nagar,+Kothrud,+Pune,+Maharashtra+411038,+India/@18.5092186,73.8109375,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bfbc1bc1d4df:0x43ba1366686ff1c0!8m2!3d18.5092135!4d73.8135124!16s%2Fg%2F12hnnk7p4?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    country: "Malaysia",
    city: "Kuala Lampur",
    areaTitle: "Street",
    area: "Jalan 112",
    email: "doreply@bereej.com",
    phone: "+60 11 3665 3580",
    mapQuery:
      "https://www.google.com/maps/place/Jalan+112h,+Pantai+Dalam,+59200+Kuala+Lumpur,+Wilayah+Persekutuan+Kuala+Lumpur,+Malaysia/@3.1100608,101.6593033,17z/data=!4m6!3m5!1s0x31cc4a2ad78c672d:0x2485336b8d1535e!8m2!3d3.1100608!4d101.6618782!16s%2Fg%2F1tff5389?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D",
  },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().optional(),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://0uamtrqsvb.execute-api.ap-south-1.amazonaws.com/prod/clouder/mail/sendEmailCloudshot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
          }),
        }
      );
      if (res.ok) {
        toast.success("Message sent successfully! We’ll get back to you soon.");
        form.reset();
        setIsSubmitted(true);
      } else {
        const errorText = await res.text();
        toast.error(
          errorText || "Something went wrong. Please try again later."
        );
      }
    } catch (err: unknown) {
      const error = err as Error;
      toast.error(
        error?.message || "Something went wrong. Please try again later."
      );
    }

    setIsSubmitting(false);
  }

  return (
    <>
      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 md:px-8 pt-16">
        <PagesHero title=" Get a Quote" />
      </div>

      <Image
        src="/images/Home_Bg.webp"
        alt="team image"
        width={100}
        height={100}
        sizes={"(max-width: 1439px) 100vw, 1440px"}
        className="w-full object-cover object-center max-h-[40rem] h-auto rounded-xl"
      />
      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:py-20">
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              {`Let's discuss your project`}
            </h2>
            <p className="text-muted-foreground mb-8 text-sm sm:text-base">
              Our dedicated team of IT experts is committed to understanding
              your unique requirements and crafting tailored solutions that
              align with your business objectives.
            </p>
          </div>

          {/* Contact Form */}
          {isSubmitted ? (
            <div className="text-center p-6 bg-white border shadow-sm text-neutral-800 flex items-center rounded-xl">
              <div className="w-full flex flex-col items-center gap-4">
                <ThumbsUp className="w-20 h-20 text-yellow-500 " />

                <h2 className="text-2xl font-bold mt-4">
                  Thank you for reaching out!{" "}
                </h2>
                <p className="text-neutral-400 text-lg">
                  We’ll get back to you soon.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-card shadow-sm rounded-lg p-4 sm:p-6 md:p-8 border border-border">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your First name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your.email@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Subject of your message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please tell us about your project and requirements"
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button
                    disabled={isSubmitting}
                    className="cursor-pointer w-full h-16 text-lg transform rounded-lg bg-[#0071eb] hover:bg-[#0062cc] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <p className="flex flex-row items-center justify-center w-full">
                        Send Message <ArrowRight className="ml-2 h-4 w-4" />
                      </p>
                    )}
                  </button>
                </form>
              </Form>
            </div>
          )}
        </div>
      </div>

      <section
        className="h-64 sm:h-80 md:h-96 flex items-center"
        style={{
          backgroundImage: `linear-gradient(125deg, #b47599, #38bdf8), url("/images/map.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundBlendMode: "overlay", // optional
        }}
      >
        <motion.div
          className=""
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h3
            className="max-w-xl text-lg sm:text-5xl md:text-6xl font-bold tracking-tight text-background mb-6 animate-float"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our offices all around the world
          </motion.h3>
        </motion.div>
      </section>

      <div className="mx-auto w-full flex flex-col max-w-7xl bg-white px-4 md:px-8 py-16">
        <div className="p-10 w-full text-center">
          <div className="space-y-6">
            {addresses.map((address, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row border-b pb-8"
              >
                <div className="w-full md:w-1/3 mb-2 md:mb-0">
                  <p className="text-gray-800 font-medium text-2xl">
                    {address.country}
                  </p>
                  <a
                    href={address.mapQuery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Location
                  </a>
                </div>

                <div className="w-full md:w-1/3 mb-2 md:mb-0">
                  <p className="text-gray-700">City: {address.city}</p>
                  <p className="text-gray-500">
                    {address.areaTitle}: {address.area}
                  </p>
                </div>

                <div className="w-full md:w-1/3 space-y-2">
                  <div className="flex items-center text-gray-700 justify-center md:justify-start">
                    <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{address.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-500 justify-center md:justify-start">
                    <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{address.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
