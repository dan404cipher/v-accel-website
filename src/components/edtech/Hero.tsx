'use client';

import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { DeviceMockups } from "./DeviceMockups";
import { EdutechBackground } from "./EdutechBackground";
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
    <section
      id="home"
      className="relative overflow-hidden bg-background py-20 lg:py-32"
    >
      {/* Interactive Background */}
      <EdutechBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary rounded-full whitespace-nowrap">
                Transforming Education Through Technology
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              We build scalable EdTech platforms that enhance learning,
              analytics, and engagement.
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              From learning management systems to student analytics dashboards, 
              we help educational institutions and platforms deliver smarter, connected and impactful digital experiences.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="default"
                  className="gap-2 text-xs sm:text-sm md:text-base font-semibold h-9 sm:h-10 md:h-12 px-4 sm:px-6 md:px-8"
                  onClick={() => scrollToSection("core-solutions")}
                >
                  Explore Solutions
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="default"
                  variant="outline"
                  className="gap-2 text-xs sm:text-sm md:text-base font-semibold h-9 sm:h-10 md:h-12 px-4 sm:px-6 md:px-8"
                  asChild
                >
                  <Link href="/contact#contact-form">
                    <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    Talk to Our Team
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Device Mockups */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <DeviceMockups />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
