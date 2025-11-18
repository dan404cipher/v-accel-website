"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Award, Calendar, CheckCircle2, Search, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { OptimizedBackground } from "@/components/parent/OptimizedBackground";
import { ImageWithFallback } from "@/components/parent/ImageWithFallback";

type CaseStudy = {
  id: number;
  title: string;
  client: string;
  industry: string;
  excerpt: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
  featured: boolean;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Healthcare Platform Modernization",
    client: "Leading Healthcare Provider",
    industry: "Healthcare",
    excerpt:
      "Transformed legacy patient management system into a modern, HIPAA-compliant cloud platform, improving operational efficiency by 60%.",
    challenge: "Outdated infrastructure, compliance concerns, and poor user experience affecting patient care quality.",
    solution:
      "Built a modern React-based platform with secure cloud infrastructure, real-time data sync, and comprehensive audit trails.",
    results: [
      "60% improvement in operational efficiency",
      "100% HIPAA compliance achieved",
      "40% reduction in patient wait times",
      "95% user satisfaction rate",
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "HIPAA"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "EdTech Learning Management System",
    client: "Online Education Startup",
    industry: "EdTech",
    excerpt:
      "Developed an AI-powered learning platform that personalized education for 50,000+ students across multiple institutions.",
    challenge: "Need for scalable platform supporting personalized learning paths with real-time collaboration features.",
    solution:
      "Created an intelligent LMS with AI-driven content recommendations, live collaboration tools, and comprehensive analytics.",
    results: [
      "50,000+ active students onboarded",
      "85% increase in student engagement",
      "4.8/5 average course completion rate",
      "99.9% platform uptime",
    ],
    technologies: ["React", "Python", "TensorFlow", "MongoDB", "WebRTC"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "FinTech Payment Gateway Integration",
    client: "Digital Banking Platform",
    industry: "FinTech",
    excerpt:
      "Implemented secure, SOC 2 compliant payment processing system handling $10M+ in daily transactions.",
    challenge: "Complex compliance requirements, real-time fraud detection, and seamless multi-currency support.",
    solution:
      "Developed robust payment infrastructure with advanced fraud detection, multi-currency support, and comprehensive reporting.",
    results: [
      "$10M+ daily transaction volume",
      "99.99% payment success rate",
      "0.01% fraud rate (industry-leading)",
      "SOC 2 Type II certified",
    ],
    technologies: ["Node.js", "Stripe API", "Redis", "PostgreSQL", "AWS Lambda"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Telemedicine Platform Launch",
    client: "Healthcare Technology Company",
    industry: "Healthcare",
    excerpt:
      "Launched HIPAA-compliant telemedicine platform connecting 10,000+ patients with healthcare providers remotely.",
    challenge: "Building secure video conferencing, EHR integration, and prescription management in 4 months.",
    solution:
      "Rapid development of integrated telemedicine solution with video consultation, scheduling, and billing.",
    results: [
      "10,000+ patients served in first 6 months",
      "500+ healthcare providers onboarded",
      "4.9/5 patient satisfaction rating",
      "HIPAA & HITECH compliant",
    ],
    technologies: ["React", "WebRTC", "FHIR API", "AWS", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "University Management System",
    client: "Private University",
    industry: "EdTech",
    excerpt:
      "Delivered comprehensive student information system managing 15,000+ students across multiple campuses.",
    challenge: "Replacing multiple disconnected systems with unified platform for administration, faculty, and students.",
    solution:
      "Built integrated SIS with enrollment management, grade tracking, and communication tools.",
    results: [
      "15,000+ students managed",
      "70% reduction in administrative time",
      "98% data accuracy improvement",
      "Real-time reporting capabilities",
    ],
    technologies: ["React", "Node.js", "MySQL", "Redis", "AWS"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "Investment Portfolio Management",
    client: "Wealth Management Firm",
    industry: "FinTech",
    excerpt:
      "Created sophisticated investment platform managing $500M+ in client assets with real-time market data.",
    challenge: "Complex portfolio analytics, regulatory compliance, and secure multi-user access requirements.",
    solution:
      "Developed enterprise platform with advanced analytics, automated compliance, and institutional-grade security.",
    results: [
      "$500M+ assets under management",
      "200+ institutional clients",
      "Real-time portfolio rebalancing",
      "ISO 27001 certified",
    ],
    technologies: ["React", "Python", "PostgreSQL", "Redis", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    featured: false,
  },
];

const industries = ["All", "Healthcare", "EdTech", "FinTech"];

export function CaseStudyPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCaseStudies = useMemo(() => {
    const industryFiltered =
      selectedIndustry === "All" ? caseStudies : caseStudies.filter((study) => study.industry === selectedIndustry);

    if (!searchQuery.trim()) {
      return industryFiltered;
    }

    const lowerQuery = searchQuery.toLowerCase();
    return industryFiltered.filter(
      (study) =>
        study.title.toLowerCase().includes(lowerQuery) ||
        study.client.toLowerCase().includes(lowerQuery) ||
        study.excerpt.toLowerCase().includes(lowerQuery),
    );
  }, [selectedIndustry, searchQuery]);

  const featuredStudy = useMemo(() => caseStudies.find((study) => study.featured), []);

  return (
    <div className="min-h-screen bg-[#F4F6F8]">
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4F6F8] via-white to-[#E8F5F4]" style={{ zIndex: -20 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <OptimizedBackground variant="hero" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1A2332]/10 to-[#00B8A9]/10 px-6 py-3 text-base font-semibold text-[#1A2332]">
              Client Success Stories
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
          >
            <span className="inline bg-gradient-to-r from-[#1A2332] via-[#00B8A9] to-[#1A2332] bg-clip-text text-[rgb(44,62,80)]">
              Case Studies
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-3xl text-base text-gray-600 sm:text-lg md:text-xl lg:text-2xl"
          >
            Real results from real projects. See how we&apos;ve helped companies build compliant, scalable solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto max-w-2xl"
          >
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#2C3E50]/40" />
              <Input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="h-14 rounded-full border-2 border-[#1A2332]/20 bg-white/80 pl-12 pr-4 text-base shadow-lg transition-all placeholder:text-[#2C3E50]/40 focus:border-[#00B8A9] focus:ring-2 focus:ring-[#00B8A9]/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {featuredStudy && selectedIndustry === "All" && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-[#00B8A9]/30 bg-gradient-to-r from-[#00B8A9]/10 to-[#00B8A9]/5 px-7 py-3.5">
                <Award className="h-[22px] w-[22px] text-[#00B8A9]" />
                <span className="text-base font-semibold text-[rgb(26,35,50)]">Featured Case Study</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="group grid overflow-hidden rounded-2xl border-0 bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,184,169,0.15)] md:grid-cols-2">
                <div className="relative h-[320px] overflow-hidden md:h-auto">
                  <ImageWithFallback
                    src={featuredStudy.image}
                    alt={featuredStudy.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332]/20 via-transparent to-[#00B8A9]/10" />

                  <div className="absolute left-6 top-6">
                    <Badge className="rounded-full border-0 bg-gradient-to-r from-[#00B8A9] to-[#00B8A9]/90 px-4 py-2 text-white shadow-lg">
                      {featuredStudy.industry}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col justify-center bg-gradient-to-br from-white to-[#F4F6F8]/30 p-8 md:p-12">
                  <div className="mb-3 flex items-center gap-2 text-sm text-[#2C3E50]/70">
                    <Calendar className="h-4 w-4 text-[#00B8A9]" />
                    <span>{featuredStudy.client}</span>
                  </div>
                  <h2 className="mb-5 text-2xl text-[#1A2332] transition-colors duration-300 group-hover:text-[#00B8A9] md:text-3xl">
                    {featuredStudy.title}
                  </h2>
                  <p className="mb-8 text-base leading-relaxed text-[#2C3E50]/80 md:text-lg">{featuredStudy.excerpt}</p>

                  <div className="mb-8 space-y-3 border-b border-[#00B8A9]/10 pb-6">
                    {featuredStudy.results.slice(0, 3).map((result) => (
                      <div key={result} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00B8A9]" />
                        <span className="text-sm text-[#2C3E50]">{result}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="group/button w-fit rounded-xl bg-[#1A2332] px-8 py-6 text-base text-white shadow-[0_4px_20px_rgba(26,35,50,0.3)] transition-all duration-300 hover:bg-[#00B8A9] hover:shadow-[0_8px_30px_rgba(0,184,169,0.4)]">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      <section className="bg-[#F4F6F8] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-wrap items-center justify-center gap-2"
          >
            {industries.map((industry) => {
              const isActive = selectedIndustry === industry;
              return (
                <Button
                  key={industry}
                  size="default"
                  variant={isActive ? "default" : "outline"}
                  className={
                    isActive
                      ? "rounded-full bg-[#1A2332] px-6 py-2.5 text-sm text-white shadow-[0_4px_14px_rgba(26,35,50,0.39)] hover:bg-[#1A2332]/90"
                      : "rounded-full border-2 border-[#1A2332]/20 bg-white px-6 py-2.5 text-sm text-[#2C3E50] transition-colors hover:border-[#1A2332]/40 hover:bg-gray-50"
                  }
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry}
                </Button>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-2 text-[32px] text-[#1A2332]">
              {selectedIndustry === "All" ? "All Case Studies" : `${selectedIndustry} Case Studies`}
            </h2>
            <p className="text-[#2C3E50]">
              {filteredCaseStudies.length} {filteredCaseStudies.length === 1 ? "case study" : "case studies"} found
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group flex h-full cursor-pointer flex-col overflow-hidden border-0 bg-white transition-all duration-300 hover:shadow-2xl p-0">
                  <div className="relative h-[240px] overflow-hidden">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute left-4 top-4">
                      <Badge className="rounded-full border-0 bg-[#00B8A9] px-3 py-1.5 text-xs text-white shadow-lg">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-grow flex-col p-7">
                    <div className="mb-3 flex items-center gap-2 text-xs text-[#2C3E50]/60">
                      <Calendar className="h-3.5 w-3.5 text-[#00B8A9]" />
                      <span>{study.client}</span>
                    </div>
                    <h3 className="mb-4 line-clamp-2 text-xl leading-snug text-[#1A2332] transition-colors duration-300 group-hover:text-[#00B8A9]">
                      {study.title}
                    </h3>
                    <p className="mb-6 flex-grow line-clamp-3 leading-relaxed text-[#2C3E50]/80">{study.excerpt}</p>

                    <div className="mb-5 space-y-2 border-b border-[#F4F6F8] pb-5">
                      {study.results.slice(0, 2).map((result) => (
                        <div key={result} className="flex items-start gap-2">
                          <TrendingUp className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#00B8A9]" />
                          <span className="text-xs text-[#2C3E50]/70">{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[#1A2332] transition-colors duration-300 group-hover:text-[#00B8A9]">
                      <span className="text-sm">View Details</span>
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="py-20 text-center"
            >
              <p className="text-lg text-[#2C3E50]">No case studies match your filters yet.</p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00B8A9]/20 bg-[#00B8A9]/10 px-4 py-2">
              <span className="text-sm text-[rgb(26,35,50)]">Ready to Get Started?</span>
            </div>
            <h2 className="mb-4 text-[32px] text-[#1A2332]">Let&apos;s build your success story</h2>
            <p className="mx-auto mb-8 max-w-2xl text-[#2C3E50]">
              Partner with V-Accel to transform your ideas into compliant, scalable solutions that drive real business
              value.
            </p>
            <div className="mx-auto flex max-w-2xl flex-col items-stretch justify-center gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="h-14 sm:h-12 md:h-14 flex-1 rounded-lg border-2 border-[#1A2332]/20 px-4 transition-all focus:border-[#00B8A9] focus:ring-2 focus:ring-[#00B8A9]/20"
              />
              <Button className="h-10 sm:h-12 md:h-14 rounded-lg bg-[#1A2332] px-3 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base text-white shadow-[0_4px_14px_rgba(26,35,50,0.39)] transition-all hover:bg-[#1A2332]/90 hover:shadow-[0_6px_20px_rgba(26,35,50,0.5)] w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}


