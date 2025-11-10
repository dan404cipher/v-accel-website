import { Metadata } from "next";

import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = {
  title: "Process",
  description: "Our operating model for delivering regulated, resilient software products.",
};

export default function ProcessPage() {
  return (
    <PlaceholderPage
      eyebrow="Process"
      title="A playbook for high-trust delivery"
      description="From discovery to ongoing stewardship, our process is designed to compress risk while accelerating value. We’ll publish the detailed playbook shortly."
      primaryCta={{ label: "Request an executive overview", href: "/contact" }}
      secondaryCta={{ label: "See service capabilities", href: "/services" }}
    />
  );
}

