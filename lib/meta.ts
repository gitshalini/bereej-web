import type { Metadata } from "next";

interface MetaProps {
  title: string;
}

export function generateMeta({ title }: MetaProps): Metadata {
  return {
    title,
    description: `${title} page description`, // optional
    generator: "Webflow", // You had this in a meta tag
    icons: {
      icon: "/favicon.png",
      apple: "/favicon.png",
    },
    openGraph: {
      title,
    },
    twitter: {
      title,
    },
  };
}
