'use client';

import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
      scrolled 
        ? "bg-card/98 backdrop-blur-md shadow-sm" 
        : "bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => scrollToSection(e as any, "#hero")}>
              <motion.div 
                className="h-8 w-8 rounded-lg bg-primary"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              ></motion.div>
              <span className="text-xl">V-Accel Healthcare</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solutions" onClick={(e) => scrollToSection(e, "#solutions")} className="transition-all duration-200 hover:text-primary hover:scale-105">
              Solutions
            </a>
            <a href="#process" onClick={(e) => scrollToSection(e, "#process")} className="transition-all duration-200 hover:text-primary hover:scale-105">
              Process
            </a>
            <a href="#testimonials" onClick={(e) => scrollToSection(e, "#testimonials")} className="transition-all duration-200 hover:text-primary hover:scale-105">
              Testimonials
            </a>
            <a href="#resources" onClick={(e) => scrollToSection(e, "#resources")} className="transition-all duration-200 hover:text-primary hover:scale-105">
              Resources
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="hover:scale-105 transition-transform">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden py-4 border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-4">
              <a
                href="#solutions"
                className="py-2 transition-colors hover:text-primary"
                onClick={(e) => scrollToSection(e, "#solutions")}
              >
                Solutions
              </a>
              <a
                href="#process"
                className="py-2 transition-colors hover:text-primary"
                onClick={(e) => scrollToSection(e, "#process")}
              >
                Process
              </a>
              <a
                href="#testimonials"
                className="py-2 transition-colors hover:text-primary"
                onClick={(e) => scrollToSection(e, "#testimonials")}
              >
                Testimonials
              </a>
              <a
                href="#resources"
                className="py-2 transition-colors hover:text-primary"
                onClick={(e) => scrollToSection(e, "#resources")}
              >
                Resources
              </a>
              <Button className="w-full">Get Started</Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
