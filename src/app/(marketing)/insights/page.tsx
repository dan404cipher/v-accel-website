import { Metadata } from "next";

import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Essays and briefs for product, technology, and operations leaders shipping mission-critical software.",
};

export default function InsightsPage() {
  return (
    <PlaceholderPage
      eyebrow="Insights"
      title="Insights for operators and builders"
      description="We’re documenting how regulated teams are modernizing delivery, integrating AI safely, and scaling product operations. Expect monthly briefings, not marketing fluff."
      primaryCta={{ label: "Subscribe for updates", href: "/contact" }}
      secondaryCta={{ label: "View service lines", href: "/services" }}
    />
  );
}

