'use client';

import { motion } from "motion/react";
import { Database, Video, Building2, Shield } from "lucide-react";

const solutions = [
  {
    icon: Database,
    title: "EHR & EMR Integrations",
    description: "Connect clinical data systems through HL7/FHIR standards for complete interoperability.",
  },
  {
    icon: Video,
    title: "Patient Portals & Telehealth",
    description: "Enable secure communication, virtual consultations, and real-time patient updates.",
  },
  {
    icon: Building2,
    title: "Hospital Management Systems (HMS)",
    description: "Streamline operations with modular solutions for appointments, billing, and reporting.",
  },
  {
    icon: Shield,
    title: "Compliance & Data Security",
    description: "Architected for HIPAA, ISO 27001, and GDPR — with audit-ready infrastructure from day one.",
  },
];

export function CoreSolutions() {
  return (
    <section id="core-solutions" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary">Healthcare</span>
            </div>
            <h2 className="mb-3 text-[32px]">
              Core Healthcare Solutions
            </h2>
            <p className="text-[#2C3E50] text-lg">
              Solutions designed for modern healthcare ecosystems.
            </p>
          </motion.div>
        </div>

        {/* Solution Cards - 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="h-full bg-[#E8F5E9] rounded-3xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  {/* Icon container */}
                  <div className="mb-6">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-[#4CAF50]" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg text-[#2C3E50]">
                      {solution.title}
                    </h3>
                    <p className="text-[#2C3E50]/70 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
