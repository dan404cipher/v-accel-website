import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container as="div" className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-base font-semibold tracking-tight">
            {siteConfig.name}
          </Link>
          <MainNav />
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden items-center gap-2 md:flex">
            {siteConfig.navigation.secondary.map((item) => (
              <Button key={item.href} variant={item.title === "Contact" ? "default" : "ghost"} asChild>
                <Link href={item.href}>{item.title}</Link>
              </Button>
            ))}
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

