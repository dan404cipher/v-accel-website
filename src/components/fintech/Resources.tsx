import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Secure Payment Infrastructure at Scale",
    excerpt: "Learn the key principles for designing payment systems that can handle millions of transactions.",
    date: "Nov 5, 2025",
    readTime: "8 min read",
  },
  {
    title: "Regulatory Compliance in the Age of Open Banking",
    excerpt: "Navigate the complex landscape of financial regulations with confidence and efficiency.",
    date: "Nov 1, 2025",
    readTime: "6 min read",
  },
  {
    title: "Machine Learning for Fraud Detection",
    excerpt: "How advanced algorithms are revolutionizing security in financial transactions.",
    date: "Oct 28, 2025",
    readTime: "10 min read",
  },
];

export function Resources() {
  return (
    <section id="resources" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#45647B]/10 rounded-full mb-4">
            <span className="text-[#45647B]">Resources & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-[32px]">
            Stay Ahead with FinTech Knowledge
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert insights, guides, and research to help you navigate the future of financial technology
          </p>
        </div>

        {/* Blog Posts */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl">Latest from Our Blog</h3>
            <Button variant="ghost" className="gap-2">
              View All Posts
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 h-auto gap-2">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
