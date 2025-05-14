"use client";

import { motion } from "framer-motion";
import { AnimatedWrapper } from "@/components/shared/AnimatedWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { itemVariants } from "@/lib/animations";
import { Zap, LineChart, Users, Globe, ArrowRight, Sparkles } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Omnipresent Lead Generation",
      description: "Our systems work 24/7 across multiple channels to capture and qualify leads while you focus on closing deals.",
    },
    {
      icon: <LineChart size={24} />,
      title: "Data-Driven Optimization",
      description: "Continuous performance analysis and optimization based on real-time metrics to maximize ROI on every channel.",
    },
    {
      icon: <Users size={24} />,
      title: "Audience Segmentation",
      description: "Tailored messaging for different audience segments across channels to increase relevance and conversion rates.",
    },
    {
      icon: <Globe size={24} />,
      title: "Cross-Platform Brand Building",
      description: "Consistent brand presence across all platforms while adapting to each channel's unique requirements and audience.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "AI-Powered Content Creation",
      description: "Leverage AI to create and optimize content that resonates with your target audience on each platform.",
    },
    {
      icon: <ArrowRight size={24} />,
      title: "Automated Lead Nurturing",
      description: "Sequence-based follow-up systems that move leads through your funnel with minimal manual intervention.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Orb */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <SectionHeader
          title="How Our Multichannel Systems Work"
          subtitle="Our acquisition systems combine multiple channels into a cohesive lead generation machine that delivers results consistently."
          centered={true}
          highlightText="Multichannel Systems"
        />
        
        <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12" stagger>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-purple-500/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mb-5 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-shadow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </AnimatedWrapper>
      </div>
    </section>
  );
}