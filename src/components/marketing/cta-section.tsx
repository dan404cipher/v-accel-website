import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function CtaSection() {
  return (
    <Container
      as="section"
      className="overflow-hidden rounded-3xl border border-primary/40 bg-primary text-primary-foreground"
    >
      <div className="grid gap-8 p-10 md:grid-cols-[minmax(0,1fr)_minmax(0,260px)] md:items-center md:px-14 md:py-16">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
            Let&apos;s build together
          </p>
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to accelerate your next release?
          </h3>
          <p className="text-base text-primary-foreground/80">
            Bring us the toughest combination of compliance, scale, and experience challenges. We&apos;ll assemble a
            senior pod and get your roadmap production-ready.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <Button asChild size="lg" variant="secondary" className="text-primary">
            <Link href="/contact">Plan an engagement</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground">
            <Link href="/process">See how we work</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}

