import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Rocket, ArrowRight, Clock } from "lucide-react";

import { OptimizedBackground } from "./OptimizedBackground";
import { SectionBadge } from "./SectionBadge";

export function FinalCtaSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4F6F8] via-white to-[#E8F5F4]" style={{ zIndex: -20 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <OptimizedBackground variant="cta" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <SectionBadge
            icon={Rocket}
            label={"Let\u2019s Build Together"}
            className="mx-auto justify-center"
          />

          <h2 className="text-[#1A2332] text-3xl sm:text-4xl lg:text-5xl font-medium">
            {"Let\u2019s build something that lasts."}
          </h2>

          <p className="text-[#2C3E50] max-w-2xl mx-auto text-lg sm:text-xl font-medium leading-relaxed">
            {"If you're building in EdTech, FinTech, or Healthcare — and looking for a partner who understands compliance, scalability, and real-world delivery — we'd love to connect."}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-lg bg-[#1A2332] text-white hover:bg-[#0F141D] shadow-[0_4px_14px_0_rgba(26,35,50,0.39)] hover:shadow-[0_8px_24px_rgba(15,20,29,0.55)] transition-all duration-300 group text-base sm:text-lg py-5 px-7">
              Talk to Our Team
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-base sm:text-lg text-[#2C3E50]">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#00B8A9]" />
              <span className="font-bold">Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#00B8A9]" />
              <span className="font-bold">Free consultation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
