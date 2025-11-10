import { Metadata } from "next";

import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = {
  title: "Security",
  description: "Overview of V-Accel’s security, privacy, and compliance posture.",
};

export default function SecurityPage() {
  return (
    <PlaceholderPage
      eyebrow="Security"
      title="Designed for regulated environments"
      description="We maintain SOC 2-aligned controls, rigorous vendor due diligence, and secure development practices. Detailed documentation is under review."
      primaryCta={{ label: "Request security brief", href: "/contact" }}
      secondaryCta={{ label: "View fintech services", href: "/services/fintech" }}
    />
  );
}

