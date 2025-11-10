'use client';

import { motion } from "motion/react";
import { Shield, Activity, FileCheck, CheckCircle2 } from "lucide-react";

const standards = [
  {
    icon: Shield,
    label: "HIPAA",
  },
  {
    icon: Activity,
    label: "HL7/FHIR",
  },
  {
    icon: FileCheck,
    label: "ISO 27001",
  },
  {
    icon: CheckCircle2,
    label: "GDPR",
  },
];

export function ComplianceSecurity() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4DD0E1]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
              <span className="text-primary">Compliance & Security</span>
            </div>
            <h2 className="mb-6 text-white text-[32px]">
              Compliance and care go hand in hand.
            </h2>
            <p className="text-lg text-white/80 mb-4">
              Every healthcare solution we build follows a security-by-design approach — compliant with HIPAA, HL7/FHIR, and ISO frameworks.
            </p>
            <p className="text-lg text-white/80">
              We help you innovate confidently while safeguarding patient data and meeting audit standards.
            </p>
          </motion.div>
        </div>

        {/* Standards Icons */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {standards.map((standard, index) => {
              const Icon = standard.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-white group-hover:text-primary transition-colors duration-300">
                        {standard.label}
                      </div>
                    </div>
                    
                    {/* Decorative element */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-sm">
            <Shield className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-white/80">
              From access controls to encrypted APIs, we bake compliance into every stage of development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
