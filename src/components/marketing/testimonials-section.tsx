import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    quote:
      "V-Accel structured a cross-functional pod that revamped our lending operations. We cut manual underwriting time by 70% while meeting new OCC requirements ahead of schedule.",
    name: "Priya Anand",
    title: "Chief Product Officer, Horizon Bank",
  },
  {
    quote:
      "They speak both design and compliance. Our educator platform launched with zero accessibility bugs and a 4.9 CSAT in the first term.",
    name: "Morgan Lee",
    title: "VP Experience, LearnLab",
  },
  {
    quote:
      "The team designed and shipped an AI copilot that our analysts use daily. Governance, model evals, and change management were part of the same playbook.",
    name: "Bruno Ortega",
    title: "Head of Innovation, Altius Insurance",
  },
] as const;

export function TestimonialsSection() {
  return (
    <Container as="section" className="space-y-12">
      <SectionHeader
        eyebrow="Testimonials"
        title="Trusted by operators where failure is not an option"
        description="We integrate with your product and operations leaders to turn roadmaps into measurable business outcomes."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="border border-border/80 bg-card/80 backdrop-blur">
            <CardHeader className="space-y-6">
              <CardTitle className="text-base font-normal text-foreground">
                “{testimonial.quote}”
              </CardTitle>
              <Separator />
              <CardDescription className="space-y-1">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p>{testimonial.title}</p>
              </CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </Container>
  );
}

