"use client";

import { useState } from "react";
import { AnimatedWrapper } from "@/components/shared/AnimatedWrapper";
import { GlowingButton } from "@/components/ui/glowing-button";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };
  
  return (
    <AnimatedWrapper className="w-full max-w-xl mx-auto">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 peer transition-all"
                placeholder="Your Name"
              />
              <label
                htmlFor="name"
                className="absolute left-4 -top-2.5 text-sm text-zinc-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3.5 transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-purple-400 peer-focus:text-sm"
              >
                Your Name
              </label>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 rounded-lg border border-purple-500/30 blur"></div>
              </div>
            </div>
            
            <div className="relative group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 peer transition-all"
                placeholder="Your Email"
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-2.5 text-sm text-zinc-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3.5 transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-purple-400 peer-focus:text-sm"
              >
                Your Email
              </label>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 rounded-lg border border-purple-500/30 blur"></div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-black/30 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 peer transition-all"
              placeholder="Company (Optional)"
            />
            <label
              htmlFor="company"
              className="absolute left-4 -top-2.5 text-sm text-zinc-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3.5 transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-purple-400 peer-focus:text-sm"
            >
              Company (Optional)
            </label>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute inset-0 rounded-lg border border-purple-500/30 blur"></div>
            </div>
          </div>
          
          <div className="relative group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-black/30 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 peer transition-all resize-none"
              placeholder="Your Message"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 -top-2.5 text-sm text-zinc-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3.5 transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-purple-400 peer-focus:text-sm"
            >
              Your Message
            </label>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute inset-0 rounded-lg border border-purple-500/30 blur"></div>
            </div>
          </div>
          
          <GlowingButton type="submit" fullWidth size="lg" className="mt-8" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 size={20} className="animate-spin" />
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </GlowingButton>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle className="text-green-500" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
          <p className="text-zinc-400 mb-6">
            Thank you for reaching out. We will get back to you within 24 hours.
          </p>
          <GlowingButton onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </GlowingButton>
        </motion.div>
      )}
    </AnimatedWrapper>
  );
}