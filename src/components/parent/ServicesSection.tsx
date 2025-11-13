"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Building2, GraduationCap, IndianRupee, HeartPulse, ArrowRight } from "lucide-react";
import { sectors } from "@/config/services";

export function ServicesSection() {
  // Get the 3 services: edtech, fintech, healthcare
  const edtechService = sectors.find(s => s.slug === "edtech");
  const fintechService = sectors.find(s => s.slug === "fintech");
  const healthcareService = sectors.find(s => s.slug === "healthcare");

  const serviceCards = [
    {
      service: edtechService,
      icon: GraduationCap,
      href: "/services/edtech",
      delay: 0.1,
    },
    {
      service: fintechService,
      icon: IndianRupee,
      href: "/services/fintech",
      delay: 0.2,
    },
    {
      service: healthcareService,
      icon: HeartPulse,
      href: "/services/healthcare",
      delay: 0.3,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B8A9]/10 rounded-full border border-[#00B8A9]/20 mb-6">
            <Building2 className="w-4 h-4 text-[#00B8A9]" />
            <span className="text-sm text-[rgb(26,35,50)]">Our Services</span>
          </div>
          <h2 className="mb-4 text-[#1A2332] text-[32px] font-medium">
            Comprehensive software solutions for your business needs.
          </h2>
          <p className="text-[#2C3E50] font-normal">
            From custom development to team augmentation, we provide the exact support you need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {serviceCards.map(({ service, icon: Icon, href, delay }) => {
            if (!service) return null;
            
            return (
              <Link key={service.slug} href={href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#00B8A9]/30 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full"
                >
                  <div className="w-14 h-14 bg-[#00B8A9]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00B8A9]/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#00B8A9]" />
                  </div>
                  <h3 className="text-[#1A2332] mb-3 text-xl font-medium">{service.title}</h3>
                  <p className="text-[#2C3E50] mb-4 font-normal">{service.headline}</p>
                  <div className="flex items-center text-[#00B8A9] group-hover:text-[#1A2332] transition-colors duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

