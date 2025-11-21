"use client";

import {
  GraduationCap,
  BookOpen,
  BarChart3,
  Users,
  Shield,
  Puzzle,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";
import { createSeededRandom } from "@/lib/seeded-random";

const services = [
  {
    icon: GraduationCap,
    title: "Learning Management System",
    description:
      "Enterprise-grade LMS platform with comprehensive course management, student tracking, and interactive learning tools for modern education.",
  },
  {
    icon: BookOpen,
    title: "Digital Content Integration",
    description:
      "Seamless integration with popular digital textbooks, educational resources, and multimedia content platforms for enhanced learning experiences.",
  },
  {
    icon: BarChart3,
    title: "Student Performance Analytics",
    description:
      "Advanced analytics and reporting tools providing actionable insights into student behavior, learning patterns, and academic progress.",
  },
  {
    icon: Users,
    title: "Virtual Classroom Platform",
    description:
      "Connect seamlessly with students through real-time video conferencing, interactive whiteboards, and collaborative learning spaces.",
  },
  {
    icon: Shield,
    title: "Data Security & Privacy",
    description:
      "Comprehensive analytics and reporting tools providing insights into student performance, engagement metrics, and institutional effectiveness.",
  },
  {
    icon: Puzzle,
    title: "Third-Party Integration",
    description:
      "Automated compliance monitoring, data protection tools, and security measures to ensure adherence to educational regulations and standards.",
  },
];

export function Services() {
  // Memoize particle positions and animation values
  const particles = useMemo(() => {
    const rng = createSeededRandom(241);
    return Array.from({ length: 3 }, () => ({
      left: rng() * 100,
      top: rng() * 100,
      duration: 20 + rng() * 10,
      delay: rng() * 5,
    }));
  }, []);

  return (
    <section
      id="services"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Mild Interactive Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/3"></div>

        {/* Floating geometric shapes */}
        {[
          { size: 100, x: "8%", y: "15%", delay: 0, duration: 35 },
          { size: 80, x: "85%", y: "20%", delay: 2, duration: 40 },
        ].map((shape, index) => (
          <motion.div
            key={`shape-${index}`}
            className="absolute rounded-full"
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
              background: `radial-gradient(circle, rgba(156, 39, 176, 0.02) 0%, transparent 70%)`,
              willChange: "transform",
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Subtle dot grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
          <defs>
            <pattern
              id="service-dot-grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="1"
                fill="currentColor"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#service-dot-grid)"
          />
        </svg>

        {/* Minimal particles */}
        {particles.map((particle, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-1 h-1 rounded-full bg-primary/5"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              willChange: "transform, opacity",
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">
              Key Features
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-[32px]">
            Powerful Capabilities for Modern Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform delivers comprehensive functionality to power your
            educational services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-primary transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4">
                <motion.div
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon
                    className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </motion.div>
              </div>
              <h3 className="mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
