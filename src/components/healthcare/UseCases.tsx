'use client';

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Building2, Video, FlaskConical, ShieldCheck, Pill, Stethoscope, CheckCircle2, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";

const useCases = [
  {
    id: "hospitals",
    label: "Hospital Systems",
    icon: Building2,
    title: "Hospital Management Systems",
    description: "Transform hospital operations with integrated EHR systems, patient management, and workflow automation that improves clinical outcomes.",
    features: [
      "Electronic Health Records (EHR) integration",
      "Patient registration and appointment scheduling",
      "Real-time bed management and resource allocation",
      "Clinical decision support and alerts",
    ],
    metric: "45%",
    metricLabel: "Reduction in administrative time",
    gradient: "from-[#4CAF50]/20 via-[#4CAF50]/10 to-[#4CAF50]/20",
  },
  {
    id: "telehealth",
    label: "Telehealth",
    icon: Video,
    title: "Telehealth Platforms",
    description: "Enable remote care delivery with secure video consultations, remote patient monitoring, and virtual care coordination.",
    features: [
      "HIPAA-compliant video consultations",
      "Remote patient monitoring and vitals tracking",
      "e-Prescriptions and digital health records",
      "Provider scheduling and availability management",
    ],
    metric: "60%",
    metricLabel: "Increase in patient access to care",
    gradient: "from-[#4CAF50]/20 via-[#4CAF50]/10 to-[#4CAF50]/20",
  },
  {
    id: "labs",
    label: "Clinical Labs",
    icon: FlaskConical,
    title: "Laboratory Information Systems",
    description: "Streamline lab operations with automated test ordering, result management, and seamless integration with clinical workflows.",
    features: [
      "Automated test ordering and tracking",
      "Digital pathology and imaging integration",
      "Quality control and compliance monitoring",
      "HL7/FHIR-based result delivery to EHRs",
    ],
    metric: "50%",
    metricLabel: "Faster result turnaround time",
    gradient: "from-[#4CAF50]/20 via-[#4CAF50]/10 to-[#4CAF50]/20",
  },
  {
    id: "payers",
    label: "Insurance Payers",
    icon: ShieldCheck,
    title: "Health Insurance Technology",
    description: "Modern claims processing, member management, and provider networks that enhance operational efficiency and member experience.",
    features: [
      "Automated claims adjudication and processing",
      "Member portal with benefits and coverage info",
      "Provider credentialing and network management",
      "Pre-authorization and utilization review",
    ],
    metric: "99.9%",
    metricLabel: "Claims processing accuracy",
    gradient: "from-[#4CAF50]/20 via-[#4CAF50]/10 to-[#4CAF50]/20",
  },
  {
    id: "pharmacy",
    label: "Pharmacies",
    icon: Pill,
    title: "Pharmacy Management Solutions",
    description: "Comprehensive pharmacy systems for prescription management, inventory control, and patient medication adherence.",
    features: [
      "e-Prescription processing and verification",
      "Inventory management and drug interaction alerts",
      "Patient medication history and adherence tracking",
      "Insurance verification and billing automation",
    ],
    metric: "40%",
    metricLabel: "Reduction in prescription errors",
    gradient: "from-[#4CAF50]/20 via-[#4CAF50]/10 to-[#4CAF50]/20",
  },
  {
    id: "devices",
    label: "Medical Devices",
    icon: Stethoscope,
    title: "Medical Device Integration",
    description: "Connect medical devices and IoT sensors to clinical systems for real-time monitoring, alerts, and data-driven insights.",
    features: [
      "Real-time device data integration to EHRs",
      "Remote patient monitoring and alerts",
      "FDA-compliant device software solutions",
      "Interoperability with HL7 and FHIR standards",
    ],
    metric: "24/7",
    metricLabel: "Continuous patient monitoring",
    gradient: "from-[#4CAF50]/20 via-[#4CAF50]/10 to-[#4CAF50]/20",
  },
];

export function UseCases() {
  const [activeTab, setActiveTab] = useState("hospitals");

  return (
    <section id="use-cases" className="py-20 lg:py-32 bg-[#F4F6F8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 px-4 py-2 bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20">
            <Sparkles className="h-3 w-3 mr-2 inline" />
            Use Cases
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-[#2C3E50]">
            Solutions Across Healthcare Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Versatile technology tailored for every segment of the healthcare industry
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Modern Tab Triggers */}
          <TabsList className="inline-flex w-auto h-auto p-1.5 bg-white/50 backdrop-blur-sm border border-[#4CAF50]/10 rounded-full mb-12 mx-auto grid grid-cols-3 md:grid-cols-6 gap-1">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className="relative flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-[#4CAF50]/5 text-[#2C3E50]"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{useCase.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Modern Tab Content */}
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <TabsContent 
                key={useCase.id} 
                value={useCase.id} 
                className="mt-0 animate-in fade-in-50 duration-500"
              >
                <div className="relative overflow-hidden rounded-3xl border-2 border-[#4CAF50]/10 bg-white">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-50`} />
                  
                  <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                    {/* Left Column - Content */}
                    <div className="space-y-6">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4CAF50]/10 border-2 border-[#4CAF50]/20">
                        <Icon className="h-8 w-8 text-[#4CAF50]" />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-3xl lg:text-4xl text-[#2C3E50]">
                          {useCase.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-[#4CAF50]">
                          <div className="h-px w-8 bg-[#4CAF50]" />
                          Key Features
                        </div>
                        <ul className="space-y-3">
                          {useCase.features.map((feature, idx) => (
                            <li 
                              key={idx} 
                              className="flex items-start gap-3 group"
                              style={{ animationDelay: `${idx * 100}ms` }}
                            >
                              <CheckCircle2 className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                              <span className="text-muted-foreground leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column - Metric Card */}
                    <div className="flex items-center justify-center">
                      <div className="w-full max-w-md">
                        <div className="relative overflow-hidden rounded-2xl border-2 border-[#4CAF50]/20 bg-white/80 backdrop-blur-sm p-8 lg:p-10 shadow-xl">
                          {/* Decorative gradient */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4CAF50]/10 rounded-full blur-xl" />
                          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4CAF50]/5 rounded-full blur-xl" />
                          
                          <div className="relative space-y-6 text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4CAF50]/10 border border-[#4CAF50]/20">
                              <Sparkles className="h-4 w-4 text-[#4CAF50]" />
                              <span className="text-sm text-[#4CAF50]">Impact Metric</span>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="text-6xl lg:text-7xl text-[#4CAF50]">
                                {useCase.metric}
                              </div>
                              <div className="text-lg text-muted-foreground">
                                {useCase.metricLabel}
                              </div>
                            </div>

                            {/* Visual separator */}
                            <div className="pt-6 border-t border-[#4CAF50]/10">
                              <p className="text-sm text-muted-foreground">
                                Proven results across healthcare deployments
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
