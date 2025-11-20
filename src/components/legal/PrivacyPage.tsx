"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useViewportAnimation } from "@/hooks/useViewportAnimation";
import {
  Baby,
  CheckCircle2,
  Clock,
  Cookie,
  Database,
  Eye,
  FileText,
  Globe,
  Info,
  Lock,
  Mail,
  MapPin,
  RefreshCw,
  Share2,
  Shield,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const PRIVACY_SECTIONS = [
  { id: 1, title: "Introduction", icon: Info },
  { id: 2, title: "Information We Collect", icon: Database },
  { id: 3, title: "How We Use Your Information", icon: ShieldCheck },
  { id: 4, title: "Legal Bases for Processing", icon: FileText },
  { id: 5, title: "Data Sharing", icon: Share2 },
  { id: 6, title: "International Data Transfers", icon: Globe },
  { id: 7, title: "Data Retention", icon: Clock },
  { id: 8, title: "Security Measures", icon: Lock },
  { id: 9, title: "Your Rights", icon: Eye },
  { id: 10, title: "Cookies & Tracking", icon: Cookie },
  { id: 11, title: "Children's Privacy", icon: Baby },
  { id: 12, title: "Third-Party Links", icon: Sparkles },
  { id: 13, title: "Changes to This Policy", icon: RefreshCw },
  { id: 14, title: "Contact Information", icon: Mail },
] as const;

type SectionId = (typeof PRIVACY_SECTIONS)[number]["id"];

const HERO_GLOW_POINTS = [
  { width: 120, height: 132, left: "73.5%", top: "9%", tone: "teal", delay: 0 },
  { width: 72, height: 136, left: "81.4%", top: "18%", tone: "coral", delay: 0.2 },
  { width: 82, height: 62, left: "78%", top: "75%", tone: "teal", delay: 0.4 },
  { width: 91, height: 123, left: "18%", top: "24%", tone: "coral", delay: 0.6 },
  { width: 97, height: 112, left: "58%", top: "72%", tone: "teal", delay: 0.8 },
  { width: 90, height: 113, left: "16%", top: "98%", tone: "coral", delay: 1 },
];

const HERO_DECOR_SHAPES = [
  { className: "top-20 left-[10%] w-4 h-4 border-2 border-[#00B8A9]/30", animation: "animate-rotate-slow" },
  { className: "top-40 right-[15%] w-3 h-3 rounded-full bg-[#00B8A9]/20", animation: "animate-float-up-down" },
  { className: "bottom-32 right-[25%] w-6 h-6 border border-[#FF6B6B]/20 rotate-45", animation: "animate-rotate-reverse" },
];

const INFO_DIRECT = [
  "Name, email address, and phone number",
  "Company information and professional role",
  "Payment information (processed via secure third parties)",
  "Project requirements, uploaded assets, and communications",
];

const INFO_AUTOMATIC = [
  "Device and browser metadata (IP, OS, user agent)",
  "Usage logs and interaction events across our SaaS platforms",
  "Cookies, session identifiers, and diagnostic data",
  "Performance analytics and telemetry",
];

const INFO_THIRD_PARTY = [
  "Platform identifiers from integrated CRMs or tools",
  "Account metadata required for automation",
  "Operational data that powers requested integrations",
];

const USAGE_POINTS = [
  "Deliver, maintain, and improve our Services",
  "Configure SaaS features and custom solutions",
  "Provide support, onboarding, and success enablement",
  "Process payments and manage subscriptions",
  "Monitor reliability, security, and performance",
  "Send transactional updates or compliance notices",
  "Fulfil legal, contractual, or regulatory duties",
];

const LEGAL_BASES = [
  "Contract performance (providing the Services you request)",
  "Your consent (where explicitly required)",
  "Legitimate interests (security, analytics, product improvement)",
  "Compliance with legal obligations",
  "Protecting our platform and users from fraud or misuse",
];

const SHARING_POINTS = [
  "Infrastructure, hosting, and security providers",
  "Billing and payment processors",
  "Project vendors engaged to deliver scoped work",
  "Third-party integrations you explicitly authorize",
  "Regulators or authorities when legally required",
];

const RETENTION_POINTS = [
  "Active service delivery and account management",
  "Contractual or statutory retention periods",
  "Security, auditing, and troubleshooting requirements",
  "Regulatory or financial record keeping",
];

const SECURITY_ITEMS = [
  { icon: Shield, title: "Layered Security", desc: "Defense-in-depth controls across infrastructure and code." },
  { icon: Lock, title: "Encryption", desc: "Data encrypted in transit (TLS) and at rest." },
  { icon: Database, title: "Access Controls", desc: "Least-privilege and role-based permissions." },
  { icon: CheckCircle2, title: "Monitoring", desc: "Continuous logging, monitoring, and alerting." },
  { icon: FileText, title: "Audits", desc: "Regular assessments and compliance checks." },
  { icon: ShieldCheck, title: "Secure SDLC", desc: "Security reviews baked into development workflows." },
];

const RIGHTS_LIST = [
  "Access the personal data we hold about you",
  "Request corrections or updates",
  "Request deletion or restriction of processing",
  "Port your data where technically feasible",
  "Object to certain processing activities",
  "Withdraw consent (where consent is the lawful basis)",
  "Lodge a complaint with your local authority",
];

const COOKIE_PURPOSES = ["Authentication & sessions", "Preference storage", "Analytics & performance", "Security & fraud prevention", "Product personalization"];

export function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<SectionId>(1);
  const sectionRefs = useRef<Record<SectionId, HTMLDivElement | null>>(
    PRIVACY_SECTIONS.reduce(
      (acc, section) => {
        acc[section.id] = null;
        return acc;
      },
      {} as Record<SectionId, HTMLDivElement | null>,
    ),
  );

  const heroViewport = useViewportAnimation();
  const mainViewport = useViewportAnimation({ rootMargin: "-30% 0px -30% 0px" });

  const scrollToSection = (sectionId: SectionId) => {
    const element = sectionRefs.current[sectionId];
    if (!element) return;
    setActiveSection(sectionId);
    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibilityMap = new Map<SectionId, number>();

    const updateActive = () => {
      let maxVisibility = 0;
      let target: SectionId = 1;
      visibilityMap.forEach((visibility, id) => {
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          target = id;
        }
      });
      if (maxVisibility > 0) setActiveSection(target);
    };

    PRIVACY_SECTIONS.forEach((section) => {
      const element = sectionRefs.current[section.id];
      if (!element) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const rect = entry.boundingClientRect;
            const viewportHeight = window.innerHeight;
            const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
            const visibility = Math.max(0, visibleHeight / viewportHeight);
            if (entry.isIntersecting && visibility > 0.1) {
              visibilityMap.set(section.id, visibility);
            } else {
              visibilityMap.delete(section.id);
            }
            updateActive();
          });
        },
        { rootMargin: "-10% 0px -50% 0px", threshold: [0, 0.1, 0.3, 0.5, 0.7, 1] },
      );
      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F6F8] to-white text-[1rem] sm:text-[1.05rem]">
      <Hero viewportRef={heroViewport.ref} />
      <section ref={mainViewport.ref} className="py-16 -mt-12 relative z-20 play-animations">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            <SideNav activeSection={activeSection} onNavigate={scrollToSection} />
            <div className="space-y-6">
              <SectionCard
                refCallback={(el) => (sectionRefs.current[1] = el)}
                sectionId={1}
                activeSection={activeSection}
                icon={<Info className="w-6 h-6 text-white" />}
                gradient="from-[#00B8A9] to-[#00D4B8]"
                badge={{ label: "Essential", tone: "teal" }}
                title="1. Introduction"
                delay={0.1}
              >
                <p>
                  V-Accel AI Dynamics Pvt Ltd (“V-Accel”, “we”, “us”) is committed to protecting your privacy. This policy explains how we collect, use, store, and safeguard data across our custom software
                  solutions, SaaS offerings, and consulting services (“Services”).
                </p>
                <Callout color="teal">
                  <strong>By using our Services, you acknowledge and agree to the practices described in this Privacy Policy.</strong>
                </Callout>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[2] = el)}
                sectionId={2}
                activeSection={activeSection}
                icon={<Database className="w-6 h-6 text-white" />}
                gradient="from-[#3E5266] to-[#4A5568]"
                title="2. Information We Collect"
                delay={0.2}
              >
                <div className="space-y-5">
                  <CategoryCard title="A. Information You Provide" icon={<Shield className="w-4 h-4 text-white" />} accent="from-[#00B8A9] to-[#00D4B8]">
                    <BulletList items={INFO_DIRECT} />
                  </CategoryCard>
                  <CategoryCard title="B. Automatically Collected Data" icon={<Eye className="w-4 h-4 text-white" />} accent="from-[#3E5266] to-[#4A5568]">
                    <p className="text-sm text-[#2C3E50] mb-3">
                      Our websites and platforms capture telemetry to keep your experience secure and reliable:
                    </p>
                    <BulletList items={INFO_AUTOMATIC} />
                  </CategoryCard>
                  <CategoryCard title="C. Third-Party Integrations" icon={<Share2 className="w-4 h-4 text-white" />} accent="from-[#FF6B6B] to-[#FF8F8F]">
                    <p className="text-sm text-[#2C3E50] mb-3">With your authorization we may receive:</p>
                    <BulletList items={INFO_THIRD_PARTY} />
                  </CategoryCard>
                  <Callout color="teal">
                    <strong>We only process information that is necessary to deliver or improve the Services you requested.</strong>
                  </Callout>
                </div>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[3] = el)}
                sectionId={3}
                activeSection={activeSection}
                icon={<ShieldCheck className="w-6 h-6 text-white" />}
                gradient="from-[#00B8A9] to-[#00D4B8]"
                title="3. How We Use Your Information"
                delay={0.3}
              >
                <p className="text-[#2C3E50] mb-4">We use collected information to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                  {USAGE_POINTS.map((item) => (
                    <div key={item} className="flex items-start gap-2 rounded-lg bg-[#F4F6F8] p-3">
                      <CheckCircle2 className="w-4 h-4 text-[#00B8A9] mt-1 flex-shrink-0" />
                      <span className="text-sm text-[#1A2332]">{item}</span>
                    </div>
                  ))}
                </div>
                <Callout color="teal">
                  <strong>We do not sell personal data.</strong> Processing is strictly for delivering our Services or fulfilling legal duties.
                </Callout>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[4] = el)}
                sectionId={4}
                activeSection={activeSection}
                icon={<FileText className="w-6 h-6 text-white" />}
                gradient="from-[#3E5266] to-[#4A5568]"
                title="4. Legal Bases for Processing"
                badge={{ label: "Global Compliance", tone: "slate" }}
                delay={0.4}
              >
                <p className="text-[#2C3E50] mb-4">Because we operate globally, the following legal bases may apply:</p>
                <BulletList items={LEGAL_BASES} compact />
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[5] = el)}
                sectionId={5}
                activeSection={activeSection}
                icon={<Share2 className="w-6 h-6 text-white" />}
                gradient="from-[#FF6B6B] to-[#FF8F8F]"
                title="5. Data Sharing"
                delay={0.5}
              >
                <p className="text-[#2C3E50] mb-4">We share personal data only with trusted parties who help us deliver the Services:</p>
                <BulletList items={SHARING_POINTS} compact />
                <Callout color="teal">
                  <strong>We never disclose information to advertisers or unrelated third parties.</strong>
                </Callout>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[6] = el)}
                sectionId={6}
                activeSection={activeSection}
                icon={<Globe className="w-6 h-6 text-white" />}
                gradient="from-[#00B8A9] to-[#00D4B8]"
                title="6. International Data Transfers"
                badge={{ label: "Important", tone: "solid" }}
                delay={0.6}
                cardClass="bg-gradient-to-br from-[#E8F5F4] to-white border-[#00B8A9]/30"
              >
                <p className="text-[#2C3E50] mb-4 leading-relaxed">
                  V-Accel uses global infrastructure. When data leaves your region, we rely on Standard Contractual Clauses (SCCs), adequacy decisions, or comparable safeguards to keep information protected.
                </p>
                <Callout color="slate">
                  <strong>Your responsibility:</strong> ensure that sending data to us complies with the laws of your jurisdiction.
                </Callout>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[7] = el)}
                sectionId={7}
                activeSection={activeSection}
                icon={<Clock className="w-6 h-6 text-white" />}
                gradient="from-[#3E5266] to-[#4A5568]"
                title="7. Data Retention"
                delay={0.7}
              >
                <p className="text-[#2C3E50] mb-4">We retain personal data only for as long as necessary for:</p>
                <BulletList items={RETENTION_POINTS} compact />
                <Callout color="teal">You may request deletion unless we must retain data for legal obligations.</Callout>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[8] = el)}
                sectionId={8}
                activeSection={activeSection}
                icon={<Lock className="w-6 h-6 text-white" />}
                gradient="from-[#00B8A9] to-[#00D4B8]"
                title="8. Security Measures"
                delay={0.8}
              >
                <p className="text-[#2C3E50] mb-5">We implement layered technical and organizational safeguards:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SECURITY_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-xl border border-[#00B8A9]/20 bg-gradient-to-br from-[#F4F6F8] to-white p-4">
                        <div className="mb-2 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00B8A9]/10">
                            <Icon className="h-5 w-5 text-[#00B8A9]" />
                          </div>
                          <h3 className="text-[#1A2332]">{item.title}</h3>
                        </div>
                        <p className="text-sm text-[#2C3E50]">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
                <Callout color="coral">
                  No security control is foolproof. Please secure your credentials and notify us about suspicious activity.
                </Callout>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[9] = el)}
                sectionId={9}
                activeSection={activeSection}
                icon={<Eye className="w-6 h-6 text-white" />}
                gradient="from-[#3E5266] to-[#4A5568]"
                title="9. Your Rights"
                delay={0.9}
              >
                <p className="text-[#2C3E50] mb-4">Depending on your location, you may exercise the following rights:</p>
                <BulletList items={RIGHTS_LIST} />
                <Callout color="slate">We will honor valid requests in accordance with applicable regulations.</Callout>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[10] = el)}
                sectionId={10}
                activeSection={activeSection}
                icon={<Cookie className="w-6 h-6 text-white" />}
                gradient="from-[#FF6B6B] to-[#FF8F8F]"
                title="10. Cookies & Tracking"
                delay={1}
              >
                <p className="text-[#2C3E50] mb-4">We use cookies and similar technologies for:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {COOKIE_PURPOSES.map((item) => (
                    <div key={item} className="rounded-lg border border-[#FF6B6B]/30 bg-[#FFF5F5] p-3 text-sm text-[#2C3E50]">
                      {item}
                    </div>
                  ))}
                </div>
                <Callout color="slate">You can manage cookies in your browser settings, but disabling them may limit functionality.</Callout>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[11] = el)}
                sectionId={11}
                activeSection={activeSection}
                icon={<Baby className="w-6 h-6 text-white" />}
                gradient="from-[#00B8A9] to-[#00D4B8]"
                title="11. Children's Privacy"
                delay={1.1}
              >
                <p className="text-[#2C3E50]">
                  Our Services are intended for professionals aged 18+. We do not knowingly collect information from minors. If you believe a minor has provided data, contact us so we can remove it.
                </p>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[12] = el)}
                sectionId={12}
                activeSection={activeSection}
                icon={<Sparkles className="w-6 h-6 text-white" />}
                gradient="from-[#3E5266] to-[#4A5568]"
                title="12. Third-Party Links"
                delay={1.2}
              >
                <p className="text-[#2C3E50]">
                  Our digital properties may link to external resources. We are not responsible for the privacy practices or content of those third parties and encourage you to review their policies.
                </p>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[13] = el)}
                sectionId={13}
                activeSection={activeSection}
                icon={<RefreshCw className="w-6 h-6 text-white" />}
                gradient="from-[#00B8A9] to-[#00D4B8]"
                title="13. Changes to This Policy"
                delay={1.3}
              >
                <p className="text-[#2C3E50]">
                  We may update this Privacy Policy to reflect operational, legal, or regulatory changes. When we do, we will revise the effective date. Continued use of the Services indicates acceptance of
                  the updated policy.
                </p>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[14] = el)}
                sectionId={14}
                activeSection={activeSection}
                icon={<Mail className="w-6 h-6 text-white" />}
                gradient="from-[#00B8A9] to-[#00D4B8]"
                title="14. Contact Information"
                delay={1.4}
                cardClass="bg-gradient-to-br from-[#E8F5F4] to-white border-[#00B8A9]/30"
              >
                <p className="text-[#2C3E50] mb-4">For privacy inquiries, data rights requests, or compliance matters:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-[#00B8A9]/20 bg-white p-5">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00B8A9]/10">
                        <Mail className="h-5 w-5 text-[#00B8A9]" />
                      </div>
                      <h3 className="text-[#1A2332]">Email</h3>
                    </div>
                    <a href="mailto:info@v-accel.ai" className="text-[#00B8A9] hover:underline">
                      info@v-accel.ai
                    </a>
                  </div>
                  <div className="rounded-xl border border-[#00B8A9]/20 bg-white p-5">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00B8A9]/10">
                        <MapPin className="h-5 w-5 text-[#00B8A9]" />
                      </div>
                      <h3 className="text-[#1A2332]">Address</h3>
                    </div>
                    <div className="text-sm text-[#2C3E50] space-y-1">
                      <p>V-Accel AI Dynamics Pvt Ltd</p>
                      <p>No:04, Ground Floor, Tidel Park</p>
                      <p>Rajiv Gandhi Salai, Taramani</p>
                      <p>Chennai - 113</p>
                    </div>
                  </div>
                </div>
              </SectionCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Hero({ viewportRef }: { viewportRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <section ref={viewportRef} className="relative overflow-hidden bg-gradient-to-br from-[#3E5266] via-[#3E5266] to-[#4A5568] pt-32 pb-24 play-animations">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 184, 169, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 184, 169, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            backgroundPosition: "30px 30px",
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {HERO_GLOW_POINTS.map((glow) => (
          <div
            key={`${glow.left}-${glow.top}`}
            className={`absolute rounded-full blur-[40px] ${glow.tone === "teal" ? "bg-[#00B8A9]/15" : "bg-[#FF6B6B]/10"} animate-breathe`}
            style={{
              width: glow.width,
              height: glow.height,
              left: glow.left,
              top: glow.top,
              animationDuration: "12s",
              animationDelay: `${glow.delay}s`,
            }}
          />
        ))}

        <div className="absolute top-0 right-0 h-[600px] w-[600px] opacity-20 bg-[radial-gradient(circle,rgba(0,184,169,0.3),transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] opacity-15 bg-[radial-gradient(circle,rgba(255,107,107,0.2),transparent_70%)] blur-[90px]" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 opacity-10 bg-[radial-gradient(circle,rgba(255,255,255,0.2),transparent_70%)] blur-[80px] animate-rotate-slow" />

        {HERO_DECOR_SHAPES.map((shape) => (
          <div key={shape.className} className={`absolute ${shape.className} ${shape.animation}`} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center text-white sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.div
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#00B8A9] to-[#00D4B8] shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Shield className="h-10 w-10 text-white" />
          </motion.div>
          <Badge className="mb-4 border-[#00B8A9]/30 bg-[#00B8A9]/20 text-[#00B8A9]">Legal Documentation</Badge>
          <h1 className="mx-auto mb-4 max-w-3xl text-[2rem] font-semibold leading-tight sm:text-[2.25rem]">Privacy Policy</h1>
          <p className="mx-auto mb-6 max-w-2xl text-base text-white/80">
            Your privacy matters to us. Learn how we collect, use, and protect your personal information.
          </p>
          <div className="flex items-center justify-center gap-3 text-white/70">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Last Updated: 13/11/2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SideNav({ activeSection, onNavigate }: { activeSection: SectionId; onNavigate: (id: SectionId) => void }) {
  return (
    <Card className="flex h-fit flex-col gap-4 rounded-xl border border-gray-200 bg-white/80 p-6 text-sm shadow-lg backdrop-blur-sm lg:sticky lg:top-24">
      <h3 className="text-base font-semibold text-[#1A2332]">Quick Navigation</h3>
      <div className="space-y-1">
        {PRIVACY_SECTIONS.map(({ id, title, icon: Icon }, index) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all ${
                isActive ? "bg-[#1A2332] text-white shadow-md" : "text-[#2C3E50] hover:bg-[#F4F6F8]"
              }`}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm">{title}</span>
            </button>
          );
        })}
      </div>
    </Card>
  );
}

type SectionCardProps = {
  sectionId: SectionId;
  activeSection: SectionId;
  icon: React.ReactNode;
  gradient: string;
  title: string;
  children: React.ReactNode;
  badge?: { label: string; tone: "teal" | "slate" | "solid" };
  cardClass?: string;
  delay?: number;
  refCallback: (el: HTMLDivElement | null) => void;
};

function SectionCard({ sectionId, activeSection, icon, gradient, title, children, badge, cardClass, delay = 0.1, refCallback }: SectionCardProps) {
  return (
    <motion.div
      ref={refCallback}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <Card className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl ${cardClass ?? ""}`}>
        <header className="mb-5 flex items-start gap-4">
          <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}>{icon}</div>
          <div>
            <h2 className={`text-lg text-[#1A2332] ${activeSection === sectionId ? "font-bold" : "font-medium"}`}>{title}</h2>
            {badge && (
              <Badge
                className={
                  badge.tone === "teal"
                    ? "mt-2 border-0 bg-[#00B8A9]/10 text-xs text-[#00B8A9]"
                    : badge.tone === "solid"
                      ? "mt-2 border-0 bg-[#00B8A9] text-xs text-white"
                      : "mt-2 border-0 bg-[#3E5266]/10 text-xs text-[#3E5266]"
                }
              >
                {badge.label}
              </Badge>
            )}
          </div>
        </header>
        <div className="space-y-4 text-[#2C3E50]">{children}</div>
      </Card>
    </motion.div>
  );
}

function BulletList({ items, compact }: { items: string[]; compact?: boolean }) {
  return (
    <ul className={`space-y-2 ${compact ? "" : "text-[0.95rem]"}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-[#2C3E50]">
          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[#00B8A9]" />
          <span className="text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CategoryCard({ title, children, icon, accent }: { title: string; children: React.ReactNode; icon: React.ReactNode; accent: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-[#F4F6F8] p-5">
      <div className="mb-3 flex items-center gap-3">
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${accent}`}>{icon}</div>
        <h3 className="text-lg text-[#1A2332]">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Callout({ children, color }: { children: React.ReactNode; color: "teal" | "slate" | "coral" }) {
  const styles =
    color === "teal"
      ? "border-[#00B8A9] bg-[#E8F5F4]"
      : color === "coral"
        ? "border-[#FF6B6B] bg-[#FFF5F5]"
        : "border-[#3E5266] bg-white";
  return <div className={`rounded-r-xl border-l-4 p-4 text-sm leading-relaxed text-[#1A2332] ${styles}`}>{children}</div>;
}

