import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";

const heroHighlights = [
  { label: "Regulated industry expertise", value: "Fintech • EdTech • Enterprise AI" },
  { label: "Time-to-value", value: "Launch in as little as 12 weeks" },
  { label: "Scale-ready delivery", value: "SRE, QA automation, and GTM baked in" },
] as const;

export function HeroSection() {
  return (
    <Container as="section" className="relative overflow-hidden rounded-3xl border bg-card py-16 shadow-sm">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] md:items-center md:gap-16">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full border bg-background px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Full-stack product studio
          </span>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              We build resilient software for the teams shipping critical products.
            </h1>
            <p className="text-lg leading-7 text-muted-foreground md:text-xl md:leading-8">
              V-Accel pairs senior designers, engineers, and product operators to deliver web, mobile,
              and AI-powered platforms that navigate regulation, scale gracefully, and move metrics.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Book a strategy call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-dashed">
              <Link href="/case-studies">View case studies</Link>
            </Button>
          </div>
        </div>

        <aside className="space-y-6 rounded-2xl border bg-background/60 p-8 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Engagement Snapshot
          </p>
          <dl className="space-y-5">
            {heroHighlights.map((item) => (
              <div key={item.label} className="space-y-1">
                <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="text-base font-medium text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="rounded-xl border border-dashed p-4 text-sm text-muted-foreground">
            <p>
              Need something bespoke? Email{" "}
              <Link href={`mailto:${siteConfig.contact.email}`} className="font-medium text-foreground underline">
                {siteConfig.contact.email}
              </Link>{" "}
              to start a conversation.
            </p>
          </div>
        </aside>
      </div>
    </Container>
  );
}

