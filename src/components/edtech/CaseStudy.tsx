"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import laptopImage from "@assets/02421010d110dd5b7c02805ab78d71af827a8ddf.png";
import { motion } from "motion/react";

export function CaseStudy() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
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
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">
              Case Study
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-6 text-[32px]">
            Transforming a learning portal for a national training provider
          </h2>
        </motion.div>

        {/* Split Layout - Content Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Case Narrative */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                A client's existing LMS couldn't handle growing enrollments or
                data visibility needs. The platform was experiencing performance
                issues, lack of real-time analytics, and limited scalability
                options.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl">Our Solution</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Redesigned their system with scalable cloud architecture
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Added custom analytics dashboards for real-time insights
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Implemented personalized learning pathways
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Integrated automated reporting and compliance tracking
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl">The Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Within six months, the platform saw a{" "}
                <span className="text-green-600">
                  28% improvement in course completion rates
                </span>
                , tripled enrollment capacity, and provided educators with
                actionable data to enhance learning outcomes.
              </p>
            </div>

            <div className="pt-4">
              <Button
                className="text-white rounded-full px-6"
                style={{ backgroundColor: "#582760" }}
              >
                See More EdTech Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative lg:scale-125 lg:ml-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <ImageWithFallback
              src={laptopImage.src}
              alt="Learning portal dashboard on laptop and mobile devices"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
