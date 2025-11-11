'use client';

import { motion } from "motion/react";
import { Heart, Activity, Stethoscope, Cross, Users, Zap } from "lucide-react";

const floatingIcons = [
  { Icon: Heart, delay: 0, duration: 20, x: "10%", y: "20%" },
  { Icon: Activity, delay: 2, duration: 25, x: "80%", y: "10%" },
  { Icon: Stethoscope, delay: 4, duration: 22, x: "15%", y: "70%" },
  { Icon: Cross, delay: 1, duration: 24, x: "85%", y: "60%" },
];

export function HealthcareBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs - soft blue/green healthcare tones */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#4DD0E1]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl"></div>
      
      {/* Animated Grid Lines - representing data flow */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern
            id="healthcare-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#healthcare-grid)" />
      </svg>

      {/* Floating Healthcare Icons */}
      {floatingIcons.map((item, index) => {
        const IconComponent = item.Icon;
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
              willChange: 'transform, opacity',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.03, 0.08, 0.03],
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <IconComponent className="w-12 h-12 text-primary" />
          </motion.div>
        );
      })}

      {/* Heartbeat Waveform Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <motion.path
          d="M 0 300 L 100 300 L 120 250 L 140 350 L 160 280 L 180 300 L 400 300 L 420 250 L 440 350 L 460 280 L 480 300 L 700 300 L 720 250 L 740 350 L 760 280 L 780 300 L 1000 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M 0 500 L 150 500 L 170 450 L 190 550 L 210 480 L 230 500 L 450 500 L 470 450 L 490 550 L 510 480 L 530 500 L 750 500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Floating Circles representing network/connectivity */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${10 + i * 25}%`,
            top: `${30 + (i % 3) * 20}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Pulse effect - representing heartbeat */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/10 rounded-full"
        style={{ willChange: 'transform, opacity' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-32 w-24 h-24 border-2 border-primary/10 rounded-full"
        style={{ willChange: 'transform, opacity' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.05, 0.2],
        }}
        transition={{
          duration: 2.5,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
