"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { memo } from "react";
import { GraduationCap, IndianRupee, HeartPulse } from "lucide-react";
import Link from "next/link";
import edtechHero from "@assets/Edutech Hero section.png";
import fintechHero from "@assets/fintech.png";
import healthcareHero from "@assets/healthcare.png";

export const FigmaIndustryCards = memo(function FigmaIndustryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {/* EdTech Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white flex flex-col gap-0 overflow-hidden rounded-[14px] shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
      >
        <Link href="/services/edtech" className="flex flex-col gap-0">
        <div className="relative w-full bg-gray-50 overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] flex items-center justify-center">
            <Image
              alt="EdTech Dashboard"
              className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
              src={edtechHero}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={90}
          />
        </div>
        <div className="flex flex-col gap-4 px-6 sm:px-8 pb-6 sm:pb-8 pt-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#00B8A9]/10 rounded-full group-hover:bg-[#00B8A9]/20 transition-colors">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B8A9]" strokeWidth={2} />
          </div>
          <h3 className="text-[#1a2332] text-base sm:text-[16px] font-normal leading-[22px] sm:leading-[24px] tracking-[-0.3125px]">
            EdTech
          </h3>
          <p className="text-[#2c3e50] text-sm sm:text-[16px] font-normal leading-[20px] sm:leading-[24px] tracking-[-0.3125px]">
            Portals, analytics dashboards, and learning management integrations that elevate the digital classroom.
          </p>
        </div>
        </Link>
      </motion.div>

      {/* FinTech Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white flex flex-col gap-0 overflow-hidden rounded-[14px] shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
      >
        <Link href="/services/fintech" className="flex flex-col gap-0">
        <div className="relative w-full bg-gray-50 overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] flex items-center justify-center">
            <Image
              alt="FinTech Platform"
              className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
              src={fintechHero}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={90}
          />
        </div>
        <div className="flex flex-col gap-4 px-6 sm:px-8 pb-6 sm:pb-8 pt-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#00B8A9]/10 rounded-full group-hover:bg-[#00B8A9]/20 transition-colors">
            <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B8A9]" strokeWidth={2} />
          </div>
          <h3 className="text-[#1a2332] text-base sm:text-[16px] font-normal leading-[22px] sm:leading-[24px] tracking-[-0.3125px]">
            FinTech
          </h3>
          <p className="text-[#2c3e50] text-sm sm:text-[16px] font-normal leading-[20px] sm:leading-[24px] tracking-[-0.3125px]">
            Lending automation, transaction systems, and SOC2-ready infrastructures that keep compliance simple.
          </p>
        </div>
        </Link>
      </motion.div>

      {/* Healthcare Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white flex flex-col gap-0 overflow-hidden rounded-[14px] shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
      >
        <Link href="/services/healthcare" className="flex flex-col gap-0">
        <div className="relative w-full bg-gray-50 overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] flex items-center justify-center">
            <Image
              alt="Healthcare Platform"
              className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
              src={healthcareHero}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={90}
          />
        </div>
        <div className="flex flex-col gap-4 px-6 sm:px-8 pb-6 sm:pb-8 pt-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#00B8A9]/10 rounded-full group-hover:bg-[#00B8A9]/20 transition-colors">
            <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B8A9]" strokeWidth={2} />
          </div>
          <h3 className="text-[#1a2332] text-base sm:text-[16px] font-normal leading-[22px] sm:leading-[24px] tracking-[-0.3125px]">
            Healthcare
          </h3>
          <p className="text-[#2c3e50] text-sm sm:text-[16px] font-normal leading-[20px] sm:leading-[24px] tracking-[-0.3125px]">
            HL7/FHIR-based integrations, EHR systems, and HIPAA-compliant patient platforms improving care delivery.
          </p>
        </div>
        </Link>
      </motion.div>
    </div>
  );
});
