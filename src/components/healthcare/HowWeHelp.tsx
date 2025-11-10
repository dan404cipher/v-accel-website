'use client';

import { motion } from "motion/react";
import { Search, PenTool, Rocket, Heart, Activity, Stethoscope, Pill, Shield, Users } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "Understand workflows, patient journey, and data requirements.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description: "Architect HL7/FHIR-based interoperable systems.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deliver",
    description: "Deploy HIPAA-compliant, secure, and scalable software.",
  },
];

export function HowWeHelp() {
  return (
    <section id="process" className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-[#4CAF50]/5 via-[#4DD0E1]/3 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimal Healthcare Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
          {/* Subtle Grid Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
            <defs>
              <pattern
                id="healthcare-grid-minimal"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#healthcare-grid-minimal)" />
          </svg>

          {/* Faded Healthcare Icons - More spread out */}
          <motion.div
            className="absolute"
            style={{ left: "8%", top: "15%" }}
            animate={{
              opacity: [0.03, 0.06, 0.03],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-20 h-20 text-[#4CAF50]" />
          </motion.div>

          <motion.div
            className="absolute"
            style={{ right: "15%", top: "10%" }}
            animate={{
              opacity: [0.03, 0.06, 0.03],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 25,
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Activity className="w-16 h-16 text-[#4CAF50]" />
          </motion.div>

          <motion.div
            className="absolute"
            style={{ left: "5%", bottom: "25%" }}
            animate={{
              opacity: [0.03, 0.06, 0.03],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 22,
              delay: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Stethoscope className="w-18 h-18 text-[#4CAF50]" />
          </motion.div>

          <motion.div
            className="absolute"
            style={{ right: "10%", bottom: "20%" }}
            animate={{
              opacity: [0.03, 0.06, 0.03],
              y: [0, -18, 0],
            }}
            transition={{
              duration: 23,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Pill className="w-14 h-14 text-[#4CAF50]" />
          </motion.div>

          <motion.div
            className="absolute"
            style={{ left: "50%", top: "30%" }}
            animate={{
              opacity: [0.03, 0.06, 0.03],
              y: [0, -22, 0],
            }}
            transition={{
              duration: 24,
              delay: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Shield className="w-16 h-16 text-[#4CAF50]" />
          </motion.div>

          <motion.div
            className="absolute"
            style={{ right: "25%", top: "50%" }}
            animate={{
              opacity: [0.03, 0.06, 0.03],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 21,
              delay: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Users className="w-15 h-15 text-[#4CAF50]" />
          </motion.div>

          {/* Subtle Gradient Orbs */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#4CAF50]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#4DD0E1]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-[#4CAF50]/10 rounded-full mb-6">
              <span className="text-[#4CAF50]">Our Process</span>
            </div>
            <h2 className="mb-6 text-[32px]">
              From interoperability to innovation — we engineer healthcare systems that work together.
            </h2>
            <p className="text-lg text-muted-foreground">
              Our process blends healthcare domain insight with robust engineering — ensuring every solution is designed to meet regulatory standards, integrate seamlessly, and improve user experience.
            </p>
          </motion.div>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4CAF50]/20 via-[#4CAF50]/30 to-[#4CAF50]/20 hidden md:block"></div>

          <div className="space-y-20 md:space-y-24">
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
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left relative`}>
                      {/* Decorative Healthcare Icons */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                        <Heart className={`absolute ${isEven ? 'right-0' : 'left-0'} top-0 w-12 h-12 text-[#4CAF50]`} />
                        <Stethoscope className={`absolute ${isEven ? 'left-4' : 'right-4'} bottom-4 w-10 h-10 text-[#4CAF50]`} />
                        <Activity className={`absolute ${isEven ? 'right-8' : 'left-8'} bottom-0 w-8 h-8 text-[#4CAF50]`} />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl mb-3 relative z-10">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 relative z-10">
                        {step.description}
                      </p>
                    </div>

                    {/* Center Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-[#4CAF50] flex items-center justify-center shadow-lg">
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
