"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users,
  ArrowRight
} from "lucide-react";

export function TrustedPartners() {
  return (
    <section className="relative px-6 py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-[#00B8A9]/10 rounded-full border border-[#00B8A9]/20 text-[#1A2332] shadow-lg py-[8px] px-[16px] text-[16px] font-normal">
            <Users className="w-4 h-4 mr-2 text-[#00B8A9]" />
            Trusted by Clients
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-[#1A2332] max-w-4xl mx-auto leading-tight">
            Trusted by organizations building for scale, compliance, and growth.
          </h2>
          <p className="text-lg text-[#2C3E50] max-w-3xl mx-auto leading-relaxed">
            From startups to established enterprises, we partner with teams that value transparency, quality, and long-term collaboration.
          </p>
        </motion.div>

        {/* Logos Carousel */}
        <motion.div 
          className="overflow-hidden mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* First Row - Moving Left */}
          <div className="relative mb-8 overflow-hidden">
            <motion.div
              className="flex gap-16"
              initial={{ x: 0 }}
              animate={{ x: -1440 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              }}
            >
              {/* Triple logos for ultra-smooth seamless loop */}
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-16 shrink-0">
                  {[...Array(6)].map((_, index) => (
                    <div
                      key={index}
                      className="w-[200px] flex items-center justify-center shrink-0"
                    >
                      <div className="text-[#2C3E50] opacity-30 hover:opacity-70 transition-all duration-300">
                        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 20L15 10L20 20L15 30L10 20Z" fill="currentColor" opacity="0.6"/>
                          <text x="28" y="25" fill="currentColor" fontSize="14" fontWeight="600">logoipsum</text>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Moving Right */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-16"
              initial={{ x: -1440 }}
              animate={{ x: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              }}
            >
              {/* Triple logos for ultra-smooth seamless loop */}
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-16 shrink-0">
                  {[...Array(6)].map((_, index) => (
                    <div
                      key={index}
                      className="w-[200px] flex items-center justify-center shrink-0"
                    >
                      <div className="text-[#2C3E50] opacity-30 hover:opacity-70 transition-all duration-300">
                        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 20L15 10L20 20L15 30L10 20Z" fill="currentColor" opacity="0.6"/>
                          <text x="28" y="25" fill="currentColor" fontSize="14" fontWeight="600">logoipsum</text>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button className="bg-[#1A2332] hover:bg-[#1A2332]/90 text-white px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="border-2 border-[#1A2332]/20 text-[#1A2332] hover:bg-[#F4F6F8] px-8 py-6 rounded-lg">
            View Our Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

