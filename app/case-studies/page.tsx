import { Metadata } from "next";
import CaseStudiesPage from "./casestudy";

export const metadata: Metadata = {
  title: "Case Studies - Bereej Tech",
  description:
    "Explore how Bereej Tech empowers digital innovation for clients.",
};

export default function CaseStudiesRoutePage() {
  return <CaseStudiesPage />;
}
