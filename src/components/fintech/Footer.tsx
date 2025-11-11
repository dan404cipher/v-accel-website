import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary"></div>
              <span className="text-xl">FinTech Solutions</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Empowering financial institutions with cutting-edge technology solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cloud Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Custom Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Data Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Security & Compliance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>info@fintechsolutions.com</li>
              <li>+1 (555) 123-4567</li>
              <li>
                123 Financial District
                <br />
                New York, NY 10004
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
          <p>&copy; 2025 FinTech Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
