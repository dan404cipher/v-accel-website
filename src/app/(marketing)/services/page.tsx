import Link from "next/link";
import { Metadata } from "next";

import { sectors } from "@/config/services";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover how V-Accel partners with fintech, edtech, and healthcare teams to deliver mission-critical software.",
};

export default function ServicesOverviewPage() {
  return (
    <Container as="section" className="space-y-12">
      <SectionHeader
        eyebrow="Services"
        title="End-to-end delivery across the product lifecycle"
        description="Each engagement combines research, design, and engineering leaders to ship measurable outcomes. Select a focus area to see detailed capabilities, sample engagement models, and proof of impact."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {sectors.map((sector) => (
          <Card
            key={sector.slug}
            className="flex flex-col border border-border/80 bg-card/80 backdrop-blur"
          >
            <CardHeader>
              <CardTitle>{sector.title}</CardTitle>
              <CardDescription>{sector.headline}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                {sector.capabilities.slice(0, 2).map((capability) => (
                  <div key={capability.title}>
                    <p className="font-medium text-foreground">
                      {capability.title}
                    </p>
                    <p>{capability.description}</p>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link href={`/services/${sector.slug}`}>View {sector.title} services</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-3xl border border-dashed bg-muted/40 p-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Custom engagement?
          </p>
          <p className="max-w-3xl text-base text-muted-foreground">
            We frequently assemble hybrid pods that span these sectors. If
            you&apos;re launching a cross-discipline initiative, we&apos;ll
            craft a custom playbook and align on KPIs with your leadership team.
          </p>
        </div>
        <Button asChild variant="outline" className="mt-6">
          <Link href={`mailto:${siteConfig.contact.email}`}>
            Schedule a solutioning workshop
          </Link>
        </Button>
      </div>
    </Container>
  );
}
