'use client';

import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { DeviceMockups } from "./DeviceMockups";
import { EdutechBackground } from "./EdutechBackground";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      {/* Interactive Background */}
      <EdutechBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-6"
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
              className="text-4xl md:text-5xl lg:text-6xl text-[48px] p-[0px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              We Build Scalable EdTech 
              Platforms that Enhance Learning, Analytics and 
              Engagement.
            </motion.h1>
            <motion.p 
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              From learning management systems to student analytics dashboards, 
              we help educational institutions and platforms deliver smarter, connected and impactful digital experiences.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="group rounded-full" style={{ backgroundColor: '#582760' }}>
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="group rounded-full">
                  <Play className="mr-2 h-5 w-5" />
                  Talk to Our Team
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Device Mockups */}
          <motion.div 
            className="relative"
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
