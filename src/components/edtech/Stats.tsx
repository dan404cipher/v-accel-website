"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent,
} from "motion/react";
import { useEffect, useRef, useState, useMemo } from "react";

const stats = [
  {
    number: "500+",
    label: "Educational Institutions",
    value: 500,
    suffix: "+",
  },
  {
    number: "1M+",
    label: "Active Students",
    value: 1,
    suffix: "M+",
  },
  {
    number: "99.9%",
    label: "Uptime Guarantee",
    value: 99.9,
    suffix: "%",
  },
  {
    number: "24/7",
    label: "Technical Support",
    value: 24,
    suffix: "/7",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (suffix === "%") {
      return latest.toFixed(1);
    }
    return Math.round(latest);
  });
  const [displayValue, setDisplayValue] = useState<string>("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayValue(String(latest));
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const controls = animate(count, value, {
            duration: 2,
            ease: "easeOut",
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [count, value]);

  return (
    <div ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </div>
  );
}

export function Stats() {
  // Memoize particle positions and animation values
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const particles = useMemo(() => {
    // Generate random values once on mount - this is intentional for performance
    const rng = () => Math.random();
    return Array.from({ length: 8 }, () => ({
      left: rng() * 100,
      top: rng() * 100,
      duration: 3 + rng() * 2,
      delay: rng() * 2,
    }));
  }, []);

  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-white/10"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              willChange: "transform, opacity",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
