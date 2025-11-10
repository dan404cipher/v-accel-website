'use client';

import { BookOpen, LayoutDashboard, BarChart3, Plug } from "lucide-react";
import { motion } from "motion/react";

export function CoreSolutions() {
  const solutions = [
    {
      icon: BookOpen,
      title: "Learning Management Systems (LMS)",
      description: "Cloud-based, modular LMS solutions supporting personalized learning and content analytics.",
      number: "01",
    },
    {
      icon: LayoutDashboard,
      title: "Student Portals & Dashboards",
      description: "Seamless access to courses, assessments, and progress tracking in one unified experience.",
      number: "02",
    },
    {
      icon: BarChart3,
      title: "Analytics & Performance Insights",
      description: "Data-driven tools to measure engagement, outcomes, and learner success.",
      number: "03",
    },
    {
      icon: Plug,
      title: "System Integrations",
      description: "Connect CRMs, ERPs, and third-party tools — simplifying administration and reporting.",
      number: "04",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/40 relative overflow-hidden">
      {/* Soft decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
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
            Core EdTech Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Solutions designed to power modern learning ecosystems.
          </p>
        </motion.div>

        {/* Stacked Horizontal Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ x: 10 }}
              className="group relative bg-white rounded-2xl p-6 md:p-7 border border-gray-100 hover:border-primary/20 transition-all duration-500 hover:shadow-xl overflow-hidden cursor-pointer"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content Grid */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-5">
                {/* Number + Icon */}
                <div className="flex items-center gap-4 shrink-0">
                  {/* Large Number */}
                  <div className="text-5xl opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    {solution.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                    <solution.icon className="h-7 w-7" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Decorative arrow */}
                <div className="hidden md:block shrink-0 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
