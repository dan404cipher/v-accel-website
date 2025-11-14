'use client';

import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { DeviceMockups } from "./DeviceMockups";
import { EdutechBackground } from "./EdutechBackground";
import { motion } from "motion/react";

export function Hero() {
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
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">
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
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="gap-2 font-semibold">
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="gap-2 font-semibold">
                  <Play className="h-4 w-4" />
                  Talk to Our Team
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
