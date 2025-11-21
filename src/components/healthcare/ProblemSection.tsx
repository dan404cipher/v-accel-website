'use client';

import { Clock, Shield, Network } from "lucide-react";
import { motion } from "motion/react";

const problems = [
  {
    icon: Network,
    title: "Fragmented patient data limits care coordination",
    description: "Fragmented patient data across systems limits visibility and coordination.",
    gradient: "from-[#4CAF50]/5 via-[#4CAF50]/8 to-[#4CAF50]/5",
    iconColor: "text-[#4CAF50]",
    borderColor: "border-[#4CAF50]/15",
  },
  {
    icon: Shield,
    title: "Compliance slows innovation",
    description: "Compliance requirements (HIPAA, HL7/FHIR) slow down innovation.",
    gradient: "from-[#4CAF50]/5 via-[#4CAF50]/8 to-[#4CAF50]/5",
    iconColor: "text-[#4CAF50]",
    borderColor: "border-[#4CAF50]/15",
  },
  {
    icon: Clock,
    title: "Manual processes create inefficiencies",
    description: "Manual processes create errors, inefficiencies, and patient dissatisfaction.",
    gradient: "from-[#4CAF50]/5 via-[#4CAF50]/8 to-[#4CAF50]/5",
    iconColor: "text-[#4CAF50]",
    borderColor: "border-[#4CAF50]/15",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Faint background pattern of data flow */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="pulse-pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 50 L 20 50 L 25 30 L 30 70 L 35 45 L 40 50 L 100 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pulse-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 px-[32px] py-[0px] mx-[103px] my-[-64px]">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary">The Challenge in Healthcare Tech</span>
            </div>
            <h2 className="mb-[24px] text-[32px] font-medium mt-[0px] mr-[0px] ml-[0px]">
              Technology should heal your workflow not add to its complexity.
            </h2>
          </motion.div>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`relative h-full bg-gradient-to-br ${problem.gradient} border ${problem.borderColor} rounded-2xl p-8 transition-transform duration-300 ease-out hover:-translate-y-2`}>
                  {/* Icon container */}
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-white/50 backdrop-blur-sm flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${problem.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Solution Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg lg:text-xl leading-relaxed">
            At <span className="text-[#4CAF50] font-semibold bg-[#F4F6F8] px-[16px] py-[8px] rounded-[40px]">V-Accel</span> we help healthcare organizations simplify complex technology landscapes making systems interoperable, compliant and built for better clinical outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
