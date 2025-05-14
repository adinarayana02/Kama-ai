"use client";

import { motion } from "framer-motion";
import { AnimatedWrapper } from "@/components/shared/AnimatedWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { containerVariants, itemVariants } from "@/lib/animations";
import { GlowingButton } from "@/components/ui/glowing-button";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Strategy Development",
      description: "We analyze your business, audience, and competitors to develop a tailored multichannel acquisition strategy.",
    },
    {
      number: "02",
      title: "Channel Setup & Integration",
      description: "Setting up and optimizing each channel while ensuring they work together as a cohesive system.",
    },
    {
      number: "03",
      title: "Content Creation & Deployment",
      description: "Developing and deploying channel-specific content that resonates with your target audience.",
    },
    {
      number: "04",
      title: "Lead Capture & Qualification",
      description: "Implementing systems to capture, qualify, and route leads to the appropriate team member.",
    },
    {
      number: "05",
      title: "Analytics & Optimization",
      description: "Continuous monitoring and optimization of channel performance to maximize ROI.",
    },
  ];

  return (
    <section className="py-20 bg-black/50 relative">
      {/* Gradient Orb */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Proven Process"
          subtitle="We follow a structured approach to build acquisition systems that deliver consistent results."
          centered={true}
        />
        
        <AnimatedWrapper
          className="relative mt-20"
          stagger
        >
          {/* Progress Line */}
          <div className="absolute left-[40px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl z-10">
                {step.number}
              </div>
              
              {/* Content */}
              <div className={`md:w-[calc(50%-40px)] p-6 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl ${
                index % 2 === 0 ? 'md:text-left' : 'md:text-right'
              }`}>
                <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatedWrapper>
        
        <div className="mt-16 text-center">
          <AnimatedWrapper>
            <p className="text-xl text-zinc-300 mb-6">
              Ready to transform your lead generation with our multichannel system?
            </p>
            <GlowingButton href="/contact" size="lg">
              Schedule a Strategy Call
            </GlowingButton>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}