"use client";

import { Clock, Network, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function ProblemNarrative() {
  const problems = [
    {
      icon: Clock,
      title: "Development Delays",
      description:
        "Outdated platforms that struggle to scale with new enrollments or content.",
    },
    {
      icon: Network,
      title: "Scalability Issues",
      description:
        "Limited data insights for tracking learner progress and outcomes.",
    },
    {
      icon: TrendingUp,
      title: "Analytics Gaps",
      description:
        "Integration headaches across LMS, payment, and CRM systems.",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[32px]">
            The Modern EdTech Challenge
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            EdTech innovation often slows when technology can&apos;t keep up
            with ambition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-purple-50 via-purple-50/30 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <problem.icon className="h-7 w-7 text-primary" />
              </motion.div>
              <h3 className="text-xl mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-lg text-foreground">
            V-Accel helps education providers, startups, and platforms modernize
            learning systems — improving usability, performance, and student
            engagement through clean, scalable software architecture.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
