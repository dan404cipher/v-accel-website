"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const solutions = [
  "Redesigned their system with scalable cloud architecture",
  "Added custom analytics dashboards for real-time insights",
  "Implemented personalized patient care pathways",
  "Integrated automated appointment reminders and compliance tracking",
];

export function ResultSnapshot() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary">Case Study</span>
            </div>
            <h2 className="mb-6 text-[#2C3E50] text-[32px]">
              Digitizing patient engagement for a multi-specialty hospital.
            </h2>
          </motion.div>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Description + Key Metrics */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* Description */}
              <p className="text-[#2C3E50]/70 text-lg leading-relaxed">
                A regional healthcare provider&apos;s existing patient portal
                couldn&apos;t handle growing enrollments or data visibility
                needs. We designed a modular architecture with built-in HL7/FHIR
                automation, enabling faster release cycles and{" "}
                <span className="text-[#4CAF50]">
                  better patient engagement
                </span>{" "}
                — while maintaining full HIPAA compliance.
              </p>

              {/* Key Metrics */}
              <div className="space-y-8">
                {/* Metric 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <div className="text-4xl text-[#4CAF50] mb-1">42%</div>
                    <div className="text-[#2C3E50]/70">
                      Improvement in appointment adherence
                    </div>
                  </div>
                </motion.div>

                {/* Metric 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <div className="text-4xl text-[#4CAF50] mb-1">6 months</div>
                    <div className="text-[#2C3E50]/70">
                      Time to full deployment
                    </div>
                  </div>
                </motion.div>

                {/* Metric 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <div className="text-4xl text-[#4CAF50] mb-1">100%</div>
                    <div className="text-[#2C3E50]/70">
                      HIPAA compliance maintained
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  asChild
                  className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white group hover:scale-105 transition-transform"
                >
                  <Link href="/services/healthcare">
                    See More Healthcare Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column: Mobile Mockups */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center"
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <span className="text-muted-foreground">
                  Device Mockups Preview
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
