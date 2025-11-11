"use client";

import { Hero } from "@/components/healthcare/Hero";
import { ProblemSection } from "@/components/healthcare/ProblemSection";
import { HowWeHelp } from "@/components/healthcare/HowWeHelp";
import { CoreSolutions } from "@/components/healthcare/CoreSolutions";
import { ResultSnapshot } from "@/components/healthcare/ResultSnapshot";
import { Testimonials } from "@/components/healthcare/Testimonials";
import { Stats } from "@/components/healthcare/Stats";
import { ComplianceSecurity } from "@/components/healthcare/ComplianceSecurity";
import { ResourcesInsights } from "@/components/healthcare/ResourcesInsights";
import { CTA } from "@/components/healthcare/CTA";

export function HealthcareExperience() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <ProblemSection />
        <HowWeHelp />
        <CoreSolutions />
        <ResultSnapshot />
        <ComplianceSecurity />
        <Testimonials />
        <Stats />
        <ResourcesInsights />
        <CTA />
      </main>
    </div>
  );
}

