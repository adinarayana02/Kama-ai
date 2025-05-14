"use client";

import { motion } from "framer-motion";
import { AnimatedWrapper } from "@/components/shared/AnimatedWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { fadeIn, textVariant } from "@/lib/animations";
import { Brain, Users, Target, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
            <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Multichannel Acquisition Dashboard" 
                  className="rounded-xl w-full"
                />
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs">
                    AI
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">AI-Powered</p>
                    <p className="text-green-400 text-xs">Innovation</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xs">
                    24/7
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Always Active</p>
                    <p className="text-green-400 text-xs">Global Support</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-2xl blur-xl -z-10"></div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              title="About Kama.ai"
              subtitle="We blend artificial and human intelligence to empower businesses with systems that cut through inefficiencies and unlock scale."
              className="text-left"
            />

            <div className="space-y-6 mt-8">
              <p className="text-zinc-400">
                We&apos;ve partnered with established companies to reduce manual work, automate decision-making, and move faster—without the overhead of building in-house.
              </p>
              
              <p className="text-zinc-400">
                Our core work falls into four areas: delivering custom AI systems through direct B2B projects, collaborating with other agencies as a technical partner, providing hands-on AI education through training and workshops, and offering strategic consulting to guide AI adoption. Each solution is tailored, each result measurable.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 