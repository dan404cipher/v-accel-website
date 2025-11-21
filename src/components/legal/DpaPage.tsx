"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useViewportAnimation } from "@/hooks/useViewportAnimation";
import {
  AlertCircle,
  CheckCircle2,
  CloudCog,
  Database,
  FileCheck,
  FileLock,
  FileText,
  Globe,
  Info,
  Lock,
  Mail,
  MapPin,
  Scale,
  Settings,
  Shield,
  ShieldCheck,
  Users,
  UserX,
  Clock,
} from "lucide-react";

const SECTIONS = [
  { id: 1, title: "Introduction", icon: Info },
  { id: 2, title: "Definitions", icon: FileText },
  { id: 3, title: "Scope of Processing", icon: Database },
  { id: 4, title: "Data Controller & Processor", icon: Users },
  { id: 5, title: "Security Measures", icon: Lock },
  { id: 6, title: "Sub-Processors", icon: Settings },
  { id: 7, title: "Data Subject Rights", icon: ShieldCheck },
  { id: 8, title: "Data Breach Notification", icon: AlertCircle },
  { id: 9, title: "International Transfers", icon: Globe },
  { id: 10, title: "Retention & Deletion", icon: Clock },
  { id: 11, title: "Audit Rights", icon: FileCheck },
  { id: 12, title: "Liability & Indemnity", icon: Scale },
  { id: 13, title: "Contact Information", icon: Mail },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

const DEFINITIONS = [
  { term: "Personal Data", definition: "Any information relating to an identified or identifiable natural person." },
  { term: "Processing", definition: "Any operation performed on personal data, including collection, storage, use, disclosure, or deletion." },
  { term: "Data Controller", definition: "The entity that determines the purposes and means of processing personal data (you, the client)." },
  { term: "Data Processor", definition: "The entity that processes personal data on behalf of the Controller (V-Accel)." },
  { term: "Data Subject", definition: "The individual to whom the personal data relates." },
  { term: "Sub-Processor", definition: "Third-party service providers engaged by V-Accel to assist in processing." },
];

const SCOPE_PURPOSES = [
  "Application hosting and infrastructure",
  "User authentication and access control",
  "Customer support and communication",
  "Analytics and performance monitoring",
];

const SCOPE_DATA = [
  "Contact details (name, email, phone)",
  "Account credentials and authentication data",
  "Usage and activity logs",
  "Content uploaded or submitted by users",
];

const SCOPE_SUBJECTS = [
  "End users of your services",
  "Your employees and contractors",
  "Customers and prospects",
  "Partners and vendors",
];

const CONTROLLER_OBLIGATIONS = [
  "Ensure you have lawful basis for processing",
  "Provide clear instructions to V-Accel",
  "Ensure data subjects' rights are respected",
  "Comply with applicable data protection laws",
];

const PROCESSOR_OBLIGATIONS = [
  "Process data only as instructed by the Controller",
  "Ensure confidentiality of personnel handling data",
  "Implement appropriate security measures",
  "Assist with data subject rights requests",
  "Notify Controller of data breaches",
  "Delete or return data upon request",
];

const SECURITY_CONTROLS = [
  { icon: Lock, title: "Encryption", desc: "Data encrypted in transit and at rest" },
  { icon: Shield, title: "Access Controls", desc: "Role-based permissions and MFA" },
  { icon: Database, title: "Data Backups", desc: "Regular automated backups" },
  { icon: AlertCircle, title: "Monitoring", desc: "24/7 security monitoring" },
  { icon: FileCheck, title: "Audits", desc: "Regular security assessments" },
  { icon: Users, title: "Training", desc: "Staff security awareness programs" },
];

const SUB_PROCESSORS = [
  "Cloud hosting providers (AWS, Google Cloud, Azure)",
  "Email service providers",
  "Analytics and monitoring tools",
  "Payment processors",
];

const DATA_SUBJECT_RIGHTS = [
  "Right of access",
  "Right to rectification",
  "Right to erasure",
  "Right to restriction of processing",
  "Right to data portability",
  "Right to object",
];

const BREACH_STEPS = [
  { step: "1", title: "Immediate Detection & Assessment", desc: "Identify and assess the scope and severity of the breach" },
  { step: "2", title: "Notification to Controller", desc: "Notify the Controller without undue delay (within 72 hours where feasible)" },
  { step: "3", title: "Detailed Documentation", desc: "Provide details including nature of breach, affected data, and remediation steps" },
  { step: "4", title: "Mitigation Measures", desc: "Take reasonable steps to contain and remediate the breach" },
];

const TRANSFER_SAFE_GUARDS = [
  "Standard Contractual Clauses (SCCs) approved by regulatory authorities",
  "Adequacy decisions where applicable",
  "Binding Corporate Rules or certification mechanisms",
  "Additional security measures as required by law",
];

const RETENTION_POINTS = [
  "Retain personal data only for as long as necessary to provide Services",
  "Delete or return personal data upon termination of the agreement (unless legally required to retain)",
  "Provide certification of deletion upon request",
  "Securely destroy all copies of personal data in accordance with industry standards",
];

const AUDIT_METHODS = [
  "Requesting compliance documentation and certifications",
  "Conducting on-site inspections (with reasonable advance notice)",
  "Engaging third-party auditors (subject to confidentiality obligations)",
  "Reviewing security reports and audit logs",
];

const FLOATING_SPOTS = [
  { size: 70, left: 12, top: 18, color: "teal" as const, offsetX: 25, offsetY: -30, delay: 0 },
  { size: 90, left: 35, top: 42, color: "coral" as const, offsetX: -20, offsetY: 35, delay: 2 },
  { size: 65, left: 68, top: 12, color: "teal" as const, offsetX: 18, offsetY: 20, delay: 1 },
  { size: 120, left: 82, top: 28, color: "coral" as const, offsetX: -30, offsetY: -15, delay: 3 },
  { size: 80, left: 15, top: 60, color: "teal" as const, offsetX: 22, offsetY: 28, delay: 1.5 },
  { size: 95, left: 58, top: 72, color: "coral" as const, offsetX: -18, offsetY: 25, delay: 2.5 },
];

export function DpaPage() {
  const [activeSection, setActiveSection] = useState<SectionId>(1);
  const sectionRefs = useRef<Record<SectionId, HTMLDivElement | null>>(
    SECTIONS.reduce(
      (acc, section) => {
        acc[section.id] = null;
        return acc;
      },
      {} as Record<SectionId, HTMLDivElement | null>,
    ),
  );

  const { ref: heroViewportRef } = useViewportAnimation();
  const { ref: mainViewportRef } = useViewportAnimation({ rootMargin: "-30% 0px -30% 0px" });

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
      let targetSection: SectionId = 1;
      visibilityMap.forEach((visibility, id) => {
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          targetSection = id;
        }
      });
      if (maxVisibility > 0) setActiveSection(targetSection);
    };

    SECTIONS.forEach((section) => {
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
    <div className="min-h-screen bg-gradient-to-br from-[#F4F6F8] to-white">
      <Hero viewportRef={heroViewportRef} />
      <section ref={mainViewportRef} className="py-16 -mt-12 relative z-20 play-animations">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            <SideNav activeSection={activeSection} onNavigate={scrollToSection} />
            <div className="space-y-6">
              <SectionCard
                refCallback={(el) => (sectionRefs.current[1] = el)}
                delay={0.1}
                sectionId={1}
                activeSection={activeSection}
                icon={<Info className="w-6 h-6 text-white" />}
                gradient="from-[#00B8A9] to-[#00D4B8]"
                badge={{ label: "GDPR Compliant", tone: "teal" }}
                title="1. Introduction"
              >
                <p>
                  This Data Processing Agreement ("DPA") forms part of the agreement between V-Accel AI Dynamics Pvt Ltd ("Processor") and you ("Controller") for the provision of software
                  development services, SaaS products, and related services ("Services").
                </p>
                <p>
                  This DPA reflects the parties' commitment to comply with applicable data protection laws, including the EU General Data Protection Regulation (GDPR), UK GDPR, and other
                  relevant privacy frameworks.
                </p>
                <Callout color="teal">
                  <strong>Purpose:</strong> This DPA governs how V-Accel processes personal data on behalf of the Controller.
                </Callout>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[2] = el)}
                delay={0.2}
                sectionId={2}
                activeSection={activeSection}
                icon={<FileText className="w-6 h-6 text-white" />}
                gradient="from-[#3E5266] to-[#4A5568]"
                title="2. Definitions"
              >
                <div className="space-y-3">
                  {DEFINITIONS.map((item) => (
                    <div key={item.term} className="bg-[#F4F6F8] p-4 rounded-lg border border-gray-200">
                      <h3 className="text-[#1A2332] mb-2">{item.term}</h3>
                      <p className="text-[#2C3E50] text-sm">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[3] = el)}
                delay={0.3}
                sectionId={3}
                activeSection={activeSection}
                icon={<Database className="w-6 h-6 text-white" />}
                gradient="from-[#00B8A9] to-[#00D4B8]"
                title="3. Scope of Processing"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#1A2332] text-lg mb-3">Nature and Purpose</h3>
                    <p className="text-[#2C3E50] mb-3">V-Accel processes personal data solely to provide the Services as outlined in your agreement, which may include:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {SCOPE_PURPOSES.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 p-3 bg-[#E8F5F4] rounded-lg">
                          <CheckCircle2 className="w-5 h-5 text-[#00B8A9] mt-0.5 flex-shrink-0" />
                          <span className="text-[#2C3E50] text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#1A2332] text-lg mb-3">Categories of Data</h3>
                    <div className="space-y-2.5">
                      {SCOPE_DATA.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 p-3 bg-[#F4F6F8] rounded-lg">
                          <Database className="w-5 h-5 text-[#3E5266] mt-0.5 flex-shrink-0" />
                          <span className="text-[#2C3E50]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#1A2332] text-lg mb-3">Categories of Data Subjects</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {SCOPE_SUBJECTS.map((item) => (
                        <div key={item} className="flex items-center gap-2 p-3 bg-[#F4F6F8] rounded-lg">
                          <Users className="w-4 h-4 text-[#00B8A9] flex-shrink-0" />
                          <span className="text-[#2C3E50] text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[4] = el)}
                delay={0.4}
                sectionId={4}
                activeSection={activeSection}
                icon={<Users className="w-6 h-6 text-white" />}
                gradient="from-[#3E5266] to-[#4A5568]"
                title="4. Data Controller & Processor Obligations"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#1A2332] text-lg mb-3">Controller Obligations (You)</h3>
                    <div className="bg-[#E8F5F4] p-5 rounded-lg border border-[#00B8A9]/20">
                      <ul className="space-y-2.5">
                        {CONTROLLER_OBLIGATIONS.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#00B8A9] mt-1 flex-shrink-0" />
                            <span className="text-[#2C3E50] text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#1A2332] text-lg mb-3">Processor Obligations (V-Accel)</h3>
                    <div className="bg-[#F4F6F8] p-5 rounded-lg">
                      <ul className="space-y-2.5">
                        {PROCESSOR_OBLIGATIONS.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Shield className="w-4 h-4 text-[#3E5266] mt-1 flex-shrink-0" />
                            <span className="text-[#2C3E50] text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[5] = el)}
                delay={0.5}
                sectionId={5}
                activeSection={activeSection}
                icon={<Lock className="w-6 h-6 text-white" />}
                gradient="from-[#00B8A9] to-[#00D4B8]"
                title="5. Security Measures"
                badge={{ label: "Industry Standard", tone: "solid" }}
                cardClass="bg-gradient-to-br from-[#E8F5F4] to-white border-[#00B8A9]/30"
              >
                <p className="text-[#2C3E50] mb-6 leading-relaxed">V-Accel implements technical and organizational measures to protect personal data:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SECURITY_CONTROLS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="bg-white p-5 rounded-lg border border-[#00B8A9]/20">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-[#00B8A9]/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-4 h-4 text-[#00B8A9]" />
                          </div>
                          <h3 className="text-[#1A2332]">{item.title}</h3>
                        </div>
                        <p className="text-[#2C3E50] text-sm">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[6] = el)}
                delay={0.6}
                sectionId={6}
                activeSection={activeSection}
                icon={<Settings className="w-6 h-6 text-white" />}
                gradient="from-[#3E5266] to-[#4A5568]"
                title="6. Sub-Processors"
              >
                <div className="space-y-4 text-[#2C3E50] leading-relaxed">
                  <p>V-Accel may engage third-party sub-processors to assist in providing the Services. All sub-processors are bound by contractual obligations consistent with this DPA.</p>
                  <div className="bg-[#F4F6F8] p-5 rounded-lg">
                    <h3 className="text-[#1A2332] mb-3">Common Sub-Processors Include:</h3>
                    <div className="space-y-2">
                      {SUB_PROCESSORS.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#3E5266] mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Callout color="teal">
                    <strong>Notification:</strong> We will notify you of any changes to our sub-processors. You may object to new sub-processors within a reasonable timeframe.
                  </Callout>
                </div>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[7] = el)}
                delay={0.7}
                sectionId={7}
                activeSection={activeSection}
                icon={<ShieldCheck className="w-6 h-6 text-white" />}
                gradient="from-[#00B8A9] to-[#00D4B8]"
                title="7. Data Subject Rights"
              >
                <div className="space-y-4 text-[#2C3E50] leading-relaxed">
                  <p>V-Accel will assist the Controller in fulfilling data subject rights requests, including:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {DATA_SUBJECT_RIGHTS.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 p-3 bg-[#E8F5F4] rounded-lg">
                        <ShieldCheck className="w-5 h-5 text-[#00B8A9] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Callout color="teal">
                    <strong>Response Time:</strong> V-Accel will provide reasonable assistance within the timeframes required by applicable law (typically 30 days).
                  </Callout>
                </div>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[8] = el)}
                delay={0.8}
                sectionId={8}
                activeSection={activeSection}
                icon={<AlertCircle className="w-6 h-6 text-white" />}
                gradient="from-[#FF6B6B] to-[#FF8787]"
                title="8. Data Breach Notification"
                badge={{ label: "Critical", tone: "red" }}
                cardClass="bg-gradient-to-br from-[#FFF5F5] to-white border-[#FF6B6B]/30"
              >
                <p>In the event of a personal data breach, V-Accel will:</p>
                <div className="space-y-3">
                  {BREACH_STEPS.map((item) => (
                    <div key={item.step} className="flex gap-4 p-4 bg-white rounded-lg border border-[#FF6B6B]/20">
                      <div className="w-8 h-8 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#FF6B6B]">{item.step}</div>
                      <div>
                        <h3 className="text-[#1A2332] mb-1">{item.title}</h3>
                        <p className="text-[#2C3E50] text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[9] = el)}
                delay={0.9}
                sectionId={9}
                activeSection={activeSection}
                icon={<Globe className="w-6 h-6 text-white" />}
                gradient="from-[#00B8A9] to-[#00D4B8]"
                title="9. International Transfers"
              >
                <div className="space-y-4 text-[#2C3E50] leading-relaxed">
                  <p>If personal data is transferred outside the EEA, UK, or other regulated jurisdictions, V-Accel ensures appropriate safeguards through:</p>
                  <div className="space-y-2.5">
                    {TRANSFER_SAFE_GUARDS.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 p-3 bg-[#E8F5F4] rounded-lg">
                        <Globe className="w-5 h-5 text-[#00B8A9] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Callout color="teal">
                    <strong>Compliance:</strong> All international transfers comply with Chapter V of the GDPR and equivalent provisions in other jurisdictions.
                  </Callout>
                </div>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[10] = el)}
                delay={1}
                sectionId={10}
                activeSection={activeSection}
                icon={<Clock className="w-6 h-6 text-white" />}
                gradient="from-[#3E5266] to-[#4A5568]"
                title="10. Retention & Deletion"
              >
                <div className="space-y-4 text-[#2C3E50] leading-relaxed">
                  <p>V-Accel will:</p>
                  <div className="space-y-2.5">
                    {RETENTION_POINTS.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 p-3 bg-[#F4F6F8] rounded-lg">
                        <UserX className="w-5 h-5 text-[#3E5266] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Callout color="teal">
                    <strong>Backup Data:</strong> Data in backups will be deleted or anonymized in accordance with standard backup retention policies (typically 30–90 days).
                  </Callout>
                </div>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[11] = el)}
                delay={1.1}
                sectionId={11}
                activeSection={activeSection}
                icon={<FileCheck className="w-6 h-6 text-white" />}
                gradient="from-[#00B8A9] to-[#00D4B8]"
                title="11. Audit Rights"
              >
                <div className="space-y-4 text-[#2C3E50] leading-relaxed">
                  <p>The Controller may audit V-Accel's compliance with this DPA by:</p>
                  <div className="bg-[#E8F5F4] p-5 rounded-lg border border-[#00B8A9]/20">
                    <ul className="space-y-2.5">
                      {AUDIT_METHODS.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <FileCheck className="w-4 h-4 text-[#00B8A9] mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Callout color="teal">
                    <strong>Frequency:</strong> Audits may be conducted no more than once per year unless required by a data protection authority or in response to a suspected breach.
                  </Callout>
                </div>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[12] = el)}
                delay={1.2}
                sectionId={12}
                activeSection={activeSection}
                icon={<Scale className="w-6 h-6 text-white" />}
                gradient="from-[#3E5266] to-[#4A5568]"
                title="12. Liability & Indemnity"
              >
                <div className="space-y-3 text-[#2C3E50] leading-relaxed">
                  <div className="bg-[#F4F6F8] p-4 rounded-lg">
                    <h3 className="text-[#1A2332] mb-2">Controller Liability</h3>
                    <p className="text-sm">The Controller is responsible for ensuring lawful processing instructions and compliance with data subject requests.</p>
                  </div>
                  <div className="bg-[#E8F5F4] p-4 rounded-lg border border-[#00B8A9]/20">
                    <h3 className="text-[#1A2332] mb-2">Processor Liability</h3>
                    <p className="text-sm">
                      V-Accel is liable for damages caused by failure to comply with GDPR obligations specific to processors or by acting outside lawful instructions.
                    </p>
                  </div>
                  <Callout color="red">
                    <strong>Limitation:</strong> Total liability is subject to the limitation of liability provisions in the main Services Agreement.
                  </Callout>
                </div>
              </SectionCard>

              <SectionCard
                refCallback={(el) => (sectionRefs.current[13] = el)}
                delay={1.3}
                sectionId={13}
                activeSection={activeSection}
                icon={<Mail className="w-6 h-6 text-white" />}
                gradient="from-[#00B8A9] to-[#00D4B8]"
                title="13. Contact Information"
                cardClass="bg-gradient-to-br from-[#E8F5F4] to-white border-[#00B8A9]/30"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-[#00B8A9]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#00B8A9]/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[#00B8A9]" />
                      </div>
                      <h3 className="text-[#1A2332]">Email</h3>
                    </div>
                    <a href="mailto:info@v-accel.ai" className="text-[#00B8A9] hover:underline">
                      info@v-accel.ai
                    </a>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-[#00B8A9]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#00B8A9]/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#00B8A9]" />
                      </div>
                      <h3 className="text-[#1A2332]">Address</h3>
                    </div>
                    <div className="text-[#2C3E50] text-sm space-y-1">
                      <p>V-Accel AI Dynamics Pvt Ltd</p>
                      <p>No:04, Ground Floor, Tidel Park,</p>
                      <p>Rajiv Gandhi Salai, Taramani,</p>
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

function Hero({ viewportRef }: { viewportRef: ReturnType<typeof useViewportAnimation>["ref"] }) {
  return (
    <section ref={viewportRef} className="relative pt-32 pb-24 bg-gradient-to-br from-[#3E5266] via-[#3E5266] to-[#4A5568] overflow-hidden play-animations">
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 184, 169, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 184, 169, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      {FLOATING_SPOTS.map((spot, i) => (
        <motion.div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${spot.size}px`,
            height: `${spot.size * 1.3}px`,
            left: `${spot.left}%`,
            top: `${spot.top}%`,
            background: spot.color === "teal" ? "radial-gradient(circle, rgba(0, 184, 169, 0.15) 0%, transparent 70%)" : "radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, spot.offsetX, 0],
            y: [0, spot.offsetY, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 12 + spot.delay, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20"
        style={{ background: "radial-gradient(circle, rgba(0, 184, 169, 0.3) 0%, transparent 70%)", filter: "blur(100px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-15"
        style={{ background: "radial-gradient(circle, rgba(255, 107, 107, 0.2) 0%, transparent 70%)", filter: "blur(90px)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15], x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] opacity-10"
        style={{ background: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)", filter: "blur(80px)", transform: "translate(-50%, -50%)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-20 left-[10%] w-4 h-4 border-2 border-[#00B8A9]/30"
        animate={{ y: [0, -20, 0], rotate: [0, 90, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-[15%] w-3 h-3 bg-[#00B8A9]/20 rounded-full"
        animate={{ y: [0, 30, 0], x: [0, -20, 0], scale: [1, 1.5, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-32 right-[25%] w-6 h-6 border border-[#FF6B6B]/20 rotate-45"
        animate={{ y: [0, -30, 0], rotate: [45, 135, 45], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center">
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-[#00B8A9] to-[#00D4B8] rounded-3xl flex items-center justify-center mb-6 shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <FileCheck className="w-10 h-10 text-white" />
          </motion.div>
          <Badge className="bg-[#00B8A9]/20 text-[#00B8A9] border-[#00B8A9]/20 mb-4">GDPR & Compliance</Badge>
          <h1 className="text-white mb-4 max-w-3xl">Data Processing Agreement</h1>
          <p className="text-white/90 text-lg max-w-2xl mb-6">Our commitment to processing your data securely and in compliance with global data protection regulations.</p>
          <div className="flex items-center gap-3 text-white/80">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Effective Date: 13/11/2025</span> 
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type SideNavProps = {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
};

function SideNav({ activeSection, onNavigate }: SideNavProps) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:sticky lg:top-32 h-fit">
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
        <h3 className="text-[#1A2332] mb-4">Quick Navigation</h3>
        <nav className="space-y-1">
          {SECTIONS.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <motion.button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                  isActive ? "bg-[#1A2332] text-white shadow-md" : "text-[#2C3E50] hover:bg-[#F4F6F8]"
                }`}
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{section.title}</span>
              </motion.button>
            );
          })}
        </nav>
      </Card>
    </motion.div>
  );
}

type SectionCardProps = {
  refCallback: (el: HTMLDivElement | null) => void;
  delay: number;
  title: string;
  icon: React.ReactNode;
  gradient: string;
  sectionId: SectionId;
  activeSection: SectionId;
  children: React.ReactNode;
  badge?: { label: string; tone: "teal" | "solid" | "red" };
  cardClass?: string;
};

function SectionCard({
  refCallback,
  delay,
  title,
  icon,
  gradient,
  sectionId,
  activeSection,
  children,
  badge,
  cardClass,
}: SectionCardProps) {
  const badgeStyles =
    badge?.tone === "solid"
      ? "bg-[#00B8A9] text-white"
      : badge?.tone === "red"
        ? "bg-[#FF6B6B]/10 text-[#FF6B6B]"
        : "bg-[#00B8A9]/15 text-[#00B8A9]";
  return (
    <motion.div ref={refCallback} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }}>
      <Card className={`p-8 bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow ${cardClass ?? ""}`}>
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>{icon}</div>
          <div>
            <h2 className={`text-[#1A2332] mb-2 ${activeSection === sectionId ? "font-bold" : "font-medium"}`}>{title}</h2>
            {badge ? <Badge className={`border-0 ${badgeStyles}`}>{badge.label}</Badge> : null}
          </div>
        </div>
        <div className="space-y-4 text-[#2C3E50] leading-relaxed">{children}</div>
      </Card>
    </motion.div>
  );
}

type CalloutProps = {
  color: "teal" | "red";
  children: React.ReactNode;
};

function Callout({ color, children }: CalloutProps) {
  const palette =
    color === "teal"
      ? { bg: "bg-[#E8F5F4]", border: "border-[#00B8A9]" }
      : { bg: "bg-[#FFF5F5]", border: "border-[#FF6B6B]" };
  return (
    <div className={`${palette.bg} border-l-4 ${palette.border} p-4 rounded-r-lg`}>
      <p className="text-sm">{children}</p>
    </div>
  );
}

