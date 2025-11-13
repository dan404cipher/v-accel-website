import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { HomePage } from "@/components/parent/HomePage";

export const metadata: Metadata = {
  title: siteConfig.tagline,
  description: siteConfig.description,
};

export default function MarketingHomePage() {
  return <HomePage />;
}

