'use client';

import { motion } from "motion/react";
import { BookOpen, GraduationCap, Lightbulb, Award, Users, Brain, Code, Laptop } from "lucide-react";

const floatingIcons = [
  { Icon: BookOpen, delay: 0, duration: 20, x: "10%", y: "20%" },
  { Icon: GraduationCap, delay: 2, duration: 25, x: "80%", y: "15%" },
  { Icon: Lightbulb, delay: 4, duration: 22, x: "15%", y: "70%" },
  { Icon: Award, delay: 1, duration: 24, x: "75%", y: "65%" },
  { Icon: Users, delay: 3, duration: 23, x: "50%", y: "30%" },
  { Icon: Brain, delay: 5, duration: 21, x: "85%", y: "80%" },
  { Icon: Code, delay: 2.5, duration: 26, x: "25%", y: "50%" },
  { Icon: Laptop, delay: 4.5, duration: 19, x: "65%", y: "40%" },
];

const geometricShapes = [
  { size: 120, x: "5%", y: "10%", delay: 0, duration: 30 },
  { size: 80, x: "90%", y: "25%", delay: 2, duration: 35 },
  { size: 100, x: "20%", y: "80%", delay: 4, duration: 32 },
  { size: 90, x: "70%", y: "75%", delay: 1, duration: 28 },
  { size: 110, x: "45%", y: "15%", delay: 3, duration: 33 },
];

export function EdutechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      {/* Floating Geometric Shapes */}
      {geometricShapes.map((shape, index) => (
        <motion.div
          key={`shape-${index}`}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, rgba(156, 39, 176, 0.03) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={`icon-${index}`}
          className="absolute"
          style={{
            left: item.x,
            top: item.y,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.Icon 
            className="text-primary/20" 
            size={32}
            strokeWidth={1.5}
          />
        </motion.div>
      ))}

      {/* Checked Box Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <defs>
          <pattern
            id="checkbox-grid"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            {/* Grid lines */}
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#checkbox-grid)" />
      </svg>
      
      {/* Interactive Checkbox Pattern with Animation */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
        <defs>
          <pattern
            id="checkbox-pattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Checkbox squares at intersections */}
            <motion.rect
              x="57"
              y="57"
              width="6"
              height="6"
              fill="currentColor"
              className="text-primary"
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#checkbox-pattern)" />
      </svg>

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,300 Q250,250 500,300 T1000,300"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>

      {/* Particles */}
      {[...Array(12)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 rounded-full bg-primary/10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
