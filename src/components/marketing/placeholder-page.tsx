import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";

type PlaceholderPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PlaceholderPageProps) {
  return (
    <Container as="section" className="flex min-h-[480px] flex-col items-center justify-center gap-10 text-center">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} align="center" />
      <div className="flex flex-col gap-4 sm:flex-row">
        {primaryCta ? (
          <Button asChild size="lg">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
        ) : null}
        {secondaryCta ? (
          <Button asChild size="lg" variant="outline">
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        ) : null}
      </div>
    </Container>
  );
}

