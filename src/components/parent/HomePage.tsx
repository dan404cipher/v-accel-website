"use client";

import { motion } from "motion/react";
import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FigmaIndustryCards } from "./FigmaIndustryCards";
import { ProblemCard } from "./ProblemCard";
import { TechStack } from "./TechStack";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { OptimizedBackground } from "./OptimizedBackground";
import { ServicesSection } from "./ServicesSection";
import { FinalCtaSection } from "./FinalCtaSection";
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
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Rocket,
  Shield,
  FileCheck,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  ChevronUp,
  MessageCircle,
  Zap
} from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import Image from "next/image";
import leadAccelImage from "@assets/d64e6d6646625791c48e3bc956b41ef6548cda47.png";
import vaccelLogo from "@assets/2f6818b63f91758834982350ffe7523437d669ba.png";

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

  const minWidthStyle = useMemo(() => ({ minWidth: '280px' }), []);

  return (
    <span className="inline-block whitespace-nowrap">
      <span className="bg-gradient-to-r from-[#1A2332] via-[#00B8A9] to-[#1A2332] bg-clip-text text-[rgb(44,62,80)]">
        AI-powered{" "}
      </span>
      <span className="inline-block relative" style={minWidthStyle}>
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 bg-gradient-to-r from-[#00B8A9] to-[#1A2332] bg-clip-text text-transparent"
        >
          {industries[currentIndex]}
        </motion.span>
        <span className="invisible">{industries[2]}</span>
      </span>
    </span>
  );
});

AnimatedProductText.displayName = 'AnimatedProductText';

