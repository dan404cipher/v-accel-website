import { Metadata } from "next";

import { PlaceholderPage } from "@/components/marketing/placeholder-page";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the team building resilient software for regulated industries.",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="About"
      title="Operators, technologists, and designers"
      description="Our leadership and delivery teams bring experience from fintechs, scale-ups, and enterprise transformations. We’re finalizing our public team profiles."
      primaryCta={{ label: "Connect with us", href: "/contact" }}
      secondaryCta={{ label: "See open roles", href: "/careers" }}
    />
  );
}

