import { Metadata } from "next";

import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = {
  title: "Press",
  description: "Media resources, press releases, and analyst coverage for V-Accel.",
};

export default function PressPage() {
  return (
    <PlaceholderPage
      eyebrow="Press"
      title="Media resources coming soon"
      description="We’re preparing our media kit, founder bios, and analyst materials. Reach out for early access or to coordinate interviews."
      primaryCta={{ label: "Contact press team", href: "mailto:press@v-accel.com" }}
      secondaryCta={{ label: "Explore our services", href: "/services/edtech" }}
    />
  );
}

