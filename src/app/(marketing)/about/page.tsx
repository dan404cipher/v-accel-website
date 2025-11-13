import { Metadata } from "next";

import { AboutPage } from "@/components/parent/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the team building resilient software for regulated industries.",
};

export default function About() {
  return <AboutPage />;
}

