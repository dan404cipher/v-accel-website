import { Metadata } from "next";
import { ContactPage } from "@/components/parent/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with V-Accel AI Dynamics. Ready to transform your ideas into reality? Let's build something amazing together.",
};

export default function Page() {
  return <ContactPage />;
}
