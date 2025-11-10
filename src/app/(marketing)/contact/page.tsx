import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with the V-Accel team to explore solutions, engagements, and partnerships.",
};

const contactChannels = [
  {
    title: "New engagements",
    description: "Talk with our engagement leads about your roadmap, constraints, and desired outcomes.",
    action: { label: "Schedule a strategy call", href: "mailto:hello@v-accel.com" },
  },
  {
    title: "Partnerships & alliances",
    description: "We collaborate with infrastructure providers, data platforms, and advisories.",
    action: { label: "Start a partnership conversation", href: "mailto:partnerships@v-accel.com" },
  },
  {
    title: "Media & press",
    description: "Request commentary or briefings on regulated product delivery and enterprise AI.",
    action: { label: "Press inquiries", href: "mailto:press@v-accel.com" },
  },
] as const;

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s plan your next release"
        description="Tell us about your product, team, and timeline. We’ll assemble the right pod and return with a clear point of view within two business days."
      />
      <Container as="section" className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
        <Card className="space-y-6 border border-border/80 bg-card/80 p-8 backdrop-blur">
          <h3 className="text-xl font-semibold tracking-tight">Working session agenda</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>• Define product and compliance objectives</li>
            <li>• Align on success metrics and constraints</li>
            <li>• Identify integration partners and data flows</li>
            <li>• Outline the first 90-day delivery plan</li>
          </ul>
        </Card>
        <div className="space-y-4">
          {contactChannels.map((channel) => (
            <Card key={channel.title} className="space-y-3 border border-border/80 bg-card/80 p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {channel.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{channel.description}</p>
              </div>
              <Button asChild variant="secondary">
                <a href={channel.action.href}>{channel.action.label}</a>
              </Button>
            </Card>
          ))}
          <Card className="space-y-3 border border-dashed p-6 text-sm text-muted-foreground">
            <p className="font-semibold uppercase tracking-[0.18em] text-muted-foreground">HQ</p>
            <p>{siteConfig.contact.address}</p>
            <p>
              {siteConfig.contact.email} · {siteConfig.contact.phone}
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}

