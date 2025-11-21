"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { FinancialBackground } from "./FinancialBackground";
import { motion } from "motion/react";

export function CTA() {
  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-card overflow-hidden">
      <FinancialBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&apos;s build your next FinTech innovation — securely and confidently
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            If compliance roadblocks or scaling issues are slowing your FinTech roadmap, let&apos;s discuss how our engineering team can help.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact#contact-form" className="flex items-center gap-2">
                Talk to Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-2 text-lg md:text-xl">
              <Mail className="h-4 w-4" />
              <span className="font-extrabold">info@v-accel.ai</span>
            </div>
            <div className="flex items-center gap-2 text-lg md:text-xl">
              <Phone className="h-4 w-4" />
              <span className="font-extrabold">+91-86102 62853</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
