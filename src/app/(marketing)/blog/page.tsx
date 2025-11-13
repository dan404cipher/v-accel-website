import { Metadata } from "next";

import { BlogPage } from "@/components/about-site/BlogPage";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on building compliant, scalable software for regulated industries.",
};

export default function Blog() {
  return <BlogPage />;
}


