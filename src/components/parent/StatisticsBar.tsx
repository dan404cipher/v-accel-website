"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";

// Counter Animation Component
function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  
  // Parse the numeric value and suffix
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 1000; // 1 second - faster animation
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * numericValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, numericValue]);
  
  return (
    <div ref={ref} className="text-white text-4xl md:text-5xl mb-3">
      {count}{suffix}
    </div>
  );
}

export function StatisticsBar() {
  return (
    <section className="relative px-6 py-12 overflow-hidden bg-[#475569]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              value: "60+", 
              label: "Team Members", 
              subtitle: "Across development, design, DevOps, AI engineering, and digital strategy"
            },
            { 
              value: "10+", 
              label: "Years Experience", 
              subtitle: "In product engineering and enterprise solutions"
            },
            { 
              value: "2", 
              label: "Companies Founded", 
              subtitle: "V Accel AI Dynamics and Axess Technology"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Value - Animated Counter */}
              <AnimatedCounter value={stat.value} />
              
              {/* Label */}
              <h3 className="text-white text-base md:text-lg mb-2">
                {stat.label}
              </h3>
              
              {/* Subtitle */}
              <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xs mx-auto">
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

