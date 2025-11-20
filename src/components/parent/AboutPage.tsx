"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "./ImageWithFallback";
import { OptimizedBackground } from "./OptimizedBackground";
import { FinalCtaSection } from "./FinalCtaSection";
import { CompanyValues } from "./CompanyValues";
import { TrustedPartners } from "./TrustedPartners";
import { StatisticsBar } from "./StatisticsBar";
import { SectionBadge } from "./SectionBadge";
import founderImage from "@assets/d4cc23ca1f15b0a6e25454aaf732f2bd383b9f1a.png";
import {
  Sparkles,
  TrendingUp,
  Users,
  Lightbulb,
  Shield,
  Heart,
  Award,
  Building2,
  ArrowRight,
  CheckCircle2,
  Rocket,
  UserCheck,
  Clock,
  Trophy,
  Star,
  Briefcase,
} from "lucide-react";

const BADGE_BASE =
  "inline-flex items-center gap-2 px-5 py-2.5 bg-[#00B8A9]/10 rounded-full border border-[#00B8A9]/20 text-base text-[#1A2332] font-semibold";

export function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () =>
        heroElement.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Interactive Elements */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center px-4 sm:px-6 py-0 overflow-hidden bg-gradient-to-br from-[#F4F6F8] via-white to-[#E8F5F4] min-h-[100svh]"
      >
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

        <div className="max-w-7xl mx-auto relative z-10 w-full py-16 sm:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <SectionBadge
                icon={Sparkles}
                label="About V-Accel AI Dynamics"
                className="mb-4 md:mb-6 mx-auto justify-center"
              />
            </motion.div>

            <motion.h1
              className="text-[clamp(2.5rem,6vw,4.5rem)] md:text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[0.95] mb-6 sm:mb-8 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block bg-gradient-to-r from-[#2C3E50] via-[#2C3E50] to-[#2C3E50] bg-clip-text text-[rgba(44,62,80,0)] animate-gradient py-[8px] px-0">
                Innovating the Future
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-[#2C3E50] via-[#2C3E50] to-[#2C3E50] bg-clip-text text-[rgba(44,62,80,0)] animate-gradient py-[4px] px-0">
                of Business Technology
              </span>
            </motion.h1>

            <motion.p
            className="text-[clamp(0.8rem,1.4vw,1rem)] md:text-[clamp(0.875rem,1.4vw,1.125rem)] text-[#2C3E50] max-w-4xl mx-auto leading-normal font-normal px-2 text-balance"
            // 0.9rem,1.8vw,1.25rem)] md:text-[clamp(1.1rem,8vw,1.5rem)] text-[#2C3E50] max-w-4xl mx-auto leading-normal font-normal px-2 text-balance"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Founded by Mr. Venkatesan J in 2022, V Accel AI Dynamics is a
              next-generation software company building scalable, intelligent
              systems for global clients. Headquartered at TIDEL Park, Chennai
              with a growing team of developers, AI engineers, designers, and QA
              specialists.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1A2332] mt-6 sm:mt-8 italic max-w-3xl mx-auto font-normal px-2 leading-snug"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              "We Build Smart Software for Serious Growth."
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-flex flex-col items-center gap-2"
              >
                <span className="text-base sm:text-lg text-[#2C3E50]">
                  Discover Our Story
                </span>
                <div className="w-6 h-10 border-2 border-[#00B8A9] rounded-full flex items-start justify-center p-2">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-[#1A2332] rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative px-6 py-20 overflow-hidden bg-gradient-to-b from-white to-[#F4F6F8]">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00B8A9]/10 rounded-full blur-xl opacity-40" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1A2332]/5 rounded-full blur-xl opacity-30" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <SectionBadge
              icon={Rocket}
              label="Our Journey"
              className="mb-6 mx-auto justify-center"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
                <span className="text-[#1A2332]">From problem solvers to </span>
                <span className="bg-gradient-to-r from-[#00B8A9] to-[#1A2332] bg-clip-text text-transparent">
                  trusted engineering partners.
                </span>
              </h2>

              <div className="space-y-4">
                <motion.p
                  className="text-base md:text-lg text-[#2C3E50] leading-relaxed font-normal"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  V-Accel began with a simple idea — that software should not
                  just work, but{" "}
                  <strong className="text-[#1A2332]">work with purpose</strong>.
                </motion.p>

                <motion.p
                  className="text-base md:text-lg text-[#2C3E50] leading-relaxed font-normal"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  What started as a small team of engineers solving one client's
                  operational challenge has evolved into a{" "}
                  <strong className="text-[#1A2332]">
                    multidisciplinary software development company
                  </strong>{" "}
                  delivering solutions across regulated industries.
                </motion.p>

                <motion.p
                  className="text-base md:text-lg text-[#2C3E50] leading-relaxed font-normal"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Today, we combine{" "}
                  <strong className="text-[#1A2332]">
                    technical expertise with a consultative mindset
                  </strong>{" "}
                  — helping organizations modernize, integrate, and innovate
                  with confidence.
                </motion.p>
              </div>
            </motion.div>

            {/* Right: Timeline Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="space-y-8">
                {/* Timeline items */}
                {[
                  {
                    year: "2022",
                    title: "The Beginning",
                    description:
                      "Founded with a vision to solve real-world operational challenges through intelligent software.",
                    icon: Briefcase,
                    color: "#1A2332",
                  },
                  {
                    year: "2023",
                    title: "Multidisciplinary Growth",
                    description:
                      "Expanded into EdTech, FinTech, and Healthcare with a growing team of specialists.",
                    icon: TrendingUp,
                    color: "#00B8A9",
                  },
                  {
                    year: "2024+",
                    title: "Trusted Partner",
                    description:
                      "Delivering enterprise-grade solutions with a consultative, compliance-first approach.",
                    icon: Award,
                    color: "#FF6B6B",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index + 0.3 }}
                    className="relative pl-12 pb-8 border-l-2 border-[#1A2332]/20 last:border-l-0 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full border-2 border-white shadow-lg"
                      style={{ backgroundColor: item.color }}
                    />

                    {/* Icon circle */}
                    <motion.div
                      className="absolute left-0 top-8 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <item.icon className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] text-white" />
                    </motion.div>

                    <div className="pt-1">
                      <div
                        className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2"
                        style={{
                          backgroundColor: `${item.color}20`,
                          color: item.color,
                        }}
                      >
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-[#1A2332] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#2C3E50]/80 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative px-6 py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image Collage & Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Stats Badge */}
              <div className="mb-6">
                <h3 className="text-4xl text-[#1A2332] mb-2 font-bold">20+</h3>
                <p className="text-[#2C3E50] font-normal">Projects Delivered</p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden h-48">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI5NDA4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Modern office"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden h-48">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1752650735943-d0fbf1edce21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjI4NjEzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Team collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-3xl overflow-hidden h-64">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjI4NjM3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Development team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden h-32">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1622131815452-cc00d8d89f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjI4ODQ0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Workspace"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#2C3E50] font-medium">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#00B8A9] flex-shrink-0" />
                  <span>
                    Delivering excellence across EdTech, FinTech & Healthcare
                  </span>
                </div>
                <Badge className={`${BADGE_BASE}`}>
                  #innovation
                </Badge>
              </div>

              {/* Excellence Badge */}
              <div className="flex items-center gap-3 sm:gap-4 mt-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1A2332] flex items-center justify-center text-white flex-shrink-0">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold">3+</div>
                  </div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-[#2C3E50] font-medium">
                    Years of Trusted by organizations worldwide
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Mission & Vision Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl text-[#1A2332] mb-8 text-[32px] font-semibold">
                  Mission & Vision
                </h2>

                {/* Mission */}
                <div className="mb-8">
                  <h3 className="text-lg text-[#1A2332] mb-3 font-semibold">
                    Mission
                  </h3>
                  <p className="text-[#2C3E50] leading-relaxed font-medium">
                    To empower businesses in{" "}
                    <strong className="text-[#1A2332]">
                      EdTech, FinTech, and Healthcare
                    </strong>{" "}
                    with reliable, secure, and scalable software — built through{" "}
                    <strong className="text-[#1A2332]">
                      collaboration, technical depth
                    </strong>
                    , and a deep understanding of real-world challenges.
                  </p>
                </div>

                {/* Vision */}
                <div className="mb-8">
                  <h3 className="text-lg text-[#1A2332] mb-3 font-semibold">
                    Vision
                  </h3>
                  <p className="text-[#2C3E50] leading-relaxed font-medium">
                    To become a{" "}
                    <strong className="text-[#1A2332]">
                      global technology partner
                    </strong>{" "}
                    recognized for engineering clarity, compliance, and
                    innovation — where every solution we build creates{" "}
                    <strong className="text-[#1A2332]">
                      measurable impact and long-term trust
                    </strong>
                    .
                  </p>
                </div>

                {/* Goal Badge */}
                <Badge className={`${BADGE_BASE} mb-6`}>
                  Our goal: Trusted partner across 3 regulated industries
                </Badge>

                {/* Focus Areas */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge
                    variant="outline"
                    className="bg-white border-[#1A2332]/20 text-[#2C3E50] font-medium"
                  >
                    EdTech Services
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-white border-[#1A2332]/20 text-[#2C3E50] font-medium"
                  >
                    FinTech Development
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-white border-[#1A2332]/20 text-[#2C3E50] font-medium"
                  >
                    Healthcare Systems
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-white border-[#1A2332]/20 text-[#2C3E50] font-medium"
                  >
                    Compliance First
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-white border-[#1A2332]/20 text-[#2C3E50] font-medium"
                  >
                    Innovation
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-white border-[#1A2332]/20 text-[#2C3E50] font-medium"
                  >
                    Technical Excellence
                  </Badge>
                </div>

                <p className="text-[#1A2332] font-semibold leading-relaxed mb-10">
                  Our commitment is simple: deliver technology that solves real
                  problems, not just showcases capability.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="bg-[#1A2332] hover:bg-[#1A2332]/90 text-white"
                  >
                    <Link href="/services/edtech">
                      Explore Our Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#1A2332]/20 text-[#1A2332] hover:bg-[#F4F6F8]"
                  >
                    <Link href="/case-studies">View Case Studies</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section with Parallax Effect */}
      <section className="relative px-6 py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A2332]/10 rounded-full blur-xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00B8A9]/10 rounded-full blur-xl opacity-20" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <SectionBadge
              icon={Users}
              label="Leadership"
              className="mb-6 mx-auto justify-center"
            />
            <h2 className="text-4xl md:text-6xl font-semibold mb-4">
              <span className="text-[#1A2332] text-[32px]">
                Meet the Founder
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={founderImage}
                  alt="Mr Venkatesan - Founder & CEO"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />

                {/* Floating badge */}
                <motion.div
                  className="absolute bottom-6 left-6 z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Badge className={`${BADGE_BASE} bg-white/90 border-white/60`}>
                    <Award className="w-4 h-4 text-[#00B8A9]" />
                    10+ Years Experience
                  </Badge>
                </motion.div>
              </div>
            </motion.div>

            {/* Founder Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <motion.h3
                  className="text-4xl font-semibold mb-2 text-[#1A2332]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Mr. Venkatesan J
                </motion.h3>
                <p className="text-2xl text-[#00B8A9] mb-6 font-semibold">
                  Founder & CEO
                </p>
              </div>

              <div className="space-y-4">
                <motion.p
                  className="text-[#2C3E50] leading-relaxed text-lg font-normal"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <strong>Qualifications:</strong> BE, PGDM, PGD, ME in
                  Artificial Intelligence
                </motion.p>
                <motion.p
                  className="text-[#2C3E50] leading-relaxed text-lg font-normal"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Full Stack Engineer and AI Engineer with{" "}
                  <strong>10+ years</strong> of experience across product
                  engineering, automation, and enterprise solutions.
                </motion.p>
                <motion.p
                  className="text-[#2C3E50] leading-relaxed text-lg font-normal"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Also Founder & Managing Head of{" "}
                  <strong>Axess Technology</strong>, Chennai's fastest-growing
                  software training & placement institute.
                </motion.p>
              </div>

              <div className="flex flex-row gap-3 sm:gap-4 pt-6">
                {[
                  {
                    icon: Briefcase,
                    label: "Experience",
                    value: "10+ Years",
                    gradient: "from-[#1A2332] to-[#1A2332]/80",
                  },
                  {
                    icon: Building2,
                    label: "Companies",
                    value: "2 Founded",
                    gradient: "from-[#00B8A9] to-[#FF6B6B]",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group flex-1"
                  >
                    <Card className="p-3 sm:p-4 bg-[#F4F6F8] border-2 border-[#1A2332]/20 hover:border-[#1A2332]/40 transition-all shadow-lg hover:shadow-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                        >
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <span className="text-xs sm:text-sm text-[#1A2332] font-semibold">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-xl sm:text-2xl font-bold text-[#1A2332]">
                        {item.value}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <CompanyValues />

      {/* Trusted Partners Section */}
      <TrustedPartners />

      {/* Statistics Bar */}
      <StatisticsBar />

      <FinalCtaSection />
    </div>
  );
}
