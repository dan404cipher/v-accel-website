"use client";

import { motion } from "motion/react";
import { FileSearch, Code, Shield, TrendingUp } from "lucide-react";
import { FinancialBackground } from "./FinancialBackground";

const steps = [
  {
    icon: FileSearch,
    number: "01",
    title: "Plan",
    description: "Map business goals with compliance and risk frameworks.",
  },
  {
    icon: Code,
    number: "02",
    title: "Build",
    description: "Engineer scalable, modular systems using secure APIs and microservices.",
  },
  {
    icon: Shield,
    number: "03",
    title: "Comply",
    description: "Implement SOC2, PCI DSS, and ISO-compliant practices.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Scale",
    description: "Optimize infrastructure for growth and real-time data performance.",
  },
];

export function HowWeHelp() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-white">
      <FinancialBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-[#45647B]/10 rounded-full mb-6">
              <span className="text-[#45647B]">Our Process</span>
            </div>
            <h2 className="mb-6 text-[32px]">
              From planning to compliance — we build for the full FinTech lifecycle.
            </h2>
            <p className="text-lg text-muted-foreground">
              We collaborate with your internal teams to architect FinTech platforms that handle rapid growth, evolving regulations, and continuous innovation.
            </p>
          </motion.div>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/30 to-primary/20 hidden md:block"></div>

          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content Side */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                      {/* Large number */}
                      <div className={`text-8xl md:text-9xl opacity-5 mb-4 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                        {step.number}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                        {step.description}
                      </p>
                    </div>

                    {/* Center Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
