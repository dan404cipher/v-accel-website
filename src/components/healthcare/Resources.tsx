'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const resources = [
  {
    type: "Whitepaper",
    icon: FileText,
    title: "The Future of Digital Banking",
    description: "Explore emerging trends and technologies shaping the next generation of banking services.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjByZXBvcnR8ZW58MXx8fHwxNzYyNTgwMDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Trending",
  },
  {
    type: "E-Book",
    icon: BookOpen,
    title: "Cloud Migration for Financial Institutions",
    description: "A comprehensive guide to successful cloud adoption with best practices and case studies.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyNTgwMDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Popular",
  },
  {
    type: "Report",
    icon: TrendingUp,
    title: "AI in FinTech: 2025 Industry Report",
    description: "Data-driven insights on artificial intelligence adoption and ROI in financial services.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXxlbnwxfHx8fDE3NjI1ODAwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "New",
  },
];

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
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary">Resources & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Stay Ahead with FinTech Knowledge
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert insights, guides, and research to help you navigate the future of financial technology
          </p>
        </div>

        {/* Featured Resources */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                    {resource.tag}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm text-primary">{resource.type}</span>
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Download Free
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
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
