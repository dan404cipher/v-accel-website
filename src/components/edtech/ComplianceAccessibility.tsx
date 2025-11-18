'use client';

import { Eye, Shield, Network, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function ComplianceAccessibility() {
  const features = [
    {
      icon: Eye,
      title: "Accessibility First",
      description: "WCAG 2.1 compliant interfaces ensuring inclusive learning experiences for all users.",
    },
    {
      icon: Shield,
      title: "Security by Design",
      description: "GDPR and ISO 27001 guidelines integrated into every layer of development.",
    },
    {
      icon: Network,
      title: "Data Integrity",
      description: "Secure data flows with encryption, auditing, and transparent privacy controls.",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[32px]">
            Built for accessibility, security, and reliability
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We follow international standards for accessibility (WCAG 2.1) and ensure all systems meet GDPR and ISO 27001 guidelines.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 h-full border-2 border-gray-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                {/* Left Border Accent */}
                <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-primary via-purple-500 to-primary rounded-full"></div>
                
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* Icon - Floating style */}
                <div className="mb-6 relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-14 h-14 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Title */}
                <h3 className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Decorative dots */}
                <div className="absolute bottom-4 right-4 flex gap-1 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our engineering approach combines <span className="text-primary">security-by-design</span> and <span className="text-primary">learner-first UX</span> to support compliance and inclusivity from day one.
          </p>
          
          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
            View Compliance Standards
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}
