"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  AlertTriangle,
  Ban,
  Briefcase,
  CheckCircle2,
  CreditCard,
  FileText,
  FileWarning,
  FileX,
  Info,
  Mail,
  MapPin,
  Scale,
  ScrollText,
  ShieldAlert,
  UserCheck,
  XCircle,
} from "lucide-react";

type SectionId =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11;

const sections = [
  { id: 1 as SectionId, title: "Acceptance of Terms", icon: UserCheck },
  { id: 2 as SectionId, title: "Services Overview", icon: Briefcase },
  { id: 3 as SectionId, title: "User Responsibilities", icon: FileText },
  { id: 4 as SectionId, title: "Payment & Billing", icon: CreditCard },
  { id: 5 as SectionId, title: "Intellectual Property", icon: FileWarning },
  { id: 6 as SectionId, title: "Warranties & Disclaimers", icon: ShieldAlert },
  { id: 7 as SectionId, title: "Limitation of Liability", icon: AlertTriangle },
  { id: 8 as SectionId, title: "Termination", icon: FileX },
  { id: 9 as SectionId, title: "Prohibited Activities", icon: Ban },
  { id: 10 as SectionId, title: "Governing Law", icon: Scale },
  { id: 11 as SectionId, title: "Contact Information", icon: Mail },
];

const heroShapes = [
  { className: "top-10 left-[8%] w-3 h-3 border border-[#00B8A9]/40 rotate-45", animation: "animate-float-up-down" },
  { className: "top-20 right-[12%] w-4 h-4 rounded-full bg-[#00B8A9]/30", animation: "animate-float-dot" },
  { className: "bottom-16 right-[25%] w-6 h-6 border border-[#FF6B6B]/30 rotate-45", animation: "animate-rotate-slow" },
];

