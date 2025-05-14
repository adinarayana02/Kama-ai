"use client";

import { motion } from "framer-motion";
import { GlowingButton } from "@/components/ui/glowing-button";
import { fadeIn, textVariant } from "@/lib/animations";
import ParticlesBackground from "./ParticlesBackground";
import { Sparkles, Users, BarChart } from "lucide-react";
import { SlidingFeatures } from "./SlidingFeatures";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={fadeIn("up", 0)}
              className="flex items-center gap-2 mb-6"
            >
              <div className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 backdrop-blur-sm">
                Kama.ai Multichannel Acquisition Systems
              </div>
            </motion.div>

            <motion.h1 
              variants={textVariant(0.1)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Transform Your Business with{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                AI Automation
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🚀
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={textVariant(0.2)}
              className="text-lg md:text-xl text-zinc-400 mb-8"
            >
              <motion.span
                className="inline-block"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Kama.ai
              </motion.span>{" "}
              helps you fill your calendar with 360° lead gen systems while building your brand across all social media channels.
            </motion.p>

            <motion.div 
              variants={fadeIn("up", 0.3)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <GlowingButton href="/contact" size="lg">
                Get a Free Strategy Call
              </GlowingButton>
              <GlowingButton href="/case-studies" variant="outline" size="lg">
                Explore Case Studies
              </GlowingButton>
            </motion.div>

            {/* Metrics */}
            <motion.div 
              variants={fadeIn("up", 0.4)}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
            >
              <div className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">
                    <BarChart size={20} />
                  </div>
                  <span className="text-lg font-medium text-white"></span>
                </div>
                <p className="text-zinc-400 text-sm">Average growth in qualified leads</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center text-white">
                    <Sparkles size={20} />
                  </div>
                  <span className="text-lg font-medium text-white"></span>
                </div>
                <p className="text-zinc-400 text-sm">Channels optimized for each client</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white">
                    <Users size={20} />
                  </div>
                  <span className="text-lg font-medium text-white"></span>
                </div>
                <p className="text-zinc-400 text-sm">Happy clients</p>
              </div>
            </motion.div>

            {/* Sliding Features */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              className="mt-12"
            >
              <SlidingFeatures />
            </motion.div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main illustration */}
              <div className="relative z-10 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Multichannel Acquisition Dashboard" 
                  className="rounded-xl w-full"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs">
                      
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium"></p>
                      <p className="text-green-400 text-xs"></p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xs">
                      
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium"></p>
                      
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-2xl blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}