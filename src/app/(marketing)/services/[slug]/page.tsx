import { Metadata } from "next";
import { notFound } from "next/navigation";
import clsx from "clsx";

import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";

import { servicePageComponents } from "./serviceComponents";
import { getServiceBySlug, services } from "./serviceData";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const CustomServicePage = servicePageComponents[service.slug];

  if (CustomServicePage) {
    return <CustomServicePage />;
  }

  const theme = service.theme ?? {};
  const wrapperClass = clsx("space-y-12", theme.wrapperClass);
  const bulletClass = clsx(
    "mt-1 h-1.5 w-1.5 rounded-full",
    theme.bulletClass ?? "bg-primary",
  );
  const accentTextClass = clsx(
    "text-sm font-semibold uppercase tracking-[0.18em]",
    theme.accentTextClass ?? "text-primary",
  );
  const metricValueClass = clsx(
    "text-3xl font-semibold tracking-tight",
    theme.metricValueClass ?? "text-primary",
  );
  const metricsCardClass = clsx(
    "space-y-6 border p-8",
    theme.metricCardClass ??
      "border-primary/50 bg-gradient-to-br from-primary/10 via-background to-background",
  );

  return (
    <div className={wrapperClass}>
      <SectionHeader
        eyebrow="Service Playbook"
        title={service.title}
        description={service.summary}
      />
      <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-8">
          <Card className="space-y-6 border border-border/80 bg-card/80 p-8 backdrop-blur">
            <h3 className="text-xl font-semibold tracking-tight">Why teams choose us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className={bulletClass} aria-hidden />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="space-y-6 border border-border/80 bg-card/80 p-8 backdrop-blur">
            <h3 className="text-xl font-semibold tracking-tight">What we deliver</h3>
            <div className="grid gap-5 md:grid-cols-2">
              {service.capabilities.map((capability) => (
                <div key={capability.title} className="rounded-xl border bg-background p-5">
                  <p className="font-medium text-foreground">{capability.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="space-y-6">
          <Card className="space-y-4 border border-border/80 bg-card/80 p-8 backdrop-blur">
            <h3 className="text-xl font-semibold tracking-tight">Engagement models</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              {service.engagements.map((engagement) => (
                <div key={engagement.title} className="rounded-xl border bg-background p-5">
                  <p className={accentTextClass}>{engagement.title}</p>
                  <ul className="mt-3 space-y-1.5">
                    {engagement.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
          <Card className={metricsCardClass}>
            <h3 className="text-xl font-semibold tracking-tight text-foreground">Delivery metrics</h3>
            <div className="space-y-3">
              {service.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className={metricValueClass}>{metric.value}</p>
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
