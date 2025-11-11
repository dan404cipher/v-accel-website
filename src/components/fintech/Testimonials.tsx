import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The team's expertise in financial technology is unmatched. They transformed our legacy systems into a modern, cloud-native platform that has dramatically improved our operational efficiency.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Global Banking Corp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
  },
  {
    quote: "Working with them was a game-changer for our digital transformation. Their deep understanding of regulatory compliance and security gave us confidence throughout the entire process.",
    author: "Michael Rodriguez",
    role: "VP of Technology",
    company: "FinTech Innovations",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5,
  },
  {
    quote: "They delivered our payment platform on time and under budget. The solution they built handles millions of transactions daily with zero downtime. Truly impressive technical capability.",
    author: "Priya Sharma",
    role: "Head of Digital",
    company: "National Payment Services",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#45647B]/10 rounded-full mb-4">
            <span className="text-[#45647B]">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-[32px]">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear what our clients have to say about working with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  
                  <p className="text-muted-foreground mb-6 flex-grow italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="text-sm">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>

                  <div className="flex gap-1 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 fill-primary"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
