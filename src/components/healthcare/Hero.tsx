"use client";

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { HealthcareBackground } from "./HealthcareBackground";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "@/assets/f1c492f95124a52f897533a675f029f7199c04e3.png";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background py-20 lg:py-32"
    >
      <HealthcareBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              className="inline-block px-4 py-2 bg-primary/10 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary">
                Healthcare Technology Excellence
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Building secure, compliant healthcare software that improves
              patient and provider outcomes.
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From EHR integrations to telehealth platforms, we help healthcare
              organizations modernize systems, enhance care delivery, and
              maintain full regulatory compliance.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="gap-2 group hover:scale-105 transition-transform"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-transform"
              >
                Talk to Our Team
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Healthcare Dashboard Interface */}
            <div className="relative w-full max-w-lg">
              <ImageWithFallback
                src={heroImage.src}
                alt="Healthcare web application dashboard interface"
                className="w-full h-auto scale-[1.15]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
