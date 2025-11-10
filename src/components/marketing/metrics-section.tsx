import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { sectors } from "@/config/services";

const aggregateMetrics = [
  { value: "30+", label: "Senior strategists, designers, and engineers" },
  { value: "18", label: "Countries served across North America, EMEA, and APAC" },
  { value: "94%", label: "Engagements renewed beyond year one" },
  { value: "$2.4B", label: "Client revenue processed through products we built" },
] as const;

export function MetricsSection() {
  return (
    <Container as="section" className="space-y-12">
      <SectionHeader
        eyebrow="Operating Model"
        title="Outcome-driven teams embedded with yours"
        description="Expertise forged in regulated industries. We orchestrate product, design, and engineering as one operating unit focused on measurable outcomes."
      />
      <div className="grid gap-6 rounded-3xl border bg-card/60 p-8 backdrop-blur md:grid-cols-2 md:gap-8">
        {aggregateMetrics.map((metric) => (
          <div key={metric.label} className="space-y-2 rounded-2xl border border-border/60 bg-background p-6">
            <p className="text-3xl font-semibold tracking-tight md:text-4xl">{metric.value}</p>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
      <div className="rounded-3xl border border-dashed p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Focus sectors</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {sectors.map((sector) => (
            <div key={sector.slug} className="rounded-2xl border bg-background p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {sector.title}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{sector.headline}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

