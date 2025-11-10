"use client";

import { Hero } from "@/components/edtech/Hero";
import { ProblemNarrative } from "@/components/edtech/ProblemNarrative";
import { HowItWorks } from "@/components/edtech/HowItWorks";
import { CoreSolutions } from "@/components/edtech/CoreSolutions";
import { CaseStudy } from "@/components/edtech/CaseStudy";
import { ComplianceAccessibility } from "@/components/edtech/ComplianceAccessibility";
import { Testimonials } from "@/components/edtech/Testimonials";
import { Stats } from "@/components/edtech/Stats";
import { Resources } from "@/components/edtech/Resources";
import { CTA } from "@/components/edtech/CTA";

export default function EdtechPage() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <ProblemNarrative />
        <HowItWorks />
        <CoreSolutions />
        <CaseStudy />
        <ComplianceAccessibility />
        <Testimonials />
        <Stats />
        <Resources />
        <CTA />
      </main>
    </div>
  );
}
