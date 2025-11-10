'use client';

import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { motion } from "motion/react";

const footerLinks = {
  services: [
    { label: "Cloud Infrastructure", href: "#services" },
    { label: "Custom Development", href: "#services" },
    { label: "Data Management", href: "#services" },
    { label: "Security & Compliance", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Github, href: "#" },
  { icon: Mail, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white">E</span>
              </div>
              <h3 className="text-primary-foreground">EduTech Solutions</h3>
            </div>
            <p className="text-background/70 mb-6 text-sm">
              Empowering educational institutions with cutting-edge technology solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/70 text-sm hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/70 text-sm hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@edutechsolutions.com" className="text-background/70 hover:text-background transition-colors">
                  info@edutechsolutions.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-background/70 hover:text-background transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="text-background/70">
                123 Educational District<br />
                New York, NY 10004
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">&copy; 2025 EduTech Solutions. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/70 hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