export function HomePage() {
  // Mouse position for interactive background - optimized with useCallback
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Navigation handler - memoized
  const onNavigate = useCallback((section: string) => {
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Throttled mouse move handler
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  // Memoize grid mask style for performance
  const gridMaskStyle = useMemo(() => ({
    backgroundImage: `
      linear-gradient(to right, #FF6B6B 1px, transparent 1px),
      linear-gradient(to bottom, #FF6B6B 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    maskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.02) 100%)`,
    WebkitMaskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.02) 100%)`,
  }), [mousePosition.x, mousePosition.y]);

  const secondaryGridMaskStyle = useMemo(() => ({
    backgroundImage: `
      linear-gradient(to right, #00B8A9 1px, transparent 1px),
      linear-gradient(to bottom, #00B8A9 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    backgroundPosition: '30px 30px',
    maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 60%, rgba(0,0,0,0) 100%)`,
    WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 60%, rgba(0,0,0,0) 100%)`,
  }), [mousePosition.x, mousePosition.y]);

  return (
    <div className="min-h-screen bg-[#F4F6F8]">
      {/* Section 1: Hero Area - Optimized */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-20">
        {/* Simple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4F6F8] via-white to-[#E8F5F4]" style={{ zIndex: -20 }} />

        {/* Optimized Interactive background layer */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <OptimizedBackground variant="hero" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative py-[0px] px-[16px] px-[8px]" style={{ zIndex: 10 }}>
          {/* Badge with animation */}
          <div>
            <Badge className="mb-4 md:mb-6 bg-gradient-to-r from-[#1A2332]/10 to-[#00B8A9]/10 text-[#1A2332] border-0 shadow-lg text-xs md:text-sm py-[7px] px-[14px] font-semibold">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              AI-Powered Innovation
            </Badge>
          </div>

          {/* Main heading with staggered animation */}
          <div className="mb-4 md:mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-normal">
                <span className="inline bg-gradient-to-r from-[#1A2332] via-[#00B8A9] to-[#1A2332] bg-clip-text text-[rgb(44,62,80)] whitespace-nowrap">
                  Accelerate your business with
                </span>
                <br />
                <AnimatedProductText />
              </h1>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed px-[16px] py-[0px] text-center font-normal">
             From secure platforms to compliant integrations, we help companies turn complex requirements into scalable, reliable systems — delivered on time, every time.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 md:gap-4 justify-center items-center flex-wrap px-4">
            <div>
              <Button 
                size="default"
                className="rounded-lg px-6 md:px-8 py-6 text-sm md:text-base bg-[#1A2332] hover:bg-[#1A2332]/90 shadow-[0_4px_14px_0_rgba(26,35,50,0.39)] hover:shadow-[0_6px_20px_rgba(26,35,50,0.5)] transition-all group text-white h-12 md:h-14"
                onClick={() => onNavigate('solutions')}
              >
                Explore Industry Solutions
                <div className="ml-2 inline-block">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </Button>
            </div>
            
            <div>
              <Button 
                size="default"
                variant="outline" 
                className="rounded-lg px-6 md:px-8 py-6 text-sm md:text-base border-2 border-black/80 bg-[rgba(255,255,255,0)] text-black/90 hover:border-black hover:bg-gray-50 shadow-[0_2px_10px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_14px_0_rgba(0,0,0,0.15)] transition-all h-12 md:h-14 text-[rgb(44,62,80)]"
                onClick={() => onNavigate('lead-accel')}
              >
                See Our Product
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Pain-Point Narrative - Optimized */}
      <section 
        className="relative py-20 bg-white overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Modern professional background - Optimized with memoized styles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Interactive grid with fade effect */}
          <motion.div 
            className="absolute inset-0 will-change-opacity" 
            style={gridMaskStyle}
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Secondary grid layer with offset animation */}
          <motion.div 
            className="absolute inset-0 will-change-opacity" 
            style={secondaryGridMaskStyle}
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Animated gradient orb - subtle movement */}
          <motion.div 
            className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(255, 107, 107, 0.15) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div 
            className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(0, 184, 169, 0.12) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.12, 0.2, 0.12],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Floating minimal dots - Reduced for performance */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#00B8A9] will-change-transform"
              style={{
                left: `${20 + i * 20}%`,
                top: `${25 + (i % 2) * 30}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Modern line accents with subtle animation */}
          <motion.div
            className="absolute top-1/3 left-0 right-0 h-px opacity-10"
            style={{
              background: 'linear-gradient(90deg, transparent, #FF6B6B 50%, transparent)',
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Geometric modern shapes - very subtle */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-40 h-40 opacity-[0.04]"
            style={{
              background: 'linear-gradient(135deg, #FF6B6B, transparent)',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
            animate={{
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute bottom-1/3 left-1/4 w-32 h-32 opacity-[0.03]"
            style={{
              background: 'linear-gradient(135deg, #00B8A9, transparent)',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            }}
            animate={{
              rotate: [0, -360, 0],
              borderRadius: [
                '30% 70% 70% 30% / 30% 30% 70% 70%',
                '70% 30% 30% 70% / 70% 70% 30% 30%',
                '30% 70% 70% 30% / 30% 30% 70% 70%'
              ],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B8A9]/10 rounded-full border border-[#00B8A9]/20 mb-6">
              <ShieldAlert className="w-4 h-4 text-[#00B8A9]" />
              <span className="text-sm text-[rgb(26,35,50)] font-normal">Challenges</span>
            </div>
            <h2 className="mb-4 text-[#1A2332] text-[32px] text-center whitespace-nowrap font-medium">
              Your growth shouldn't be slowed by technology bottlenecks.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B8A9]/10 rounded-full border border-[#00B8A9]/20 text-sm text-[rgb(26,35,50)] mr-2">V-Accel</span> helps organizations close these gaps — blending domain expertise and engineering depth to deliver software that accelerates your roadmap without compromising quality or compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Industry Focus */}
      <section id="industries" className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B8A9]/10 rounded-full border border-[#00B8A9]/20 mb-6">
              <Target className="w-4 h-4 text-[#00B8A9]" />
              <span className="text-sm text-[rgb(26,35,50)]">Industry Expertise</span>
            </div>
            <h2 className="mb-4 text-[#1A2332] text-[32px] font-medium">
              Purpose-built solutions across three critical industries.
            </h2>
            <p className="text-[#2C3E50] font-normal">
              We specialize in regulated sectors where security and compliance are non-negotiable.
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
            <Button size="lg" className="rounded-lg bg-[#1A2332] hover:bg-[#1A2332]/90 shadow-[0_4px_14px_0_rgba(26,35,50,0.39)] hover:shadow-[0_6px_20px_rgba(26,35,50,0.5)] transition-all duration-300">
              Explore Industry Solutions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 4: LeadAccel Product */}
      <section id="leadaccel" className="py-20 bg-gradient-to-br from-[#E8F5F4] via-[#F4F6F8] to-[#E8F5F4]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B8A9]/10 rounded-full border border-[#00B8A9]/20">
              <FileCheck className="w-4 h-4 text-[#00B8A9]" />
              <span className="text-sm text-[rgb(26,35,50)]">Built by V-Accel</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">{/* Left: Product Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <ImageWithFallback
                src={leadAccelImage}
                alt="Project Accel CRM Interface"
                className="w-full h-auto scale-125"
              />
            </motion.div>

            {/* Right: Product Copy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:pl-20"
            >
              {/* Section Title */}
              <h2 className="text-[#1A2332] text-[32px] font-medium">
                Our Product
              </h2>

              <div className="space-y-4">
                <h2 className="text-[#1A2332] text-justify leading-relaxed font-medium">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A2332]/10 border border-[#1A2332]/20 text-[#1A2332] rounded-md mr-3 font-semibold">Project Accel</span> A project management platform built for how<br />tech and service teams actually work.
                </h2>
                <p className="text-[#2C3E50] text-lg text-justify text-[14px] font-normal">
                  Developed from our experience managing complex client projects, Project Accel helps teams plan, track, and deliver work efficiently — keeping communication clear, progress visible, and deadlines under control without the chaos of spreadsheets and scattered tools.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00B8A9] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[#1A2332] font-medium">Centralized Project Management</div>
                    <div className="text-sm text-[#2C3E50] font-normal">Plan, assign, and monitor tasks across teams in one unified workspace.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00B8A9] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[#1A2332] font-medium">Real-Time Progress Tracking</div>
                    <div className="text-sm text-[#2C3E50] font-normal">Get instant visibility into timelines, workloads, and project health through live dashboards.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00B8A9] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[#1A2332] font-medium">Collaboration Simplified</div>
                    <div className="text-sm text-[#2C3E50] font-normal">Share updates, files, and feedback seamlessly to keep everyone aligned and accountable.</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="rounded-lg bg-[#1A2332] hover:bg-[#1A2332]/90 shadow-[0_4px_14px_0_rgba(26,35,50,0.39)] hover:shadow-[0_6px_20px_rgba(26,35,50,0.5)] transition-all duration-300 group">
                  Discover Project Accel
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Proof & Trust */}
      <section id="about" className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B8A9]/10 rounded-lg mb-6">
              <Shield className="w-4 h-4 text-[#00B8A9]" />
              <span className="text-sm text-[rgb(26,35,50)]">Proof & Trust</span>
            </div>
            <h2 className="text-[#1A2332] text-[32px] mb-6 font-medium">
              Trusted by companies that build for scale and compliance.
            </h2>
            <p className="text-[#2C3E50] max-w-3xl mx-auto font-normal">
              We combine process discipline with practical engineering to deliver compliant, scalable, and maintainable solutions that drive real business value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-t-4 border-[#00B8A9] hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B8A9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#00B8A9]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#00B8A9]/20 transition-colors duration-300">
                    <Zap className="w-8 h-8 text-[#00B8A9]" />
                  </div>
                  <div className="mb-2 text-[#1A2332] text-3xl font-semibold">25+</div>
                  <p className="text-[#2C3E50] font-normal">Successful projects delivered</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-t-4 border-[#FF6B6B] hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FF6B6B]/20 transition-colors duration-300">
                    <Target className="w-8 h-8 text-[#FF6B6B]" />
                  </div>
                  <div className="mb-2 text-[#1A2332] text-3xl font-semibold">3</div>
                  <p className="text-[#2C3E50] font-normal">Regulated industries served</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-t-4 border-[#00B8A9] hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B8A9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#00B8A9]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#00B8A9]/20 transition-colors duration-300">
                    <TrendingUp className="w-8 h-8 text-[#00B8A9]" />
                  </div>
                  <div className="mb-2 text-[#1A2332] text-3xl font-semibold">5+</div>
                  <p className="text-[#2C3E50] font-normal">Years of excellence</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-t-4 border-[#FF6B6B] hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FF6B6B]/20 transition-colors duration-300">
                    <Award className="w-8 h-8 text-[#FF6B6B]" />
                  </div>
                  <div className="mb-2 text-[#1A2332] text-3xl font-semibold">100%</div>
                  <p className="text-[#2C3E50] font-normal">Client satisfaction rate</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Compliance Badges */}
          <TechStack />
        </div>
      </section>

      {/* Section 6: Services */}
      <ServicesSection />

      {/* Section 7: Testimonials */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B8A9]/10 rounded-full border border-[#00B8A9]/20 mb-6">
              <MessageCircle className="w-4 h-4 text-[#00B8A9]" />
              <span className="text-sm text-[rgb(26,35,50)]">Client Success Stories</span>
            </div>
            <h2 className="mb-4 text-[#1A2332] text-[32px] font-medium">
              Hear from companies we've helped scale.
            </h2>
            <p className="text-[#2C3E50] font-normal">
              Real feedback from partners who've trusted us with their most critical software projects.
            </p>
          </motion.div>

          <TestimonialCarousel
            testimonials={[
              {
                quote: "V-Accel helped us navigate HIPAA compliance while building our patient portal. Their expertise in healthcare tech was invaluable, and they delivered on time despite tight regulatory requirements.",
                author: "Sarah Mitchell",
                role: "CTO",
                company: "HealthStream Solutions",
              },
              {
                quote: "The team's deep understanding of financial systems made our lending platform migration seamless. Their SOC2 experience gave our stakeholders confidence from day one.",
                author: "James Chen",
                role: "VP of Engineering",
                company: "CapitalFlow Financial",
              },
              {
                quote: "From architecture to deployment, V-Accel brought both technical excellence and clear communication. Our EdTech platform now handles 10x the traffic with better performance.",
                author: "Maria Rodriguez",
                role: "Product Director",
                company: "EduVerse Learning",
              },
              {
                quote: "Working with V-Accel on our telemedicine platform was exceptional. Their attention to security and compliance ensured we met all regulatory standards while delivering a seamless user experience.",
                author: "Dr. Robert Kim",
                role: "Chief Medical Officer",
                company: "MediConnect Health",
              },
              {
                quote: "V-Accel transformed our payment processing system with modern architecture. Their FinTech expertise and proactive communication made this our smoothest vendor partnership to date.",
                author: "Emily Watson",
                role: "Director of Technology",
                company: "PayFlow Systems",
              },
              {
                quote: "The team at V-Accel didn't just build our student management system—they understood our educational mission. Their LeadAccel CRM integration saved us countless hours of manual work.",
                author: "Michael Torres",
                role: "Head of IT",
                company: "Scholar Academy",
              },
            ]}
          />
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B8A9]/20 via-[#1A2332]/10 to-[#00B8A9]/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-purple-100/20 to-pink-100/30" />
        
        <div className="max-w-5xl mx-auto px-6 relative">
          {/* Glass Morphism Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[32px] p-8 md:p-12 lg:p-16"
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
                  <span className="inline-flex items-center px-4 py-2 bg-[#00B8A9]/10 rounded-full border border-[#00B8A9]/20 text-sm tracking-wider text-[rgb(26,35,50)] uppercase">FAQs</span>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[32px] text-[#1A2332] mb-2 font-medium"
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
                  <AccordionItem value="item-1" className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-sm hover:shadow-lg hover:border-[#00B8A9]/30 data-[state=open]:border-[#00B8A9] data-[state=open]:shadow-lg data-[state=open]:bg-white/80 transition-all duration-300">
                    <AccordionTrigger className="text-[#1A2332] text-left px-6 py-5 hover:no-underline group-hover:text-[#00B8A9] data-[state=open]:text-[#00B8A9] [&[data-state=open]>svg]:rotate-180 transition-colors duration-300">
                      <span className="pr-8">How long does a typical project take?</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#2C3E50] px-6 pb-5 pt-1">
                      Project timelines vary based on scope and complexity. A typical custom application takes 3-6 months from requirements gathering to deployment. We provide detailed project timelines during our initial consultation and maintain transparent communication throughout development.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-sm hover:shadow-lg hover:border-[#00B8A9]/30 data-[state=open]:border-[#00B8A9] data-[state=open]:shadow-lg data-[state=open]:bg-white/80 transition-all duration-300">
                    <AccordionTrigger className="text-[#1A2332] text-left px-6 py-5 hover:no-underline group-hover:text-[#00B8A9] data-[state=open]:text-[#00B8A9] [&[data-state=open]>svg]:rotate-180 transition-colors duration-300">
                      <span className="pr-8">Do you provide ongoing support after launch?</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#2C3E50] px-6 pb-5 pt-1">
                      Yes, we offer flexible maintenance and support packages tailored to your needs. This includes bug fixes, security updates, performance monitoring, and feature enhancements. Most clients opt for our managed service plans for peace of mind.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-sm hover:shadow-lg hover:border-[#00B8A9]/30 data-[state=open]:border-[#00B8A9] data-[state=open]:shadow-lg data-[state=open]:bg-white/80 transition-all duration-300">
                    <AccordionTrigger className="text-[#1A2332] text-left px-6 py-5 hover:no-underline group-hover:text-[#00B8A9] data-[state=open]:text-[#00B8A9] [&[data-state=open]>svg]:rotate-180 transition-colors duration-300">
                      <span className="pr-8">What makes <span className="text-[#00B8A9]">V-Accel</span> different from other development firms?</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#2C3E50] px-6 pb-5 pt-1">
                      Our deep expertise in regulated industries (EdTech, FinTech, Healthcare) sets us apart. We understand compliance frameworks like HIPAA, SOC2, and ISO from the ground up, which means we build security and compliance into every line of code—not as an afterthought.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-sm hover:shadow-lg hover:border-[#00B8A9]/30 data-[state=open]:border-[#00B8A9] data-[state=open]:shadow-lg data-[state=open]:bg-white/80 transition-all duration-300">
                    <AccordionTrigger className="text-[#1A2332] text-left px-6 py-5 hover:no-underline group-hover:text-[#00B8A9] data-[state=open]:text-[#00B8A9] [&[data-state=open]>svg]:rotate-180 transition-colors duration-300">
                      <span className="pr-8">Can you work with our existing development team?</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#2C3E50] px-6 pb-5 pt-1">
                      Absolutely. We offer team augmentation services where our engineers integrate seamlessly with your existing team. We can also provide consulting, code reviews, and architecture guidance to support your in-house development efforts.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-sm hover:shadow-lg hover:border-[#00B8A9]/30 data-[state=open]:border-[#00B8A9] data-[state=open]:shadow-lg data-[state=open]:bg-white/80 transition-all duration-300">
                    <AccordionTrigger className="text-[#1A2332] text-left px-6 py-5 hover:no-underline group-hover:text-[#00B8A9] data-[state=open]:text-[#00B8A9] [&[data-state=open]>svg]:rotate-180 transition-colors duration-300">
                      <span className="pr-8">What technologies do you specialize in?</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#2C3E50] px-6 pb-5 pt-1">
                      We're full-stack experts with deep experience in React, Node.js, Python, AWS, Azure, and modern DevOps practices. We choose technologies based on your specific needs and long-term goals, not trends. Check out our Technology Stack section above for more details.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border-2 border-white/80 shadow-sm hover:shadow-lg hover:border-[#00B8A9]/30 data-[state=open]:border-[#00B8A9] data-[state=open]:shadow-lg data-[state=open]:bg-white/80 transition-all duration-300">
                    <AccordionTrigger className="text-[#1A2332] text-left px-6 py-5 hover:no-underline group-hover:text-[#00B8A9] data-[state=open]:text-[#00B8A9] [&[data-state=open]>svg]:rotate-180 transition-colors duration-300">
                      <span className="pr-8">How do you handle data security and compliance?</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#2C3E50] px-6 pb-5 pt-1">
                      Security and compliance are foundational to our approach. We implement encryption at rest and in transit, conduct regular security audits, perform penetration testing, and follow industry best practices for your specific regulatory requirements (HIPAA, SOC2, GDPR, etc.).
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
