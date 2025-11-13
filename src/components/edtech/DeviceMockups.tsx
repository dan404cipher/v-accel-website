"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import deviceMockupImage from "@assets/0a8ac4366979be11081f7f7abae5f758c04f2992.png";

export function DeviceMockups() {
  return (
    <div className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
      {/* iPad Pro Mockup with Dashboard */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="w-full max-w-[90%] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[750px] xl:max-w-[850px] border-2 border-black shadow-lg rounded-2xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <ImageWithFallback
            src={deviceMockupImage.src}
            alt="EdTech Device Mockup - iPad Pro with Dashboard"
            className="w-full h-auto"
          />
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
