"use client";

import { BookOpen, GraduationCap, Lightbulb, Award } from "lucide-react";
import { useMemo } from "react";
import { useViewportAnimation } from "@/hooks/useViewportAnimation";

import { createSeededRandom } from "@/lib/seeded-random";

const floatingIcons = [
  { Icon: BookOpen, delay: 0, duration: 20, x: "10%", y: "20%" },
  { Icon: GraduationCap, delay: 2, duration: 25, x: "80%", y: "15%" },
  { Icon: Lightbulb, delay: 4, duration: 22, x: "15%", y: "70%" },
  { Icon: Award, delay: 1, duration: 24, x: "75%", y: "65%" },
];

const geometricShapes = [
  { size: 120, x: "5%", y: "10%", delay: 0, duration: 30 },
  { size: 80, x: "90%", y: "25%", delay: 2, duration: 35 },
  { size: 100, x: "20%", y: "80%", delay: 4, duration: 32 },
];

export function EdutechBackground() {
  const { ref } = useViewportAnimation({ rootMargin: "-100px" });
  
  // Memoize particle positions and animation values to prevent recalculation on every render
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const particles = useMemo(() => {
    const rng = createSeededRandom(137); // deterministic seed for SSR/client parity
    return Array.from({ length: 6 }, () => ({
      left: rng() * 100,
      top: rng() * 100,
      duration: 15 + rng() * 10,
      delay: rng() * 5,
    }));
  }, []);
  
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none play-animations">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      {/* Floating Geometric Shapes - CSS animations */}
      {geometricShapes.map((shape, index) => (
        <div
          key={`shape-${index}`}
          className="absolute rounded-full animate-float-simple gpu-accelerated"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, rgba(156, 39, 176, 0.03) 0%, transparent 70%)`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}

      {/* Floating Icons - CSS animations */}
      {floatingIcons.map((item, index) => (
        <div
          key={`icon-${index}`}
          className="absolute animate-float-up-down gpu-accelerated"
          style={{
            left: item.x,
            top: item.y,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          <item.Icon 
            className="text-primary/20" 
            size={32}
            strokeWidth={1.5}
          />
        </div>
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
      
      {/* Static Checkbox Pattern - Removed complex animation for performance */}
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
            {/* Checkbox squares at intersections - static for performance */}
            <rect
              x="57"
              y="57"
              width="6"
              height="6"
              fill="currentColor"
              className="text-primary"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#checkbox-pattern)" />
      </svg>

      {/* Static Lines - Removed path animation for performance */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <path
          d="M0,100 Q250,50 500,100 T1000,100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
        />
        <path
          d="M0,300 Q250,250 500,300 T1000,300"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
        />
      </svg>

      {/* Particles - CSS animations */}
      {particles.map((particle, index) => (
        <div
          key={`particle-${index}`}
          className="absolute w-1 h-1 rounded-full bg-primary/10 animate-float-dot gpu-accelerated"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
