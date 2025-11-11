"use client";

import { motion, useInView } from "motion/react";
import { Shield, Lock, FileCheck, CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";

const standards = [
  {
    icon: Shield,
    label: "HIPAA",
    description: "Health insurance data protection",
  },
  {
    icon: Lock,
    label: "SOC2",
    description: "Security & availability controls",
  },
  {
    icon: FileCheck,
    label: "PCI DSS",
    description: "Payment card data security",
  },
  {
    icon: CheckCircle2,
    label: "ISO 27001",
    description: "Information security management",
  },
];

export function ComplianceSecurity() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const [hoveredWord, setHoveredWord] = useState<number | null>(null);

  // Split the heading into words for animation
  const headingText = "Compliance isn't an afterthought — it's engineered into every build.";
  const words = headingText.split(" ");

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Animated background with grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,179,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,179,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Gradient orbs */}
      <motion.div 
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badge */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-[#45647B]/10 rounded-full"
          >
            <span className="text-[#45647B]">Compliance & Security</span>
          </motion.div>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Bento Grid Standards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {/* Featured Card - HIPAA (Top Left, Larger) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="col-span-1 row-span-2"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="h-full bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 rounded-3xl p-6 shadow-lg backdrop-blur-sm relative overflow-hidden group"
                >
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-50" />
                  
                  <div className="relative flex flex-col items-center justify-center h-full space-y-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <Shield className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="text-xl text-foreground">
                        {standards[0].label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {standards[0].description}
                      </p>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* SOC2 Card (Top Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-1"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="h-full bg-white border-2 border-primary/20 rounded-3xl p-5 shadow-lg backdrop-blur-sm relative overflow-hidden group"
                >
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Lock className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-foreground">
                        {standards[1].label}
                      </h3>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* PCI DSS Card (Middle Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="col-span-1"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="h-full bg-white border-2 border-primary/20 rounded-3xl p-5 shadow-lg backdrop-blur-sm relative overflow-hidden group"
                >
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <FileCheck className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-foreground">
                        {standards[2].label}
                      </h3>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* ISO 27001 Card (Bottom, Full Width) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="col-span-2"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 rounded-3xl p-6 shadow-lg backdrop-blur-sm relative overflow-hidden group"
                >
                  {/* Decorative gradient */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-50" />
                  
                  <div className="relative flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg text-foreground mb-1">
                        {standards[3].label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {standards[3].description}
                      </p>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 ref={headingRef} className="mb-6 lg:text-[42px] leading-tight text-[40px]">
                {words.map((word, index) => {
                  // Highlight specific important words
                  const isHighlightWord = 
                    word === "Compliance" || 
                    word === "afterthought" || 
                    word === "engineered";
                  
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                        ease: "easeOut"
                      }}
                      className="inline-block mr-[0.3em]"
                    >
                      <motion.span
                        onHoverStart={() => setHoveredWord(index)}
                        onHoverEnd={() => setHoveredWord(null)}
                        className={`inline-block cursor-default ${
                          isHighlightWord 
                            ? "bg-gradient-to-r from-[#FFB300] to-[#FFA000] bg-clip-text text-transparent" 
                            : ""
                        }`}
                        animate={{
                          scale: hoveredWord === index ? 1.1 : 1,
                          y: hoveredWord === index ? -2 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                      >
                        {word}
                      </motion.span>
                    </motion.span>
                  );
                })}
              </h2>
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg text-muted-foreground"
                >
                  Our engineering frameworks are designed around{" "}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-block text-[#FFB300] cursor-default"
                  >
                    security-first principles
                  </motion.span>
                  .
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-muted-foreground"
                >
                  We follow strict adherence to{" "}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-block text-[#FFB300] cursor-default"
                  >
                    SOC2, PCI DSS, and ISO standards
                  </motion.span>
                  , ensuring every system we deploy is compliant, resilient, and audit-ready.
                </motion.p>
              </div>
            </div>

            {/* Trust Statement with Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <p className="text-muted-foreground pt-2">
                Whether it's sensitive user data, payment APIs, or KYC integrations — we build with trust at the core.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
