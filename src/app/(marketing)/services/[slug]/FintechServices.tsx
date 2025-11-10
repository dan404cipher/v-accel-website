"use client";

import "@/styles/fintech/theme.css";
import "@/styles/fintech/fintech.css";

import { Hero } from "@/components/fintech/Hero";
import { ProblemSection } from "@/components/fintech/ProblemSection";
import { HowWeHelp } from "@/components/fintech/HowWeHelp";
import { CoreSolutions } from "@/components/fintech/CoreSolutions";
import { CaseStudies } from "@/components/fintech/CaseStudies";
import { ComplianceSecurity } from "@/components/fintech/ComplianceSecurity";
import { UseCases } from "@/components/fintech/UseCases";
import { KeyFeatures } from "@/components/fintech/KeyFeatures";
import { TechStack } from "@/components/fintech/TechStack";
import { Testimonials } from "@/components/fintech/Testimonials";
import { Stats } from "@/components/fintech/Stats";
import { Resources } from "@/components/fintech/Resources";
import { CTA } from "@/components/fintech/CTA";
import { ScrollToTop } from "@/components/fintech/ScrollToTop";
import { Toaster } from "@/components/fintech/ui/sonner";
import { usePageTheme } from "@/hooks/use-page-theme";

export function FintechExperience() {
  usePageTheme("fintech-theme");

  return (
    <div className="fintech-theme relative flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <HowWeHelp />
        <CoreSolutions />
        <CaseStudies />
        <ComplianceSecurity />
        <UseCases />
        <KeyFeatures />
        <TechStack />
        <Testimonials />
        <Stats />
        <Resources />
        <CTA />
      </main>
      <ScrollToTop />
      <Toaster position="top-right" />
    </div>
  );
}
