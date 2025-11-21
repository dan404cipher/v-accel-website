"use client";

import { memo, useCallback, useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo1x from "@assets/vaccel-logo-134.png";
import logo2x from "@assets/vaccel-logo-268.png";

export const ParentNavigation = memo(function ParentNavigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const navItemsContainerRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number } | null>(null);

  const desktopNavLinks = useMemo(
    () => [
      { label: "Home", href: "/", widthClass: "w-[100px]" },
      { label: "Product", href: "/#leadaccel", widthClass: "w-[110px]" },
    ],
    [],
  );

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileResourcesOpen(false);
    setIsServicesMenuOpen(false);
    setIsResourcesMenuOpen(false);
  }, []);

  const toggleMobileResources = useCallback(() => {
    setIsMobileResourcesOpen((prev) => {
      if (!prev) {
        // If opening, close the other dropdown
        setIsMobileServicesOpen(false);
      }
      return !prev;
    });
  }, []);

  const toggleMobileServices = useCallback(() => {
    setIsMobileServicesOpen((prev) => {
      if (!prev) {
        // If opening, close the other dropdown
        setIsMobileResourcesOpen(false);
      }
      return !prev;
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateHash = () => {
      setCurrentHash(window.location.hash || "");
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setCurrentHash(window.location.hash || "");
  }, [pathname]);

  const isActiveLink = useCallback(
    (href: string) => {
      if (href === "/") {
        return pathname === "/" && (currentHash === "" || currentHash === "#top");
      }
      if (href.startsWith("/#")) {
        const hashValue = href.split("#")[1];
        if (!hashValue) return pathname === href;
        return pathname === "/" && currentHash === `#${hashValue}`;
      }
      return pathname === href;
    },
    [pathname, currentHash],
  );

  const isServicesActive = pathname.startsWith("/services/");
  const isResourcesActive =
    pathname === "/blog" || pathname === "/case-studies";

  const activeNavKey = useMemo(() => {
    if (isServicesActive) return "service";
    if (isResourcesActive) return "resource";
    if (isActiveLink("/about")) return "about";
    if (isActiveLink("/#leadaccel")) return "product";
    if (isActiveLink("/")) return "home";
    return null;
  }, [isActiveLink, isResourcesActive, isServicesActive]);

  const updateIndicatorPosition = useCallback(() => {
    if (!activeNavKey) {
      setIndicatorStyle(null);
      return;
    }
    const target = navItemRefs.current[activeNavKey];
    const container = navItemsContainerRef.current;
    if (target && container) {
      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      setIndicatorStyle({
        left: targetRect.left - containerRect.left,
        width: targetRect.width,
      });
    } else {
      setIndicatorStyle(null);
    }
  }, [activeNavKey]);

  useEffect(() => {
    updateIndicatorPosition();
  }, [updateIndicatorPosition]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => updateIndicatorPosition();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateIndicatorPosition]);

  const assignNavItemRef = useCallback((key: string) => {
    return (element: HTMLDivElement | null) => {
      navItemRefs.current[key] = element;
    };
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleScroll = () => {
      closeMenu();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen, closeMenu]);

  // Close menu on click/touch outside
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    // Add a small delay to prevent immediate closing when opening
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <nav
      ref={navRef}
      className="fixed top-4 sm:top-6 left-0 right-0 z-[120] px-3 sm:px-4 md:px-6 lg:px-8"
      style={{
        '--background': '#ffffff',
        '--foreground': '#2C3E50',
        '--primary': '#1A2332',
        '--radius': '0.625rem',
        '--border': 'rgba(0, 0, 0, 0.1)',
      } as React.CSSProperties & { [key: string]: string }}
    >
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl rounded-2xl sm:rounded-3xl lg:rounded-full border border-white/40 shadow-[0_20px_60px_rgba(15,23,42,0.15)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/15 rounded-2xl sm:rounded-3xl lg:rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/15 to-white/30 rounded-2xl sm:rounded-3xl lg:rounded-full" />
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl lg:rounded-full border border-white/70 shadow-inner" />

        <div className="relative flex items-center justify-between px-4 md:px-6 py-3.5 md:py-4">
          <Link href="/" onClick={closeMenu}>
            <div className="flex items-center gap-3">
              <Image
                src={logo1x}
                alt="V-Accel"
                className="h-8 md:h-9 w-auto"
                width={134}
                height={64}
                sizes="134px"
                priority
              />
            </div>
          </Link>

          <div className="desktop-nav-links hidden lg:flex flex-1 items-center justify-center">
            <div
              ref={navItemsContainerRef}
              className="flex items-center gap-1 relative max-w-full"
            >
              {indicatorStyle ? (
                <div
                  className="pointer-events-none absolute rounded-full bg-[#1A2332] border border-[#1A2332] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out"
                  style={{
                    height: "100%",
                    top: 0,
                    width: indicatorStyle.width,
                    transform: `translateX(${indicatorStyle.left}px)`,
                  }}
                />
              ) : null}
              {desktopNavLinks.map((link, index) => (
                <div
                  key={link.href}
                  ref={assignNavItemRef(link.href === "/#leadaccel" ? "product" : "home")}
                  className={cn("relative flex items-center justify-center", link.widthClass ?? "w-[110px]")}
                >
                  <Link
                  href={link.href}
                  prefetch={false}
                  onClick={closeMenu}
                    className={cn(
                      "relative z-10 flex items-center justify-center w-full px-4 py-2 text-base font-medium transition-colors duration-200",
                      isActiveLink(link.href) ? "text-white" : "text-[#2C3E50] hover:text-[#1A2332]",
                    )}
                >
                    {link.label}
            </Link>
                </div>
            ))}

              <div className="relative w-[120px] px-1" ref={assignNavItemRef("service")}>
            <DropdownMenu open={isServicesMenuOpen} onOpenChange={setIsServicesMenuOpen}>
                <DropdownMenuTrigger
                  className={cn(
                    "relative z-10 flex items-center justify-center gap-1 w-full px-4 py-2 text-base font-medium transition-colors duration-200 outline-none",
                    isServicesActive ? "text-white" : "text-[#2C3E50] hover:text-[#1A2332]",
                  )}
                >
                Service
                <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.15)] rounded-xl mt-2 min-w-[200px] p-2">
                <DropdownMenuItem
                  asChild
                  className={`cursor-pointer backdrop-blur-sm rounded-full m-1 ${
                    pathname === "/services/edtech"
                      ? "bg-[#00B8A9]/20 text-[#00B8A9] font-medium"
                      : "hover:bg-white/30 text-[#2C3E50] hover:text-[#1A2332]"
                  }`}
                  onSelect={() => setIsServicesMenuOpen(false)}
                >
                  <Link
                    href="/services/edtech"
                    onClick={closeMenu}
                    className="w-full py-2.5 px-5 font-medium block"
                  >
                    EdTech
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className={`cursor-pointer backdrop-blur-sm rounded-full m-1 ${
                    pathname === "/services/fintech"
                      ? "bg-[#00B8A9]/20 text-[#00B8A9] font-medium"
                      : "hover:bg-white/30 text-[#2C3E50] hover:text-[#1A2332]"
                  }`}
                  onSelect={() => setIsServicesMenuOpen(false)}
                >
                  <Link
                    href="/services/fintech"
                    onClick={closeMenu}
                    className="w-full py-2.5 px-5 font-medium block"
                  >
                    FinTech
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className={`cursor-pointer backdrop-blur-sm rounded-full m-1 ${
                    pathname === "/services/healthcare"
                      ? "bg-[#00B8A9]/20 text-[#00B8A9] font-medium"
                      : "hover:bg-white/30 text-[#2C3E50] hover:text-[#1A2332]"
                  }`}
                  onSelect={() => setIsServicesMenuOpen(false)}
                >
                  <Link
                    href="/services/healthcare"
                    onClick={closeMenu}
                    className="w-full py-2.5 px-5 font-medium block"
                  >
                    HealthCare
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>

            <div className="relative flex items-center justify-center w-[110px] px-1" ref={assignNavItemRef("about")}>
              <Link
                href="/about"
                prefetch={false}
                onClick={closeMenu}
                className={cn(
                  "relative z-10 flex items-center justify-center w-full px-4 py-2 text-base font-medium transition-colors duration-200",
                  isActiveLink("/about")
                    ? "text-white"
                    : "text-[#2C3E50] hover:text-[#1A2332]",
                )}
              >
                About
              </Link>
            </div>

            <div className="relative w-[130px] px-1" ref={assignNavItemRef("resource")}>
            <DropdownMenu open={isResourcesMenuOpen} onOpenChange={setIsResourcesMenuOpen}>
                <DropdownMenuTrigger
                  className={cn(
                    "relative z-10 flex items-center justify-center gap-1 w-full px-4 py-2 text-base font-medium transition-colors duration-200 outline-none",
                    isResourcesActive ? "text-white" : "text-[#2C3E50] hover:text-[#1A2332]",
                  )}
                >
                Resource
                <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.15)] rounded-xl mt-2 min-w-[200px] p-2">
                <DropdownMenuItem
                  asChild
                  className={`cursor-pointer backdrop-blur-sm rounded-full m-1 ${
                    pathname === "/blog"
                      ? "bg-[#00B8A9]/20 text-[#00B8A9] font-medium"
                      : "hover:bg-white/30 text-[#2C3E50] hover:text-[#1A2332]"
                  }`}
                  onSelect={() => setIsResourcesMenuOpen(false)}
                >
                  <Link
                    href="/blog"
                    onClick={closeMenu}
                    className="w-full py-2.5 px-5 font-medium block"
                  >
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className={`cursor-pointer backdrop-blur-sm rounded-full m-1 ${
                    pathname === "/case-studies"
                      ? "bg-[#00B8A9]/20 text-[#00B8A9] font-medium"
                      : "hover:bg-white/30 text-[#2C3E50] hover:text-[#1A2332]"
                  }`}
                  onSelect={() => setIsResourcesMenuOpen(false)}
                >
                  <Link
                    href="/case-studies"
                    onClick={closeMenu}
                    className="w-full py-2.5 px-5 font-medium block"
                  >
                    Case Studies
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>

          </div>
          </div>

          <div className="desktop-nav-cta hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <Button className="rounded-lg bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white shadow-sm hover:shadow-md transition-all duration-200 px-5 h-9">
                Contact Us
              </Button>
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="mobile-nav-trigger lg:hidden text-[#2C3E50] p-2 hover:bg-white/40 rounded-lg transition-colors backdrop-blur-sm"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav-menu lg:hidden border-t border-black/10 mt-3 pt-3 pb-3 space-y-1 bg-white relative z-10 rounded-2xl">
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-4 py-2 rounded-lg transition-colors font-medium text-[#2C3E50] hover:text-[#1A2332] hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/#leadaccel"
              prefetch={false}
              onClick={closeMenu}
              className="block px-4 py-2 rounded-lg transition-colors font-medium text-[#2C3E50] hover:text-[#1A2332] hover:bg-gray-50"
            >
              Product
            </Link>

            <div>
              <button
                onClick={toggleMobileServices}
                className="flex items-center justify-between w-full px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                Service
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link
                    href="/services/edtech"
                    onClick={closeMenu}
                    className="block px-4 py-2.5 rounded-lg transition-colors font-medium text-[#2C3E50] hover:text-[#1A2332] hover:bg-gray-50"
                  >
                    EdTech
                  </Link>
                  <Link
                    href="/services/fintech"
                    onClick={closeMenu}
                    className="block px-4 py-2.5 rounded-lg transition-colors font-medium text-[#2C3E50] hover:text-[#1A2332] hover:bg-gray-50"
                  >
                    FinTech
                  </Link>
                  <Link
                    href="/services/healthcare"
                    onClick={closeMenu}
                    className="block px-4 py-2.5 rounded-lg transition-colors font-medium text-[#2C3E50] hover:text-[#1A2332] hover:bg-gray-50"
                  >
                    HealthCare
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-4 py-2 rounded-lg transition-colors font-medium text-[#2C3E50] hover:text-[#1A2332] hover:bg-gray-50"
            >
              About
            </Link>

            <div>
              <button
                onClick={toggleMobileResources}
                className="flex items-center justify-between w-full px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                Resource
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isMobileResourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileResourcesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                <Link
                  href="/blog"
                    onClick={closeMenu}
                    className="block px-4 py-2.5 rounded-lg transition-colors font-medium text-[#2C3E50] hover:text-[#1A2332] hover:bg-gray-50"
                  >
                    Blog
                  </Link>
                <Link
                  href="/case-studies"
                    onClick={closeMenu}
                    className="block px-4 py-2.5 rounded-lg transition-colors font-medium text-[#2C3E50] hover:text-[#1A2332] hover:bg-gray-50"
                  >
                  Case Studies
                  </Link>
                </div>
              )}
            </div>

            <div className="pt-2 px-4 space-y-2">
              <Link href="/contact" onClick={closeMenu}>
                <Button className="w-full rounded-lg bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white h-10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