export function TermsPage() {
  const [activeSection, setActiveSection] = useState<SectionId>(1);
  const sectionRefs = useRef<Record<SectionId, HTMLDivElement | null>>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
  });

  const serviceHighlights = useMemo(
    () => [
      "Custom software development (web, mobile, enterprise solutions)",
      "SaaS product subscriptions (LeadAccel CRM and related tools)",
      "Technical consulting and digital transformation services",
      "Cloud infrastructure, DevOps, and maintenance support",
      "API integrations and third-party platform connections",
    ],
    [],
  );

  const responsibilities = useMemo(
    () => [
      "Providing accurate information during signup or project intake",
      "Maintaining the confidentiality of your account credentials",
      "Ensuring lawful and authorized use of our Services",
      "Complying with all applicable laws and regulations",
      "Timely payment for subscriptions or project-based work",
      "Providing necessary project materials and feedback",
    ],
    [],
  );

  const scrollToSection = (sectionId: SectionId) => {
    const element = sectionRefs.current[sectionId];
    if (!element) return;
    setActiveSection(sectionId);

    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F6F8] to-white text-[1rem] sm:text-[1.05rem]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3E5266] via-[#3E5266] to-[#4A5568] pt-32 pb-24">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,184,169,0.18),transparent_60%)]" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] bg-[radial-gradient(circle,rgba(0,184,169,0.45),transparent_70%)] blur-[120px]" />
          <div className="absolute bottom-[-5%] left-[-5%] w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(255,107,107,0.25),transparent_70%)] blur-[120px]" />
          {heroShapes.map((shape, idx) => (
            <div key={idx} className={`absolute ${shape.className} ${shape.animation}`} />
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00B8A9] to-[#00D2B5] shadow-[0_16px_40px_rgba(0,184,169,0.35)]">
              <ScrollText className="h-8 w-8" />
            </div>
            <Badge className="mb-2 border-0 bg-white/15 text-white text-[0.75rem]">Legal Agreement</Badge>
            <h1 className="mb-3 text-[1.55rem] sm:text-[1.8rem] font-semibold text-white leading-tight">Terms & Conditions</h1>
            <p className="mx-auto mb-5 max-w-2xl text-xs sm:text-[0.95rem] text-white/80">
              Please read these terms carefully before using our services. By accessing our platform, you agree to be bound by these terms.
            </p>
            <div className="inline-flex items-center gap-2 text-[0.7rem] sm:text-xs text-white/70">
              <Info className="h-3.5 w-3.5" />
              <span>Effective Date: 13/11/2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 pt-4 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-24 h-fit"
            >
              <Card className="flex flex-col gap-6 rounded-xl border border-gray-200 bg-white/80 p-6 text-[0.9rem] shadow-lg backdrop-blur-sm">
                <h3 className="text-[#1A2332] mb-4 text-base font-semibold">Quick Navigation</h3>
                <div className="space-y-1">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                          isActive
                            ? "bg-[#1A2332] text-white shadow-md"
                            : "text-[#2C3E50] hover:bg-[#F4F6F8]"
                        }`}
                        style={{ transitionDelay: `${index * 40}ms` }}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0 opacity-80" />
                        <span className="text-sm">{section.title}</span>
                      </button>
                    );
                  })}
                </div>
              </Card>
            </motion.aside>

            {/* Sections */}
            <div className="space-y-6 text-[1.25rem] sm:text-[1.3rem] font-semibold">
              {/* 1 */}
              <motion.div
                ref={(el) => {
                  sectionRefs.current[1] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <header className="mb-5 flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00B8A9] to-[#00D4B8] text-white">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-[#1A2332] text-lg font-semibold mb-1">1. Acceptance of Terms</h2>
                      <Badge className="border-0 bg-[#00B8A9]/10 text-xs text-[#00B8A9]">Required Reading</Badge>
                    </div>
                  </header>
                  <div className="space-y-4 text-[1.15rem] font-medium text-[#2C3E50] leading-relaxed">
                    <p>
                      By accessing or using any of V-Accel&apos;s custom software development services, SaaS products, consulting, or related offerings
                      (&quot;Services&quot;), you agree to be bound by these Terms &amp; Conditions (&quot;Terms&quot;).
                    </p>
                    <div className="rounded-r-lg border-l-4 border-[#00B8A9] bg-[#E8F5F4] p-4 text-sm">
                      <strong>If you do not agree to these Terms, you must not use our Services.</strong> These Terms constitute a binding legal
                      agreement between you and V-Accel AI Dynamics Pvt Ltd (&quot;V-Accel&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* 2 */}
              <motion.div
                ref={(el) => {
                  sectionRefs.current[2] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <header className="mb-5 flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3E5266] to-[#4A5568] text-white">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-[#1A2332] text-lg font-semibold mb-1">2. Services Overview</h2>
                      <p className="text-xs text-[#2C3E50]">V-Accel provides the following:</p>
                    </div>
                  </header>
                  <div className="space-y-3 text-[1.15rem] font-medium">
                    {serviceHighlights.map((item, idx) => (
                      <div key={item} className="flex items-start gap-2.5 rounded-lg bg-[#F4F6F8] p-2.5">
                        <CheckCircle2 className="h-4 w-4 text-[#00B8A9]" />
                        <span className="text-[#2C3E50]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-r-lg border-l-4 border-[#00B8A9] bg-[#E8F5F4] p-4 text-sm text-[#2C3E50]">
                    <strong>Scope of services</strong> depends on the specific agreement, subscription plan, or statement of work provided.
                  </div>
                </Card>
              </motion.div>

              {/* 3 */}
              <motion.div
                ref={(el) => {
                  sectionRefs.current[3] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <header className="mb-5 flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00B8A9] to-[#00D4B8] text-white">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-[#1A2332] text-lg font-semibold mb-1">3. User Responsibilities</h2>
                      <Badge className="border-0 bg-[#FF6B6B]/10 text-xs text-[#FF6B6B]">Important</Badge>
                    </div>
                  </header>
                  <p className="text-sm text-[#2C3E50] mb-3 font-medium">You are responsible for:</p>
                  <div className="grid gap-3 md:grid-cols-2 text-[1.15rem] font-medium">
                    {responsibilities.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 rounded-lg bg-[#F4F6F8] p-3">
                        <CheckCircle2 className="h-4 w-4 text-[#00B8A9]" />
                        <span className="text-[#2C3E50]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-r-lg border-l-4 border-[#FF6B6B] bg-[#FFF5F5] p-4 text-sm text-[#2C3E50]">
                    <strong>You are liable for all activities</strong> conducted under your account. Notify us immediately if you suspect unauthorized access.
                  </div>
                </Card>
              </motion.div>

              {/* Additional sections follow same pattern */}
              <TermsSection
                refCallback={(el) => (sectionRefs.current[4] = el)}
                delay={0.25}
                title="4. Payment & Billing"
                icon={<CreditCard className="h-5 w-5 text-white" />}
                gradient="from-[#3E5266] to-[#4A5568]"
                content={
                  <>
                    <SectionList
                      title="Subscription Services"
                      items={[
                        "Billed monthly or annually depending on your plan",
                        "Automatic renewal unless canceled before the renewal date",
                        "All fees are non-refundable unless otherwise stated",
                      ]}
                    />
                    <SectionList
                      title="Custom Development Projects"
                      items={[
                        "Pricing based on statement of work or project agreement",
                        "Payment milestones defined in the contract",
                        "Late payments may result in service suspension",
                      ]}
                    />
                    <Callout color="teal">
                      <strong>Taxes:</strong> Prices do not include applicable taxes. You are responsible for all taxes, duties, and government-imposed fees.
                    </Callout>
                  </>
                }
              />

              <TermsSection
                refCallback={(el) => (sectionRefs.current[5] = el)}
                delay={0.3}
                title="5. Intellectual Property"
                icon={<FileWarning className="h-5 w-5 text-white" />}
                gradient="from-[#FF6B6B] to-[#FF8787]"
                badges={<Badge className="border-0 bg-[#FF6B6B]/10 text-[#FF6B6B]">Critical</Badge>}
                content={
                  <div className="space-y-5 text-[#2C3E50]">
                    <SubSection title="Our IP">
                      All SaaS platforms, proprietary tools, frameworks, branding, and documentation remain the exclusive property of V-Accel. You receive only a limited, non-transferable license to use them.
                    </SubSection>
                    <SubSection title="Custom Development Work">
                      For custom projects, ownership and licensing terms are defined in the project agreement or statement of work. Typically, you receive full ownership upon final payment.
                    </SubSection>
                    <SubSection title="Your Content">
                      You retain ownership of all data, files, and content you upload. You grant us a limited license to process this content solely to provide Services.
                    </SubSection>
                  </div>
                }
              />

              <TermsSection
                refCallback={(el) => (sectionRefs.current[6] = el)}
                delay={0.35}
                title="6. Warranties & Disclaimers"
                icon={<ShieldAlert className="h-5 w-5 text-white" />}
                gradient="from-[#FF6B6B] to-[#FF8787]"
                badges={<Badge className="border-0 bg-[#FF6B6B] text-white">Read Carefully</Badge>}
                cardClass="bg-gradient-to-br from-[#FFF5F5] to-white border-[#FF6B6B]/30"
                content={
                  <div className="space-y-4 text-[#2C3E50]">
                    <div className="rounded-lg border border-[#FF6B6B]/30 bg-white p-4">
                      <p className="mb-3">
                        <strong>Services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;</strong> without warranties of any kind, including:
                      </p>
                      <ul className="space-y-2">
                        {["Merchantability or fitness for a particular purpose", "Uninterrupted or error-free operation", "Complete security or data integrity"].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-[#FF6B6B]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Callout color="teal">For custom projects, specific service levels and warranties may be outlined in your project agreement.</Callout>
                  </div>
                }
              />

              <TermsSection
                refCallback={(el) => (sectionRefs.current[7] = el)}
                delay={0.4}
                title="7. Limitation of Liability"
                icon={<AlertTriangle className="h-5 w-5 text-white" />}
                gradient="from-[#FF6B6B] to-[#FF8787]"
                content={
                  <>
                    <p className="text-[#2C3E50]">
                      To the maximum extent permitted by law, V-Accel and its affiliates, directors, employees, and partners shall not be liable for:
                    </p>
                    <div className="space-y-2">
                      {[
                        "Indirect, incidental, special, consequential, or punitive damages",
                        "Loss of profits, revenue, data, or business opportunities",
                        "Service interruptions, security breaches, or third-party failures",
                        "Any damages exceeding the fees paid to V-Accel in the preceding 12 months",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2.5 rounded-lg border border-[#FF6B6B]/20 bg-[#FFF5F5] p-3">
                          <AlertTriangle className="h-5 w-5 text-[#FF6B6B]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Callout color="teal">Some jurisdictions do not allow limitation of liability, so these exclusions may not apply to you.</Callout>
                  </>
                }
              />

              <TermsSection
                refCallback={(el) => (sectionRefs.current[8] = el)}
                delay={0.45}
                title="8. Termination"
                icon={<FileX className="h-5 w-5 text-white" />}
                gradient="from-[#3E5266] to-[#4A5568]"
                content={
                  <div className="space-y-5">
                    <SubSection title="By You">
                      You may cancel SaaS subscriptions or custom projects in accordance with your agreement. Refund eligibility depends on the service type and contract terms.
                    </SubSection>
                    <SubSection title="By V-Accel" tone="critical">
                      <p className="mb-3">We may suspend or terminate your account if you:</p>
                      <ul className="space-y-2 text-sm">
                        {["Violate these Terms", "Engage in fraudulent or illegal activity", "Fail to pay for Services", "Misuse our platform or harm other users"].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-[#FF6B6B]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </SubSection>
                    <Callout color="teal">Upon termination, you must cease all use of our Services. We may delete your data in accordance with our retention policies.</Callout>
                  </div>
                }
              />

              <TermsSection
                refCallback={(el) => (sectionRefs.current[9] = el)}
                delay={0.5}
                title="9. Prohibited Activities"
                icon={<Ban className="h-5 w-5 text-white" />}
                gradient="from-[#FF6B6B] to-[#FF8787]"
                badges={<Badge className="border-0 bg-[#FF6B6B] text-white">Strictly Forbidden</Badge>}
                cardClass="bg-gradient-to-br from-[#FFF5F5] to-white border-[#FF6B6B]/30"
                content={
                  <>
                    <p className="text-[#2C3E50]">You may not:</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      {[
                        "Reverse engineer, decompile, or hack our systems",
                        "Use our Services for illegal, harmful, or fraudulent purposes",
                        "Transmit malware, spam, or malicious code",
                        "Violate third-party intellectual property or privacy rights",
                        "Scrape, crawl, or automate access beyond allowed limits",
                        "Resell or sublicense our SaaS products without permission",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 rounded-lg border border-[#FF6B6B]/30 bg-white p-3 text-sm">
                          <Ban className="h-4 w-4 text-[#FF6B6B]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Callout color="critical">
                      <strong>Violations may result in immediate termination</strong> and potential legal action.
                    </Callout>
                  </>
                }
              />

              <TermsSection
                refCallback={(el) => (sectionRefs.current[10] = el)}
                delay={0.55}
                title="10. Governing Law"
                icon={<Scale className="h-5 w-5 text-white" />}
                gradient="from-[#3E5266] to-[#4A5568]"
                content={
                  <div className="space-y-4 text-[#2C3E50]">
                    <p>
                      These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of our Services shall be subject to
                      the exclusive jurisdiction of courts in Chennai, Tamil Nadu, India.
                    </p>
                    <div className="rounded-lg bg-[#F4F6F8] p-4">
                      <strong>Dispute Resolution:</strong> We encourage good-faith negotiation before pursuing formal legal action. For custom projects, arbitration clauses may be specified in separate agreements.
                    </div>
                  </div>
                }
              />

              <TermsSection
                refCallback={(el) => (sectionRefs.current[11] = el)}
                delay={0.6}
                title="11. Contact Information"
                icon={<Mail className="h-5 w-5 text-white" />}
                gradient="from-[#00B8A9] to-[#00D2B5]"
                cardClass="bg-gradient-to-br from-[#E8F5F4] to-white border-[#00B8A9]/30"
                content={
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-[#00B8A9]/20 bg-white p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00B8A9]/10">
                          <Mail className="h-5 w-5 text-[#00B8A9]" />
                        </div>
                        <h3 className="text-[#1A2332]">Email</h3>
                      </div>
                      <a href="mailto:info@v-accel.ai" className="text-[#00B8A9] hover:underline">
                        info@v-accel.ai
                      </a>
                    </div>
                    <div className="rounded-xl border border-[#00B8A9]/20 bg-white p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00B8A9]/10">
                          <MapPin className="h-5 w-5 text-[#00B8A9]" />
                        </div>
                        <h3 className="text-[#1A2332]">Address</h3>
                      </div>
                      <div className="space-y-1 text-sm text-[#2C3E50]">
                        <p>V-Accel AI Dynamics Pvt Ltd</p>
                        <p>No:04, Ground Floor, Tidel Park,</p>
                        <p>Rajiv Gandhi Salai, Taramani,</p>
                        <p>Chennai - 113</p>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

type TermsSectionProps = {
  refCallback: (el: HTMLDivElement | null) => void;
  delay: number;
  title: string;
  icon: React.ReactNode;
  gradient: string;
  cardClass?: string;
  badges?: React.ReactNode;
  content: React.ReactNode;
};

function TermsSection({ refCallback, delay, title, icon, gradient, cardClass, badges, content }: TermsSectionProps) {
  return (
    <motion.div
      ref={refCallback}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Card className={`p-6 shadow-lg hover:shadow-xl transition-shadow ${cardClass ?? ""}`}>
        <header className="mb-5 flex items-start gap-4">
          <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}>
            {icon}
          </div>
          <div>
            <h2 className="text-[#1A2332] text-lg font-semibold mb-1">{title}</h2>
            {badges}
          </div>
        </header>
        <div className="space-y-4 text-[1.15rem] font-medium text-[#2C3E50] leading-relaxed">{content}</div>
      </Card>
    </motion.div>
  );
}

function SectionList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[#1A2332] text-lg font-semibold mb-3">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-2.5 rounded-lg bg-[#F4F6F8] p-3 text-[1.15rem] font-medium">
            <CheckCircle2 className="h-4 w-4 text-[#3E5266]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubSection({ title, children, tone }: { title: string; children: React.ReactNode; tone?: "critical" }) {
  const baseClass =
    tone === "critical"
      ? "rounded-lg border border-[#FF6B6B]/20 bg-[#FFF5F5] p-4"
      : "rounded-lg bg-[#F4F6F8] p-4";
  return (
    <div className={baseClass}>
      <h3 className="mb-2 text-lg font-semibold text-[#1A2332]">{title}</h3>
      <div className="text-[1.15rem] font-medium text-[#2C3E50] leading-relaxed">{children}</div>
    </div>
  );
}

function Callout({ children, color }: { children: React.ReactNode; color: "teal" | "critical" }) {
  const palette =
    color === "teal"
      ? { border: "border-[#00B8A9]", bg: "bg-[#E8F5F4]" }
      : { border: "border-[#FF6B6B]", bg: "bg-white" };

  return (
    <div className={`rounded-r-lg border-l-4 ${palette.border} ${palette.bg} p-4 text-sm text-[#2C3E50] font-medium leading-relaxed`}>
      {children}
    </div>
  );
}

