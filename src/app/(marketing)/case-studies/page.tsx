import { Metadata } from "next";

import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "A curated look at product transformations where V-Accel partnered with fintech, edtech, and enterprise leaders.",
};

export default function CaseStudiesPage() {
  return (
    <PlaceholderPage
      eyebrow="Case Studies"
      title="Proof from the field"
      description="We’re compiling detailed narratives showcasing how we design, ship, and scale critical software. Subscribe to receive the first release."
      primaryCta={{ label: "Join the release list", href: "/insights" }}
      secondaryCta={{ label: "Talk to our team", href: "/contact" }}
    />
  );
}

