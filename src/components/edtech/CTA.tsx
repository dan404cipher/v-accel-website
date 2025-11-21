"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl mb-6">
            Ready to build your next learning innovation?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether you&apos;re scaling an LMS or building a new digital learning experience, our team can help you move from idea to impact.
          </p>

          <motion.div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="group rounded-full"
              style={{ backgroundColor: "#582760" }}
            >
              <Link href="/contact#contact-form" className="flex items-center gap-2">
                Talk to Our Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
