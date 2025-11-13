import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Rocket, ArrowRight } from "lucide-react";

import { OptimizedBackground } from "./OptimizedBackground";

export function FinalCtaSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4F6F8] via-white to-[#E8F5F4]" style={{ zIndex: -20 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <OptimizedBackground variant="cta" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B8A9]/10 rounded-full border border-[#00B8A9]/20">
            <Rocket className="w-4 h-4 text-[#00B8A9]" />
            <span className="text-sm text-[rgb(26,35,50)]">Let's Build Together</span>
          </div>

          <h2 className="text-[#1A2332] text-[32px] font-medium">
            Let's talk about what's slowing your next release.
          </h2>

          <p className="text-[#2C3E50] max-w-2xl mx-auto text-lg font-normal">
            Whether you're navigating compliance hurdles or development delays, our team can help you plan the right approach — step by step.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-lg bg-[#1A2332] text-white hover:bg-[#0F141D] shadow-[0_4px_14px_0_rgba(26,35,50,0.39)] hover:shadow-[0_8px_24px_rgba(15,20,29,0.55)] transition-all duration-300 group">
              Talk to Our Team
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="pt-6 flex items-center justify-center gap-6 text-sm text-[#2C3E50]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Free consultation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
