import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedWrapper } from "@/components/shared/AnimatedWrapper";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Kama.ai",
  description: "Get in touch with our team to discuss how we can help you build a multichannel acquisition system.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="text-purple-400" size={24} />,
      title: "Email Us",
      content: "hello@kama.ai",
      link: "#",
    },
    {
      icon: <Phone className="text-purple-400" size={24} />,
      title: "Call Us",
      content: "+91 8309871401",
      link: "tel:+91 8309871401",
    },
    {
      icon: <MapPin className="text-purple-400" size={24} />,
      title: "Visit Us",
      content: "Hi-tech city, Hyderabad,india",
      link: "#",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <AnimatedWrapper>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
                Touch
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
              Let discuss how our multichannel acquisition systems can help your business generate more leads and build a stronger brand.
            </p>
          </AnimatedWrapper>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <AnimatedWrapper className="space-y-8" delay={0.1}>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-zinc-400 mb-8">
                Our team is here to help you. Reach out to us through any of the channels below or use the form to send us a message.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-900/20 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{item.title}</h3>
                      <a
                        href={item.link}
                        className="text-zinc-400 hover:text-purple-400 transition-colors"
                      >
                        {item.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-white/10 mt-8">
                <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://twitter.com/kamaai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white/70 hover:text-white hover:bg-zinc-800 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/company/kamaai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white/70 hover:text-white hover:bg-zinc-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/kamaai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white/70 hover:text-white hover:bg-zinc-800 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/kamaai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white/70 hover:text-white hover:bg-zinc-800 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedWrapper>
            
            {/* Contact Form */}
            <div className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}