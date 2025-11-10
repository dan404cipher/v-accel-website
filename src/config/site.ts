type NavigationItem = {
  title: string;
  href: string;
  description?: string;
};

type SocialLink = {
  title: string;
  href: string;
};

export const siteConfig = {
  name: "V-Accel",
  tagline: "Building resilient software for regulated industries",
  description:
    "V-Accel is a full-stack product studio partnering with leaders in fintech, edtech, and enterprise SaaS to deliver high-trust digital experiences.",
  locale: "en_US",
  contact: {
    email: "hello@v-accel.com",
    phone: "+1 (555) 012-3456",
    address: "900 Innovation Drive, Suite 200, Austin, TX",
  },
  navigation: {
    main: [
      { title: "Services", href: "/services", description: "What we build" },
      { title: "Case Studies", href: "/case-studies", description: "Proof and outcomes" },
      { title: "Process", href: "/process", description: "How we operate" },
      { title: "Insights", href: "/insights", description: "Thought leadership" },
      { title: "About", href: "/about", description: "Team and ethos" },
    ] satisfies NavigationItem[],
    secondary: [
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" },
    ] satisfies NavigationItem[],
  },
  social: [
    { title: "LinkedIn", href: "https://www.linkedin.com/company/v-accel" },
    { title: "Twitter", href: "https://x.com/vaccel" },
  ] satisfies SocialLink[],
};

export type SiteConfig = typeof siteConfig;

