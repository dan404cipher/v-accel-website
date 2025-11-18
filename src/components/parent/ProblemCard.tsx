"use client";

import { motion } from "motion/react";
import { memo } from "react";
import { LucideIcon } from "lucide-react";

interface ProblemCardProps {
  text: string;
  icon: LucideIcon;
  index: number;
}

export const ProblemCard = memo(function ProblemCard({ text, icon: Icon, index }: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div 
        className="relative flex flex-col items-center text-center p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#00B8A9] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,184,169,0.15)] transition-all duration-200 h-full group overflow-hidden hover-lift gpu-accelerated"
      >
        {/* Subtle gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B8A9]/0 to-[#00B8A9]/0 group-hover:from-[#00B8A9]/5 group-hover:to-transparent transition-all duration-200 rounded-2xl" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon with modern gradient background */}
          <div className="mb-6">
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#00B8A9]/15 to-[#00B8A9]/8 flex items-center justify-center group-hover:from-[#00B8A9]/25 group-hover:to-[#00B8A9]/15 transition-all duration-200 shadow-lg shadow-[#00B8A9]/10">
              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#00B8A9]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <Icon className="w-9 h-9 text-[#00B8A9] relative z-10" strokeWidth={2} />
            </div>
          </div>
          
          {/* Text content with improved typography */}
          <p className="text-[#2C3E50] text-sm sm:text-base leading-relaxed">
            {text}
          </p>
        </div>

        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#00B8A9]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      </div>
    </motion.div>
  );
});
