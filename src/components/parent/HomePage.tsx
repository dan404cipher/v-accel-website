"use client";

import { motion } from "motion/react";
import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  memo,
  useRef,
} from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { ProblemCard } from "./ProblemCard";
import { OptimizedBackground } from "./OptimizedBackground";

// Dynamic imports for code splitting - load heavy components only when needed
const FigmaIndustryCards = dynamic(
  () =>
    import("./FigmaIndustryCards").then((mod) => ({
      default: mod.FigmaIndustryCards,
    })),
  {
    ssr: true,
    loading: () => (
      <div className="grid md:grid-cols-3 gap-8 h-[400px] animate-pulse bg-gray-100 rounded-lg" />
    ),
  }
);

const TechStack = dynamic(
  () => import("./TechStack").then((mod) => ({ default: mod.TechStack })),
  {
    ssr: false,
    loading: () => (
      <div className="h-[600px] animate-pulse bg-[#F4F6F8] rounded-lg" />
    ),
  }
);

const TestimonialCarousel = dynamic(
  () =>
    import("./TestimonialCarousel").then((mod) => ({
      default: mod.TestimonialCarousel,
    })),
  {
    ssr: true,
    loading: () => (
      <div className="h-[300px] animate-pulse bg-gray-100 rounded-lg" />
    ),
  }
);

const ServicesSection = dynamic(
  () =>
    import("./ServicesSection").then((mod) => ({
      default: mod.ServicesSection,
    })),
  {
    ssr: true,
  }
);

const FinalCtaSection = dynamic(
  () =>
    import("./FinalCtaSection").then((mod) => ({
      default: mod.FinalCtaSection,
    })),
  {
    ssr: true,
  }
);
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  ShieldAlert,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Shield,
  FileCheck,
  MessageCircle,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import leadAccelImage from "@assets/d64e6d6646625791c48e3bc956b41ef6548cda47.png";
import { SectionBadge } from "./SectionBadge";

// Animated Product Text Component - Memoized for better performance
const AnimatedProductText = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const industries = useMemo(() => ["EdTech", "Fintech", "Healthcare"], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [industries.length]);

  const minWidthStyle = useMemo(
    () => ({ minWidth: "clamp(200px, 20vw, 280px)" }),
    []
  );

  return (
    <span className="block mt-2 sm:mt-3">
      <span className="text-[#2C3E50]">AI-powered </span>
      <span
        className="inline-block relative text-center sm:text-left"
        style={minWidthStyle}
      >
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 bg-gradient-to-r from-[#00B8A9] to-[#1A2332] bg-clip-text text-transparent whitespace-nowrap font-semibold"
        >
          {industries[currentIndex]}
        </motion.span>
        <span className="invisible whitespace-nowrap">{industries[2]}</span>
      </span>
    </span>
  );
});

AnimatedProductText.displayName = "AnimatedProductText";

