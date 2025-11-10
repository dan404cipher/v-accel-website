export type ServiceCapability = {
  title: string;
  description: string;
};

export type ServiceEngagement = {
  title: string;
  items: string[];
};

export type Sector = {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  outcomes: string[];
  capabilities: ServiceCapability[];
  engagements: ServiceEngagement[];
  metrics: { value: string; label: string }[];
};

export const sectors: Sector[] = [
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
  },
  {
    slug: "enterprise-ai",
    title: "Enterprise AI",
    headline: "Pragmatic AI copilots woven into existing enterprise workflows.",
    summary:
      "We deliver AI-assisted experiences that are safe, auditable, and designed for mission-critical domains.",
    outcomes: [
      "LLM safety guardrails and governance",
      "Task completion time reductions",
      "Cross-system orchestration",
    ],
    capabilities: [
      {
        title: "AI workflow design",
        description:
          "Service design and UX for human-in-the-loop experiences with measurable ROI and governance.",
      },
      {
        title: "Model integration",
        description:
          "Integrate commercial LLMs or fine-tuned open models with observability, evaluation, and fallback logic.",
      },
      {
        title: "Operational analytics",
        description:
          "Continuous performance monitoring with dashboards, data pipelines, and red-teaming feedback loops.",
      },
    ],
    engagements: [
      {
        title: "Opportunity framing",
        items: ["AI service blueprinting", "Risk & policy analysis", "Technical feasibility sprints"],
      },
      {
        title: "Pilot delivery",
        items: ["Prototype UX", "LLM engineering", "Evaluations & guardrails"],
      },
      {
        title: "Scale enablement",
        items: ["MLOps pipelines", "Enterprise rollout", "Change management"],
      },
    ],
    metrics: [
      { value: "12x", label: "Faster decision cycles" },
      { value: "40%", label: "Manual effort reduction" },
      { value: "24/7", label: "Operational support coverage" },
    ],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((sector) => sector.slug === slug);
}

