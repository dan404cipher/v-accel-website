"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function DeviceMockups() {
  return (
    <div className="relative w-full h-[250px] md:h-[280px]">
      {/* iPad Pro Mockup with Dashboard */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="w-full max-w-[280px]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/10">
            <span className="text-muted-foreground text-sm">
              EdTech Device Mockup
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative floating elements */}
      <div className="absolute top-1/4 right-8 w-16 h-16 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
      <div
        className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-accent/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
}
