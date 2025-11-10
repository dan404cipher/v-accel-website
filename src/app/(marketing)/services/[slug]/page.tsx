import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { getSectorBySlug, sectors } from "@/config/services";

type ServiceDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const sector = getSectorBySlug(params.slug);

  if (!sector) {
    return {};
  }

  return {
    title: sector.title,
    description: sector.summary,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const sector = getSectorBySlug(params.slug);

  if (!sector) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <SectionHeader
        eyebrow="Service Playbook"
        title={sector.title}
        description={sector.summary}
      />
      <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-8">
          <Card className="space-y-6 border border-border/80 bg-card/80 p-8 backdrop-blur">
            <h3 className="text-xl font-semibold tracking-tight">Why teams choose us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {sector.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="space-y-6 border border-border/80 bg-card/80 p-8 backdrop-blur">
            <h3 className="text-xl font-semibold tracking-tight">What we deliver</h3>
            <div className="grid gap-5 md:grid-cols-2">
              {sector.capabilities.map((capability) => (
                <div key={capability.title} className="rounded-xl border bg-background p-5">
                  <p className="font-medium text-foreground">{capability.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{capability.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="space-y-6">
          <Card className="space-y-4 border border-border/80 bg-card/80 p-8 backdrop-blur">
            <h3 className="text-xl font-semibold tracking-tight">Engagement models</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              {sector.engagements.map((engagement) => (
                <div key={engagement.title} className="rounded-xl border bg-background p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {engagement.title}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {engagement.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
          <Card className="space-y-6 border border-primary/50 bg-gradient-to-br from-primary/10 via-background to-background p-8">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">Delivery metrics</h3>
            <div className="space-y-3">
              {sector.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-3xl font-semibold tracking-tight text-primary">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
