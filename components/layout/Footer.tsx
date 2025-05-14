"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS, SITE_NAME } from "@/lib/constants";
import { GlowingButton } from "@/components/ui/glowing-button";
import { Facebook, Instagram, Twitter, Linkedin, SendIcon, ArrowRight, ZapIcon } from "lucide-react";
import { useState } from "react";
import { fadeIn } from "@/lib/animations";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Here you would normally send the email to your API
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "Twitter":
        return <Twitter size={20} />;
      case "LinkedIn":
        return <Linkedin size={20} />;
      case "Facebook":
        return <Facebook size={20} />;
      case "Instagram":
        return <Instagram size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <ZapIcon className="text-white h-6 w-6" />
                <div className="absolute -inset-1 rounded-full blur-sm bg-gradient-to-r from-purple-500 to-cyan-500 opacity-50"></div>
              </div>
              <span className="text-xl font-bold text-white">
                Kama<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">.ai</span>
              </span>
            </div>
            <p className="text-zinc-400 mb-6">
              We build multichannel acquisition systems that bring you leads every day while building your brand across all social media channels.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white/70 hover:text-white hover:bg-zinc-800 transition-colors"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.name)}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-zinc-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-semibold mb-6">Subscribe to Newsletter</h3>
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-3 px-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2"
                    aria-label="Subscribe"
                  >
                    <SendIcon size={18} />
                  </button>
                </div>
                <p className="text-xs text-zinc-500">
                  By subscribing, you agree to our privacy policy and consent to receive marketing emails.
                </p>
              </form>
            ) : (
              <div className="bg-zinc-900/50 border border-purple-500/20 rounded-lg p-4">
                <p className="text-white mb-2">Thank you for subscribing!</p>
                <p className="text-zinc-400 text-sm">
                  Keep an eye on your inbox for exclusive resources and updates.
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm mt-4 md:mt-0">
            Designed & Built with precision
          </p>
        </div>
      </div>
    </footer>
  );
}