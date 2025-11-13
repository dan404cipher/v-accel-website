"use client";

import { memo, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import vaccelLogo from "@assets/2f6818b63f91758834982350ffe7523437d669ba.png";

export const ParentNavigation = memo(function ParentNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);

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
    setIsMobileResourcesOpen((prev) => !prev);
  }, []);

  const toggleMobileServices = useCallback(() => {
    setIsMobileServicesOpen((prev) => !prev);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-[120] px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B8A9]/3 via-transparent to-[#00B8A9]/3" />
        <div className="absolute inset-0 rounded-full border border-white/50 shadow-inner" />

        <div className="relative flex items-center justify-between px-4 md:px-6 py-3 md:py-3.5">
          <Link href="/" onClick={closeMenu}>
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image src={vaccelLogo} alt="V-Accel" className="h-8 md:h-9 w-auto" width={36} height={36} />
            </motion.div>
          </Link>

          <div className="desktop-nav-links flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] transition-colors duration-200 font-medium"
            >
              Home
            </Link>

            <a
              href="#leadaccel"
              className="px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] transition-colors duration-200 font-medium"
            >
              Product
            </a>

            <DropdownMenu open={isServicesMenuOpen} onOpenChange={setIsServicesMenuOpen}>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] transition-colors duration-200 outline-none font-medium">
                Service
                <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white/40 backdrop-blur-3xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.15)] rounded-xl mt-2 min-w-[160px]">
                <DropdownMenuItem
                  asChild
                  className="hover:bg-white/30 cursor-pointer backdrop-blur-sm rounded-lg m-1"
                  onSelect={() => setIsServicesMenuOpen(false)}
                >
                  <Link
                    href="/services/edtech"
                    onClick={closeMenu}
                    className="w-full text-[#2C3E50] hover:text-[#1A2332] py-1 font-medium"
                  >
                    EdTech
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="hover:bg-white/30 cursor-pointer backdrop-blur-sm rounded-lg m-1"
                  onSelect={() => setIsServicesMenuOpen(false)}
                >
                  <Link
                    href="/services/fintech"
                    onClick={closeMenu}
                    className="w-full text-[#2C3E50] hover:text-[#1A2332] py-1 font-medium"
                  >
                    FinTech
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="hover:bg-white/30 cursor-pointer backdrop-blur-sm rounded-lg m-1"
                  onSelect={() => setIsServicesMenuOpen(false)}
                >
                  <Link
                    href="/services/healthcare"
                    onClick={closeMenu}
                    className="w-full text-[#2C3E50] hover:text-[#1A2332] py-1 font-medium"
                  >
                    HealthCare
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className="px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] transition-colors duration-200 font-medium"
            >
              About
            </Link>

            <DropdownMenu open={isResourcesMenuOpen} onOpenChange={setIsResourcesMenuOpen}>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] transition-colors duration-200 outline-none font-medium">
                Resource
                <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white/40 backdrop-blur-3xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.15)] rounded-xl mt-2 min-w-[160px]">
                <DropdownMenuItem
                  asChild
                  className="hover:bg-white/30 cursor-pointer backdrop-blur-sm rounded-lg m-1"
                  onSelect={() => setIsResourcesMenuOpen(false)}
                >
                  <Link
                    href="/blog"
                    onClick={closeMenu}
                    className="w-full text-[#2C3E50] hover:text-[#1A2332] py-1 font-medium"
                  >
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="hover:bg-white/30 cursor-pointer backdrop-blur-sm rounded-lg m-1"
                  onSelect={() => setIsResourcesMenuOpen(false)}
                >
                  <Link
                    href="/case-studies"
                    onClick={closeMenu}
                    className="w-full text-[#2C3E50] hover:text-[#1A2332] py-1 font-medium"
                  >
                    Case Studies
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="desktop-nav-cta flex items-center gap-4">
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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mobile-nav-menu lg:hidden border-t border-white/30 mt-3 pt-3 pb-2 space-y-1"
          >
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] hover:bg-white/40 rounded-lg transition-colors backdrop-blur-sm font-medium"
            >
              Home
            </Link>
            <a
              href="#leadaccel"
              onClick={closeMenu}
              className="block px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] hover:bg-white/40 rounded-lg transition-colors backdrop-blur-sm font-medium"
            >
              Product
            </a>

            <div>
              <button
                onClick={toggleMobileServices}
                className="flex items-center justify-between w-full px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] hover:bg-white/40 rounded-lg transition-colors backdrop-blur-sm font-medium"
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
                    className="block px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] hover:bg-white/40 rounded-lg transition-colors backdrop-blur-sm font-medium"
                  >
                    EdTech
                  </Link>
                  <Link
                    href="/services/fintech"
                    onClick={closeMenu}
                    className="block px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] hover:bg-white/40 rounded-lg transition-colors backdrop-blur-sm font-medium"
                  >
                    FinTech
                  </Link>
                  <Link
                    href="/services/healthcare"
                    onClick={closeMenu}
                    className="block px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] hover:bg-white/40 rounded-lg transition-colors backdrop-blur-sm font-medium"
                  >
                    HealthCare
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] hover:bg-white/40 rounded-lg transition-colors backdrop-blur-sm font-medium"
            >
              About
            </Link>

            <div>
              <button
                onClick={toggleMobileResources}
                className="flex items-center justify-between w-full px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] hover:bg-white/40 rounded-lg transition-colors backdrop-blur-sm font-medium"
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
                    className="block px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] hover:bg-white/40 rounded-lg transition-colors backdrop-blur-sm font-medium"
                  >
                    Blog
                  </Link>
                <Link
                  href="/case-studies"
                    onClick={closeMenu}
                    className="block px-4 py-2 text-[#2C3E50] hover:text-[#1A2332] hover:bg-white/40 rounded-lg transition-colors backdrop-blur-sm font-medium"
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
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
});

