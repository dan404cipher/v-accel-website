export type ServiceCapability = {
  title: string;
  description: string;
};

export type ServiceEngagement = {
  title: string;
  items: string[];
};

export type ServiceMetric = {
  value: string;
  label: string;
};

export type ServiceTheme = {
  wrapperClass?: string;
  bulletClass?: string;
  accentTextClass?: string;
  metricValueClass?: string;
  metricCardClass?: string;
};

export type ServiceConfigEntry = {
  slug: "fintech" | "edtech" | "healthcare";
  title: string;
  headline: string;
  summary: string;
  outcomes: string[];
  capabilities: ServiceCapability[];
  engagements: ServiceEngagement[];
  metrics: ServiceMetric[];
  theme: ServiceTheme;
};

export const services: ServiceConfigEntry[] = [
  {
    slug: "fintech",
    title: "Fintech Platforms",
    headline: "High-trust platforms for regulated financial services.",
    summary:
      "We design and ship digital banking, lending, and compliance platforms that keep you ahead of evolving regulations while elevating customer experience.",
    outcomes: [
      "SOC 2 and PCI-ready architectures",
      "Accelerated compliance approvals",
      "Faster account opening and onboarding flows",
    ],
    capabilities: [
      {
        title: "Regulatory-grade experiences",
        description:
          "Design secure onboarding, KYC, and transaction monitoring flows that minimize drop-off without compromising compliance.",
      },
      {
        title: "Core banking integrations",
        description:
          "Integrate with providers like Synapse, Treasury Prime, Unit, and custom cores with robust audit trails.",
      },
      {
        title: "Risk & analytics dashboards",
        description:
          "Operational views for finance, compliance, and risk teams with real-time observability and alerting.",
      },
    ],
    engagements: [
      {
        title: "Strategic discovery",
        items: ["Compliance research", "Service blueprinting", "Integration mapping"],
      },
      {
        title: "Product delivery",
        items: ["Design systems", "Web & mobile engineering", "Automated QA suites"],
      },
      {
        title: "Managed evolution",
        items: ["SRE readiness", "Release governance", "Growth experiments"],
      },
    ],
    metrics: [
      { value: "50M+", label: "Transactions safeguarded" },
      { value: "6", label: "Regulatory regimes supported" },
      { value: "3x", label: "Faster release cadence" },
    ],
    theme: {
      wrapperClass: "bg-slate-950 text-slate-100",
      bulletClass: "bg-emerald-400",
      accentTextClass: "text-emerald-400",
      metricValueClass: "text-emerald-400",
      metricCardClass:
        "border border-emerald-400/60 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-950",
    },
  },
  {
    slug: "edtech",
    title: "EdTech & Learning",
    headline: "Learning experiences that scale from classrooms to global campuses.",
    summary:
      "We partner with EdTech operators to deliver accessible, inclusive, data-rich learning journeys across web and mobile.",
    outcomes: [
      "Inclusive, ADA-compliant user interfaces",
      "Personalized learning pathways",
      "Unified analytics across cohorts",
    ],
    capabilities: [
      {
        title: "Adaptive learning platforms",
        description:
          "Modular content delivery and mastery tracking with real-time feedback loops for learners and instructors.",
      },
      {
        title: "Education data fabric",
        description:
          "Integrate LMS, SIS, and assessment tooling into cohesive data products and reporting pipelines.",
      },
      {
        title: "Studio-grade authoring tools",
        description:
          "High-performance authoring experiences for instructional designers, aligned with accessibility standards.",
      },
    ],
    engagements: [
      {
        title: "Learning strategy",
        items: ["Curriculum mapping", "User research", "Accessibility audits"],
      },
      {
        title: "Experience delivery",
        items: ["Design systems", "Platform engineering", "Mobile apps"],
      },
      {
        title: "Lifecycle optimization",
        items: ["Learning analytics", "Retention experiments", "Educator enablement"],
      },
    ],
    metrics: [
      { value: "4.9", label: "Average learner satisfaction" },
      { value: "220K", label: "Active learners per month" },
      { value: "98%", label: "Accessibility compliance pass rate" },
    ],
    theme: {
      bulletClass: "bg-sky-400",
      accentTextClass: "text-sky-500",
      metricValueClass: "text-sky-500",
      metricCardClass:
        "border border-sky-500/40 bg-gradient-to-br from-sky-500/10 via-background to-background",
    },
  },
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    headline: "Connected care delivery for clinicians, operations, and patients.",
    summary:
      "We build HIPAA-aligned products that orchestrate clinical workflows, unlock population health insights, and create engaging patient experiences.",
    outcomes: [
      "HIPAA and HITRUST-ready digital platforms",
      "Cross-team visibility for clinicians, operations, and leadership",
      "Personalized patient engagement and remote care journeys",
    ],
    capabilities: [
      {
        title: "Virtual & hybrid care platforms",
        description:
          "Design secure intake, triage, and telehealth experiences that integrate seamlessly with existing EHR ecosystems.",
      },
      {
        title: "Clinical workflow automation",
        description:
          "Streamline care coordination, task management, and handoffs with automation and intelligent routing.",
      },
      {
        title: "Patient engagement & adherence",
        description:
          "Build companion apps, education hubs, and outcome tracking tools that keep patients on protocol.",
      },
    ],
    engagements: [
      {
        title: "Discovery & compliance",
        items: ["Regulatory and privacy readiness", "Service blueprinting", "Integration mapping"],
      },
      {
        title: "Product delivery",
        items: ["Design systems", "Web & mobile engineering", "Quality & accessibility automation"],
      },
      {
        title: "Operational evolution",
        items: ["Data ops & analytics", "Change management", "Continuous optimization"],
      },
    ],
    metrics: [
      { value: "10x", label: "Increase in care team visibility" },
      { value: "65%", label: "Patient engagement uplift" },
      { value: "50%", label: "Faster regulatory readiness" },
    ],
    theme: {
      bulletClass: "bg-rose-400",
      accentTextClass: "text-rose-500",
      metricValueClass: "text-rose-500",
      metricCardClass:
        "border border-rose-500/40 bg-gradient-to-br from-rose-500/10 via-background to-background",
    },
  },
];

export type ServiceSlug = (typeof services)[number]["slug"];

export function getServiceBySlug(slug: string): ServiceConfigEntry | undefined {
  return services.find((service) => service.slug === slug);
}