export function HomePage() {
  const pathname = usePathname();

  // Clean up any theme classes from document element when home page mounts or pathname changes
  useEffect(() => {
    const root = document.documentElement;
    // Remove any theme classes that might have been applied
    root.classList.remove("fintech-theme", "edtech-theme", "healthcare-theme");
    // Force a reflow to ensure styles are recalculated
    void root.offsetHeight;
  }, [pathname]);

  // Mouse position for interactive background - optimized with useCallback
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Hover state for Challenges section animations
  const [isChallengesHovered, setIsChallengesHovered] = useState(false);

  // Navigation handler - memoized
  const onNavigate = useCallback((section: string) => {
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Throttled mouse move handler - heavily throttled for performance
  const lastMouseMoveTime = useRef(0);
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    // Throttle to 60fps max (16ms = ~60fps)
    const now = Date.now();
    if (now - lastMouseMoveTime.current >= 16) {
      lastMouseMoveTime.current = now;
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }, []);

  // Memoize grid mask style for performance
  const gridMaskStyle = useMemo(
    () => ({
      backgroundImage: `
      linear-gradient(to right, #FF6B6B 1px, transparent 1px),
      linear-gradient(to bottom, #FF6B6B 1px, transparent 1px)
    `,
      backgroundSize: "60px 60px",
      maskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.02) 100%)`,
      WebkitMaskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.02) 100%)`,
    }),
    [mousePosition.x, mousePosition.y]
  );

  const secondaryGridMaskStyle = useMemo(
    () => ({
      backgroundImage: `
      linear-gradient(to right, #00B8A9 1px, transparent 1px),
      linear-gradient(to bottom, #00B8A9 1px, transparent 1px)
    `,
      backgroundSize: "60px 60px",
      backgroundPosition: "30px 30px",
      maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 60%, rgba(0,0,0,0) 100%)`,
      WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 60%, rgba(0,0,0,0) 100%)`,
    }),
    [mousePosition.x, mousePosition.y]
  );

  return (
    <div className="min-h-screen bg-[#F4F6F8]">
      {/* Section 1: Hero Area - Optimized */}
      <section className="relative overflow-hidden min-h-[100svh] flex items-center bg-gradient-to-br from-[#F4F6F8] via-white to-[#E8F5F4] py-24 sm:py-32">
        {/* Simple gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#F4F6F8] via-white to-[#E8F5F4]"
          style={{ zIndex: -20 }}
        />

        {/* Optimized Interactive background layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <OptimizedBackground variant="hero" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge with animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <SectionBadge
                icon={Sparkles}
                label="AI-Powered Innovation"
                className="mb-4 md:mb-6 mx-auto justify-center"
              />
            </motion.div>

            {/* Main heading with staggered animation */}
            <motion.h1
              className="text-[clamp(2.4rem,8vw,3rem)] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[clamp(3.5rem,5vw,5.5rem)] font-normal mb-4 sm:mb-6 leading-[1.05] text-balance px-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-[#2C3E50] text-[clamp(2.4rem,8vw,5.6rem)] sm:text-[clamp(2.8rem,6vw,5.6rem)]">
                Accelerate your business with
              </span>
              <AnimatedProductText />
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal px-2 sm:px-4 mb-6 md:mb-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From secure platforms to compliant integrations, we help companies
              turn complex requirements into scalable, reliable systems —
              delivered on time, every time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-3 md:gap-4 justify-center items-center flex-wrap px-2 sm:px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ willChange: "auto" }}
            >
              <div className="w-full sm:w-auto">
                <Button
                  size="default"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-lg px-6 md:px-8 py-4 text-sm md:text-base bg-[#1A2332] hover:bg-[#1A2332]/90 shadow-[0_4px_14px_0_rgba(26,35,50,0.39)] hover:shadow-[0_6px_20px_rgba(26,35,50,0.5)] transition-all group text-white h-12 md:h-14"
                  onClick={() => onNavigate("solutions")}
                >
                  Explore Industry Solutions
                  <div className="ml-2 inline-block">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </Button>
              </div>

              <div className="w-full sm:w-auto">
                <Button
                  size="default"
                  variant="outline"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-lg px-6 md:px-8 py-4 text-sm md:text-base border-2 border-black/80 bg-[rgba(255,255,255,0)] text-[rgb(44,62,80)] hover:border-black hover:bg-gray-50 shadow-[0_2px_10px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_14px_0_rgba(0,0,0,0.15)] transition-all h-12 md:h-14"
                  onClick={() => onNavigate("lead-accel")}
                >
                  See Our Product
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Pain-Point Narrative - Optimized */}
      <section
        className="relative py-16 md:py-20 bg-white overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsChallengesHovered(true)}
        onMouseLeave={() => setIsChallengesHovered(false)}
        style={{ willChange: "auto" }}
      >
        {/* Modern professional background - Optimized with memoized styles */}
        <div
          className={`absolute inset-0 overflow-hidden pointer-events-none ${
            isChallengesHovered ? "play-animations" : "pause-animations"
          }`}
        >
          {/* Interactive grid with fade effect - CSS animation for performance */}
          <div
            className="absolute inset-0 animate-breathe gpu-accelerated"
            style={{
              ...gridMaskStyle,
              animationDuration: "4s",
            }}
          />

          {/* Secondary grid layer with offset animation - CSS */}
          <div
            className="absolute inset-0 animate-breathe gpu-accelerated"
            style={{
              ...secondaryGridMaskStyle,
              animationDuration: "5s",
              animationDelay: "0.5s",
            }}
          />

          {/* Animated gradient orb - CSS animation - Starts subtle, increases */}
          <div
            className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] gpu-accelerated"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 107, 107, 0.15) 0%, transparent 70%)",
              filter: "blur(80px)",
              animation:
                "pulseOpacityStart 8s ease-out forwards, breathe 8s ease-in-out infinite 8s",
              opacity: 0.01,
            }}
          />

          <div
            className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] opacity-20 animate-breathe-large gpu-accelerated"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 184, 169, 0.12) 0%, transparent 70%)",
              filter: "blur(70px)",
              animationDuration: "10s",
              animationDelay: "1s",
            }}
          />

          {/* Floating minimal dots - CSS animations */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#00B8A9] animate-float-dot gpu-accelerated"
              style={{
                left: `${20 + i * 20}%`,
                top: `${25 + (i % 2) * 30}%`,
                opacity: 0.18,
                animationDuration: `${4 + i}s`,
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}

          {/* Modern line accents - CSS animation - Starts subtle, increases */}
          <div
            className="absolute top-1/3 left-0 right-0 h-px gpu-accelerated"
            style={{
              background:
                "linear-gradient(90deg, transparent, #FF6B6B 50%, transparent)",
              animation: "pulseOpacityStart 6s ease-out forwards",
              opacity: 0.01,
            }}
          />

          {/* Geometric modern shapes - CSS animations - Starts subtle, increases */}
          <div
            className="absolute top-1/4 right-1/4 w-40 h-40 animate-rotate-slow gpu-accelerated"
            style={{
              background: "linear-gradient(135deg, #FF6B6B, transparent)",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              animation:
                "pulseOpacityStart 4s ease-out forwards, rotate-slow 30s linear infinite 4s",
              opacity: 0.01,
            }}
          />

          <div
            className="absolute bottom-1/3 left-1/4 w-32 h-32 opacity-[0.03] animate-rotate-reverse gpu-accelerated"
            style={{
              background: "linear-gradient(135deg, #00B8A9, transparent)",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              animationDuration: "25s",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <SectionBadge
              icon={ShieldAlert}
              label="Challenges"
              className="mb-6 mx-auto justify-center"
            />
            <h2 className="mb-4 text-[#1A2332] text-2xl sm:text-[32px] text-center font-medium">
              {
                "Your growth shouldn't be slowed by technology bottlenecks."
              }
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10">
            <ProblemCard
              icon={Clock}
              text="Delayed releases because your in-house team is stretched thin?"
              index={0}
            />
            <ProblemCard
              icon={ShieldAlert}
              text="Compliance concerns holding back your next product launch?"
              index={1}
            />
            <ProblemCard
              icon={TrendingUp}
              text="Systems that don't scale with your users or operations?"
              index={2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[#2C3E50] text-lg font-normal">
              <SectionBadge
                as="span"
                label="V-Accel"
                className="mr-2 mb-0 align-middle"
              />{" "}
              helps organizations close these gaps — blending domain expertise
              and engineering depth to deliver software that accelerates your
              roadmap without compromising quality or compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Industry Focus */}
      <section id="industries" className="py-16 md:py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <SectionBadge
              icon={Target}
              label="Industry Expertise"
              className="mb-6 mx-auto justify-center"
            />
            <h2 className="mb-4 text-[#1A2332] text-2xl sm:text-[32px] font-medium">
              Purpose-built solutions across three critical industries.
            </h2>
            <p className="text-[#2C3E50] font-normal">
              We specialize in regulated sectors where security and compliance
              are non-negotiable.
            </p>
          </motion.div>

          <div className="mb-10">
            <FigmaIndustryCards />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="rounded-lg bg-[#1A2332] hover:bg-[#1A2332]/90 shadow-[0_4px_14px_0_rgba(26,35,50,0.39)] hover:shadow-[0_6px_20px_rgba(26,35,50,0.5)] transition-all duration-300"
            >
              Explore Industry Solutions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 4: LeadAccel Product */}
      <section
        id="leadaccel"
        className="py-16 md:py-20 bg-gradient-to-br from-[#E8F5F4] via-[#F4F6F8] to-[#E8F5F4]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <SectionBadge
              icon={FileCheck}
              label="Built by V-Accel"
              className="mx-auto justify-center"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Product Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="max-w-md mx-auto sm:max-w-lg">
                <ImageWithFallback
                  src={leadAccelImage}
                  alt="Project Accel CRM Interface"
                  className="w-full h-auto rounded-xl md:scale-110 lg:scale-145"
                />
              </div>
            </motion.div>

            {/* Right: Product Copy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6 lg:pl-0 xl:pl-20"
            >
              {/* Section Title */}
              <h2 className="text-[#1A2332] text-2xl sm:text-[32px] font-medium">
                Our Product
              </h2>

              <div className="space-y-4">
                <h2 className="text-[#1A2332] leading-relaxed font-normal text-base sm:text-lg text-left">
                  <SectionBadge
                    as="span"
                    label="Project Accel"
                    className="mr-2 sm:mr-3 mb-0 align-middle"
                  />
                  <span className="inline ">
                    A project management platform built for how{" "}
                  </span>
                  <span className="inline">
                    tech and service teams actually work.
                  </span>
                </h2>
                <p className="text-[#2C3E50] text-sm sm:text-base md:text-lg leading-relaxed font-normal text-left">
                  Developed from our experience managing complex client
                  projects, Project Accel helps teams plan, track, and deliver
                  work efficiently — keeping communication clear, progress
                  visible, and deadlines under control without the chaos of
                  spreadsheets and scattered tools.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00B8A9] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[#1A2332] font-medium">
                      Centralized Project Management
                    </div>
                    <div className="text-sm text-[#2C3E50] font-normal">
                      Plan, assign, and monitor tasks across teams in one
                      unified workspace.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00B8A9] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[#1A2332] font-medium">
                      Real-Time Progress Tracking
                    </div>
                    <div className="text-sm text-[#2C3E50] font-normal">
                      Get instant visibility into timelines, workloads, and
                      project health through live dashboards.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00B8A9] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[#1A2332] font-medium">
                      Collaboration Simplified
                    </div>
                    <div className="text-sm text-[#2C3E50] font-normal">
                      Share updates, files, and feedback seamlessly to keep
                      everyone aligned and accountable.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="rounded-lg bg-[#1A2332] hover:bg-[#1A2332]/90 shadow-[0_4px_14px_0_rgba(26,35,50,0.39)] hover:shadow-[0_6px_20px_rgba(26,35,50,0.5)] transition-all duration-300 group"
                >
                  Discover Project Accel
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Proof & Trust */}
      <section id="about" className="py-16 md:py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <SectionBadge
              icon={Shield}
              label="Proof & Trust"
              className="mb-6 mx-auto justify-center"
            />
            <h2 className="text-[#1A2332] text-2xl sm:text-[32px] mb-6 font-medium">
              Trusted by companies that build for scale and compliance.
            </h2>
            <p className="text-[#2C3E50] max-w-3xl mx-auto font-normal">
              We combine process discipline with practical engineering to
              deliver compliant, scalable, and maintainable solutions that drive
              real business value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center text-center shadow-lg border-t-4 border-[#00B8A9] hover:shadow-2xl transition-all duration-200 relative overflow-hidden group hover-scale gpu-accelerated">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B8A9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#00B8A9]/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#00B8A9]/20 transition-colors duration-200">
                    <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#00B8A9]" />
                  </div>
                  <div className="mb-2 text-[#1A2332] text-2xl sm:text-3xl font-semibold">
                    25+
                  </div>
                  <p className="text-[#2C3E50] text-sm sm:text-base font-normal">
                    Successful projects delivered
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center text-center shadow-lg border-t-4 border-[#FF6B6B] hover:shadow-2xl transition-all duration-200 relative overflow-hidden group hover-scale gpu-accelerated">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#FF6B6B]/20 transition-colors duration-200">
                    <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#FF6B6B]" />
                  </div>
                  <div className="mb-2 text-[#1A2332] text-2xl sm:text-3xl font-semibold">
                    3
                  </div>
                  <p className="text-[#2C3E50] text-sm sm:text-base font-normal">
                    Regulated industries served
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center text-center shadow-lg border-t-4 border-[#00B8A9] hover:shadow-2xl transition-all duration-200 relative overflow-hidden group hover-scale gpu-accelerated">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B8A9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#00B8A9]/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#00B8A9]/20 transition-colors duration-200">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#00B8A9]" />
                  </div>
                  <div className="mb-2 text-[#1A2332] text-2xl sm:text-3xl font-semibold">
                    5+
                  </div>
                  <p className="text-[#2C3E50] text-sm sm:text-base font-normal">
                    Years of excellence
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center text-center shadow-lg border-t-4 border-[#FF6B6B] hover:shadow-2xl transition-all duration-200 relative overflow-hidden group hover-scale gpu-accelerated">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#FF6B6B]/20 transition-colors duration-200">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#FF6B6B]" />
                  </div>
                  <div className="mb-2 text-[#1A2332] text-2xl sm:text-3xl font-semibold">
                    100%
                  </div>
                  <p className="text-[#2C3E50] text-sm sm:text-base font-normal">
                    Client satisfaction rate
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto mt-12 sm:mt-16 lg:mt-20 w-full overflow-hidden">
          <TechStack />
        </div>
      </section>

      {/* Section 6: Services */}
      <ServicesSection />

      {/* Section 7: Testimonials */}
      <section className="py-16 md:py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <SectionBadge
              icon={MessageCircle}
              label="Client Success Stories"
              className="mb-6 mx-auto justify-center"
            />
            <h2 className="mb-4 text-[#1A2332] text-2xl sm:text-[32px] font-medium">
              {"Hear from companies we\u2019ve helped scale."}
            </h2>
            <p className="text-[#2C3E50] font-normal">
              {
                "Real feedback from partners who\u2019ve trusted us with their most critical software projects."
              }
            </p>
          </motion.div>

          <TestimonialCarousel
            testimonials={[
              {
                quote:
                  "V-Accel helped us navigate HIPAA compliance while building our patient portal. Their expertise in healthcare tech was invaluable, and they delivered on time despite tight regulatory requirements.",
                author: "Sarah Mitchell",
                role: "CTO",
                company: "HealthStream Solutions",
              },
              {
                quote:
                  "The team\u2019s deep understanding of financial systems made our lending platform migration seamless. Their SOC2 experience gave our stakeholders confidence from day one.",
                author: "James Chen",
                role: "VP of Engineering",
                company: "CapitalFlow Financial",
              },
              {
                quote:
                  "From architecture to deployment, V-Accel brought both technical excellence and clear communication. Our EdTech platform now handles 10x the traffic with better performance.",
                author: "Maria Rodriguez",
                role: "Product Director",
                company: "EduVerse Learning",
              },
              {
                quote:
                  "Working with V-Accel on our telemedicine platform was exceptional. Their attention to security and compliance ensured we met all regulatory standards while delivering a seamless user experience.",
                author: "Dr. Robert Kim",
                role: "Chief Medical Officer",
                company: "MediConnect Health",
              },
              {
                quote:
                  "V-Accel transformed our payment processing system with modern architecture. Their FinTech expertise and proactive communication made this our smoothest vendor partnership to date.",
                author: "Emily Watson",
                role: "Director of Technology",
                company: "PayFlow Systems",
              },
              {
                quote:
                  "The team at V-Accel didn\u2019t just build our student management system\u2014they understood our educational mission. Their LeadAccel CRM integration saved us countless hours of manual work.",
                author: "Michael Torres",
                role: "Head of IT",
                company: "Scholar Academy",
              },
            ]}
          />
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B8A9]/20 via-[#1A2332]/10 to-[#00B8A9]/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-purple-100/20 to-pink-100/30" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
          {/* Glass Morphism Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[32px] p-6 md:p-12 lg:p-16"
          >
            {/* Glass Background Layers */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/50" />
            <div className="absolute inset-0 rounded-[32px] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]" />

            {/* Content */}
            <div className="relative">
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-6"
                >
                  <SectionBadge
                    as="span"
                    label="FAQs"
                    className="mb-0 uppercase tracking-wider"
                  />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl sm:text-[32px] text-[#1A2332] mb-2 font-medium"
                >
                  FAQs - Our Answers
                </motion.h2>
              </div>

              {/* FAQ Accordion */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-3xl mx-auto mb-8"
              >
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem
                    value="item-1"
                    className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-sm hover:shadow-lg hover:border-[#00B8A9]/30 data-[state=open]:border-[#00B8A9] data-[state=open]:shadow-lg data-[state=open]:bg-white/80 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-[#1A2332] text-left px-6 py-5 hover:no-underline group-hover:text-[#00B8A9] data-[state=open]:text-[#00B8A9] [&[data-state=open]>svg]:rotate-180 transition-colors duration-300">
                      <span className="pr-8">
                        How long does a typical project take?
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#2C3E50] px-6 pb-5 pt-1">
                      Project timelines vary based on scope and complexity. A
                      typical custom application takes 3-6 months from
                      requirements gathering to deployment. We provide detailed
                      project timelines during our initial consultation and
                      maintain transparent communication throughout development.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-sm hover:shadow-lg hover:border-[#00B8A9]/30 data-[state=open]:border-[#00B8A9] data-[state=open]:shadow-lg data-[state=open]:bg-white/80 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-[#1A2332] text-left px-6 py-5 hover:no-underline group-hover:text-[#00B8A9] data-[state=open]:text-[#00B8A9] [&[data-state=open]>svg]:rotate-180 transition-colors duration-300">
                      <span className="pr-8">
                        Do you provide ongoing support after launch?
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#2C3E50] px-6 pb-5 pt-1">
                      Yes, we offer flexible maintenance and support packages
                      tailored to your needs. This includes bug fixes, security
                      updates, performance monitoring, and feature enhancements.
                      Most clients opt for our managed service plans for peace
                      of mind.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-sm hover:shadow-lg hover:border-[#00B8A9]/30 data-[state=open]:border-[#00B8A9] data-[state=open]:shadow-lg data-[state=open]:bg-white/80 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-[#1A2332] text-left px-6 py-5 hover:no-underline group-hover:text-[#00B8A9] data-[state=open]:text-[#00B8A9] [&[data-state=open]>svg]:rotate-180 transition-colors duration-300">
                      <span className="pr-8">
                        What makes{" "}
                        <span className="text-[#00B8A9]">V-Accel</span>{" "}
                        different from other development firms?
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#2C3E50] px-6 pb-5 pt-1">
                      Our deep expertise in regulated industries (EdTech,
                      FinTech, Healthcare) sets us apart. We understand
                      compliance frameworks like HIPAA, SOC2, and ISO from the
                      ground up, which means we build security and compliance
                      into every line of code—not as an afterthought.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-sm hover:shadow-lg hover:border-[#00B8A9]/30 data-[state=open]:border-[#00B8A9] data-[state=open]:shadow-lg data-[state=open]:bg-white/80 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-[#1A2332] text-left px-6 py-5 hover:no-underline group-hover:text-[#00B8A9] data-[state=open]:text-[#00B8A9] [&[data-state=open]>svg]:rotate-180 transition-colors duration-300">
                      <span className="pr-8">
                        Can you work with our existing development team?
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#2C3E50] px-6 pb-5 pt-1">
                      Absolutely. We offer team augmentation services where our
                      engineers integrate seamlessly with your existing team. We
                      can also provide consulting, code reviews, and
                      architecture guidance to support your in-house development
                      efforts.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-5"
                    className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-sm hover:shadow-lg hover:border-[#00B8A9]/30 data-[state=open]:border-[#00B8A9] data-[state=open]:shadow-lg data-[state=open]:bg-white/80 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-[#1A2332] text-left px-6 py-5 hover:no-underline group-hover:text-[#00B8A9] data-[state=open]:text-[#00B8A9] [&[data-state=open]>svg]:rotate-180 transition-colors duration-300">
                      <span className="pr-8">
                        What technologies do you specialize in?
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#2C3E50] px-6 pb-5 pt-1">
                      {
                        "We\u2019re full-stack experts with deep experience in React, Node.js, Python, AWS, Azure, and modern DevOps practices. We choose technologies based on your specific needs and long-term goals, not trends. Check out our Technology Stack section above for more details."
                      }
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-6"
                    className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-sm hover:shadow-lg hover:border-[#00B8A9]/30 data-[state=open]:border-[#00B8A9] data-[state=open]:shadow-lg data-[state=open]:bg-white/80 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-[#1A2332] text-left px-6 py-5 hover:no-underline group-hover:text-[#00B8A9] data-[state=open]:text-[#00B8A9] [&[data-state=open]>svg]:rotate-180 transition-colors duration-300">
                      <span className="pr-8">
                        How do you handle data security and compliance?
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#2C3E50] px-6 pb-5 pt-1">
                      Security and compliance are foundational to our approach.
                      We implement encryption at rest and in transit, conduct
                      regular security audits, perform penetration testing, and
                      follow industry best practices for your specific
                      regulatory requirements (HIPAA, SOC2, GDPR, etc.).
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <Button className="bg-[#1A2332] text-white px-8 py-6 rounded-lg hover:shadow-xl hover:shadow-[#1A2332]/40 transition-all duration-300 hover:scale-105">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
