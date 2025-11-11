'use client';

import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.div 
                className="h-8 w-8 rounded-lg bg-primary"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              ></motion.div>
              <span className="text-xl">V-Accel Healthcare</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Empowering healthcare organizations with cutting-edge technology solutions.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4">Solutions</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                  EHR & EMR Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                  Patient Portals & Telehealth
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                  Hospital Management Systems
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                  Compliance & Data Security
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:info@v-accel.com" className="hover:text-primary transition-colors">
                  info@v-accel.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                123 Healthcare Plaza
                <br />
                San Francisco, CA 94105
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; 2025 V-Accel Healthcare. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors hover:scale-105 inline-block">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors hover:scale-105 inline-block">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors hover:scale-105 inline-block">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
