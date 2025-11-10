import { Metadata } from "next";

import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join a multidisciplinary product studio shipping critical software worldwide.",
};

export default function CareersPage() {
  return (
    <PlaceholderPage
      eyebrow="Careers"
      title="Build with senior operators"
      description="We hire design, engineering, and product leaders who can embed with client teams from day one. Roles launch in the new year—let us know you’re interested."
      primaryCta={{ label: "Share your profile", href: "/contact" }}
      secondaryCta={{ label: "Learn about V-Accel", href: "/about" }}
    />
  );
}

