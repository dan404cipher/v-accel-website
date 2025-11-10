import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { HeroSection } from "@/components/marketing/hero-section";
import { ServicesPreviewSection } from "@/components/marketing/services-preview-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { CtaSection } from "@/components/marketing/cta-section";
import { MetricsSection } from "@/components/marketing/metrics-section";

export const metadata: Metadata = {
  title: siteConfig.tagline,
  description: siteConfig.description,
};

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col gap-24 pb-24 pt-12 md:gap-32 md:pt-20">
      <HeroSection />
      <MetricsSection />
      <ServicesPreviewSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}

