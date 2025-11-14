'use client';

import { motion, useInView } from "motion/react";
import { Search, Palette, Code, Rocket, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRef, useEffect, useState } from "react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "Analyze learning workflows, target audience, and content delivery models.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    description: "Craft intuitive, accessible UI/UX for diverse learners.",
  },
  {
    icon: Code,
    number: "03",
    title: "Develop",
    description: "Build scalable systems with cloud-first, API-driven architectures.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy",
    description: "Ensure smooth implementation with real-time analytics and reporting.",
  },
];

export function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Animate line progress from 0 to 100% over 2.5 seconds
      const duration = 2500;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeInOutCubic = (t: number) => 
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        
        setLineProgress(easeInOutCubic(progress) * 100);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Mild Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-[32px]">How We Help</h2>
          <p className="text-lg mb-4 max-w-3xl mx-auto">
            From LMS development to analytics integration — we handle it all.
          </p>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our team combines educational insight with technical depth to deliver software that engages learners and supports educators — with measurable results at every step.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated connecting line - positioned to go through the center of the numbered badges */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 pointer-events-none z-0">
            {/* Background line */}
            <div className="absolute inset-0 left-[12.5%] right-[12.5%] bg-primary/10"></div>
            
            {/* Animated progress line */}
            <motion.div 
              className="absolute inset-0 left-[12.5%] right-[12.5%] bg-gradient-to-r from-primary via-primary to-primary origin-left"
              style={{
                clipPath: `inset(0 ${100 - lineProgress}% 0 0)`,
              }}
            >
              {/* Glowing dot at the end of the line */}
              {lineProgress > 0 && lineProgress < 100 && (
                <motion.div 
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg"
                  style={{
                    left: `${lineProgress}%`,
                    boxShadow: '0 0 10px rgba(88, 39, 96, 0.6)',
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              // Calculate when this step should light up (each step gets 25% of the line)
              const stepThreshold = (index / (steps.length - 1)) * 100;
              const isStepActive = lineProgress >= stepThreshold;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative cursor-pointer"
                >
                  <div className="text-center">
                    {/* Numbered badge positioned to sit on the line - desktop only */}
                    <div className="hidden md:block relative h-16 mb-4 flex items-center justify-center mx-auto">
                      <motion.div 
                        className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center relative z-20 mx-auto"
                        style={{ fontSize: '14px' }}
                        animate={{
                          scale: isStepActive ? [1, 1.15, 1] : 1,
                          boxShadow: isStepActive 
                            ? '0 0 20px rgba(88, 39, 96, 0.6)' 
                            : '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                        transition={{ 
                          scale: { duration: 2, repeat: isStepActive ? Infinity : 0, ease: "easeInOut" },
                          boxShadow: { duration: 0.3 }
                        }}
                        whileHover={{ scale: 1.2 }}
                      >
                        {step.number}
                      </motion.div>
                    </div>

                    {/* Icon card - with number badge overlay on mobile only */}
                    <div className="relative inline-block mb-6">
                      <motion.div 
                        className="w-16 h-16 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto transition-all duration-500 relative bg-primary/10 md:bg-primary/15"
                        animate={{
                          scale: isStepActive ? 1.05 : 1,
                        }}
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <step.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                      </motion.div>
                      
                      {/* Number badge as overlay - top-right corner on mobile only, hidden on desktop */}
                      <motion.div 
                        className="absolute -top-1 -right-1 md:hidden w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-semibold shadow-lg z-20"
                        animate={{
                          scale: isStepActive ? [1, 1.15, 1] : 1,
                          boxShadow: isStepActive 
                            ? '0 0 15px rgba(88, 39, 96, 0.6)' 
                            : '0 2px 4px rgba(0, 0, 0, 0.15)',
                        }}
                        transition={{ 
                          scale: { duration: 2, repeat: isStepActive ? Infinity : 0, ease: "easeInOut" },
                          boxShadow: { duration: 0.3 }
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {step.number}
                      </motion.div>
                    </div>
                    
                    <h3 className="mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="group rounded-full" style={{ backgroundColor: '#582760' }}>
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
