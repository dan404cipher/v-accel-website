import { Metadata } from "next";

import { CaseStudyPage } from "@/components/about-site/CaseStudyPage";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real-world examples of the products and platforms we build for regulated industries.",
};

export default function CaseStudies() {
  return <CaseStudyPage />;
}

