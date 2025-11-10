"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import appMockup from "../../assets/fintech/dbb32eb60d761ff81e5d3690ae9aae1385b1dda7.png";
import { caseStudyMetrics } from "../../constants/caseStudies";

export function CaseStudies() {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F6F8] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-5 py-2 bg-[#E8E9EB] rounded-full mb-6">
              <span className="text-[#6B7280] text-sm">Case Study</span>
            </div>
            <h2 className="mb-6 text-[32px] text-[#2C3E50] max-w-5xl mx-auto">
              Cutting time-to-market by 40% for a digital lending company.
            </h2>
          </motion.div>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Case Narrative */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  A FinTech startup needed to launch a compliant digital lending engine within 12 weeks.
                </p>
                <p className="text-lg text-[#2C3E50] leading-relaxed text-justify">
                  We designed a modular architecture with built-in KYC automation, enabling faster loan approvals and a{" "}
                  <span className="text-[#FFB300]">40% shorter release cycle</span> — while maintaining full{" "}
                  <span className="text-[#FFB300]">SOC2 compliance</span>.
                </p>
              </motion.div>

              {/* Metrics */}
              <div className="flex flex-col gap-3">
                {caseStudyMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#FFF8E7] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#FFB300]" />
                      </div>
                      <div className="text-left">
                        <div className="text-2xl text-[#FFB300] mb-0.5">{metric.value}</div>
                        <div className="text-[#6B7280] text-sm">{metric.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div>
                <Button 
                  size="lg" 
                  className="bg-[#FFB300] hover:bg-[#FFA000] text-[#2C3E50] gap-2 shadow-md"
                >
                  See More FinTech Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <Image
                src={appMockup}
                alt="Digital lending app interface"
                className="max-w-full h-auto w-full max-w-xl rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
