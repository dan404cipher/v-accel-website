import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { sectors } from "@/config/services";

export function ServicesPreviewSection() {
  return (
    <Container as="section" className="space-y-12">
      <SectionHeader
        eyebrow="Services"
        title="Full lifecycle delivery for critical software"
        description="From venture-backed scale-ups to enterprise transformation teams, we architect product experiences that are safe, performant, and loved by stakeholders."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {sectors.map((sector) => (
          <Card key={sector.slug} className="flex flex-col border border-border/80 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle>{sector.title}</CardTitle>
              <CardDescription>{sector.summary}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {sector.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="secondary">
                <Link href={`/services/${sector.slug}`}>Explore {sector.title}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex flex-col gap-3 rounded-2xl border border-dashed bg-background p-6 text-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-foreground">Need an executive-ready service overview?</p>
          <p className="text-muted-foreground">
            Request our latest capabilities deck tailored to your industry and maturity stage.
          </p>
        </div>
        <Button asChild>
          <Link href="/contact">Request capabilities deck</Link>
        </Button>
      </div>
    </Container>
  );
}

