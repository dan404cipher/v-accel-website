"use client";

import { motion } from "motion/react";
import { useState, useEffect, useMemo, memo } from "react";

interface OptimizedBackgroundProps {
  variant?: 'hero' | 'cta';
}

// Memoized dot component to prevent unnecessary re-renders
const FloatingDot = memo(({ dot }: { dot: any }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      left: dot.x,
      top: dot.y,
      width: dot.size,
      height: dot.size,
      backgroundColor: dot.color,
      willChange: 'transform, opacity',
    }}
    animate={{
      opacity: [0, 0.4, 0.7, 0.4, 0],
      scale: [0.8, 1, 1.2, 1, 0.8],
      y: [0, -30, -60, -30, 0],
    }}
    transition={{
      duration: dot.duration,
      repeat: Infinity,
      delay: dot.delay,
      ease: "easeInOut",
    }}
  />
));

FloatingDot.displayName = 'FloatingDot';

export const OptimizedBackground = memo(({ variant = 'hero' }: OptimizedBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 500, y: 500 });

  useEffect(() => {
    let rafId: number;
    let lastTime = 0;
    const throttleMs = 50; // Throttle mouse updates to 20fps for better performance

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastTime < throttleMs) return;
      
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
        lastTime = currentTime;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Memoize dots configuration to prevent recreation on every render
  const dots = useMemo(() => {
    const baseConfig = variant === 'hero' ? [
      { id: 1, x: '10%', y: '20%', size: 4, color: '#00B8A9', delay: 0, duration: 4 },
      { id: 2, x: '85%', y: '15%', size: 3, color: '#00B8A9', delay: 0.5, duration: 5 },
      { id: 3, x: '20%', y: '70%', size: 5, color: '#FF6B6B', delay: 1, duration: 4.5 },
      { id: 4, x: '75%', y: '60%', size: 3, color: '#00B8A9', delay: 1.5, duration: 5.5 },
      { id: 5, x: '45%', y: '25%', size: 4, color: '#1A2332', delay: 2, duration: 4 },
      { id: 6, x: '60%', y: '80%', size: 3, color: '#FF6B6B', delay: 2.5, duration: 5 },
    ] : [
      { id: 1, x: '15%', y: '25%', size: 4, color: '#00B8A9', delay: 0, duration: 4.5 },
      { id: 2, x: '80%', y: '20%', size: 3, color: '#00B8A9', delay: 0.7, duration: 5.2 },
      { id: 3, x: '25%', y: '75%', size: 4, color: '#FF6B6B', delay: 1.2, duration: 4.8 },
      { id: 4, x: '70%', y: '65%', size: 3, color: '#00B8A9', delay: 1.8, duration: 5.5 },
    ];
    return baseConfig;
  }, [variant]);

  // Memoize inline styles
  const spotlightStyle = useMemo(() => ({
    left: mousePosition.x - 400,
    top: mousePosition.y - 400,
    width: 800,
    height: 800,
    background: 'radial-gradient(circle, rgba(0, 184, 169, 0.08), rgba(0, 184, 169, 0.03) 40%, transparent 70%)',
    borderRadius: '50%',
    willChange: 'transform',
  }), [mousePosition.x, mousePosition.y]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle mouse spotlight - throttled and optimized */}
      <motion.div
        className="absolute pointer-events-none"
        style={spotlightStyle}
      />

      {/* Animated Wave Line 1 - Optimized with fewer points */}
      <svg className="absolute top-[15%] left-0 w-full h-[200px]" style={{ opacity: 0.06 }}>
        <motion.path
          d="M0,100 Q500,50 1000,100 T2000,100"
          fill="none"
          stroke="#00B8A9"
          strokeWidth="2"
          animate={{
            d: [
              "M0,100 Q500,50 1000,100 T2000,100",
              "M0,100 Q500,150 1000,100 T2000,100",
              "M0,100 Q500,50 1000,100 T2000,100",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Animated Wave Line 2 - Optimized */}
      <svg className="absolute top-[50%] left-0 w-full h-[150px]" style={{ opacity: 0.05 }}>
        <motion.path
          d="M0,75 Q600,100 1200,75 T2400,75"
          fill="none"
          stroke="#FF6B6B"
          strokeWidth="2"
          animate={{
            d: [
              "M0,75 Q600,100 1200,75 T2400,75",
              "M0,75 Q600,50 1200,75 T2400,75",
              "M0,75 Q600,100 1200,75 T2400,75",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>

      {/* Minimal floating dots with optimized rendering */}
      {dots.map((dot) => (
        <FloatingDot key={dot.id} dot={dot} />
      ))}

      {/* Optimized gradient orbs with CSS transform */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 184, 169, 0.06), transparent 70%)',
          willChange: 'transform',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 107, 107, 0.04), transparent 70%)',
          willChange: 'transform',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
});

OptimizedBackground.displayName = 'OptimizedBackground';
