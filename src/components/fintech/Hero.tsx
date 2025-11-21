"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import mobileAppScreen from "../../assets/fintech/8c56b3ded6cbcf7d1bf6eeb5c6666a73f89e4ed7.png";
import { FinancialBackground } from "./FinancialBackground";
import { motion } from "motion/react";
import Link from "next/link";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <FinancialBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block px-4 py-2 bg-[#45647B]/10 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-[#1A2332] font-[470]">Powering Financial Innovation</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We build secure, scalable FinTech platforms that deliver trust and performance.
            </motion.h1>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              From payments and lending to compliance automation, we help FinTech companies launch faster, stay audit-ready, and scale without compromise.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="gap-2"
                  onClick={() => scrollToSection("core-solutions")}
                >
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                >
                  <Link href="/contact#contact-form">
                    Talk to Our Team
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Mobile Phone Mockups */}
            <div className="relative">
              <Image
                src={mobileAppScreen}
                alt="Financial dashboard interface"
                className="w-full h-auto scale-125"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
