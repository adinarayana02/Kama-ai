"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedWrapper } from "@/components/shared/AnimatedWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Kama.ai transformed our entire lead generation strategy. Within 60 days, we saw a  increase in qualified leads while reducing our cost per acquisition",
      author: "Sarah Johnson",
      position: "CMO, TechFlow",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company: "TechFlow",
    },
    {
      quote: "The multichannel system built by Kama.ai completely revolutionized how we attract and engage with potential clients. Our calendar is now consistently full with qualified prospects.",
      author: "David Chen",
      position: "Founder, GrowthLabs",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company: "GrowthLabs",
    },
    {
      quote: "We struggled with inconsistent lead flow for years. Kama.ai built us a system that delivers high-quality leads every single day. The ROI has been incredible.",
      author: "Emma Roberts",
      position: "Marketing Director, Elevate",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company: "Elevate",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from the businesses we've helped transform."
          centered={true}
        />
        
        <AnimatedWrapper className="mt-12 relative">
          <div className="absolute -top-10 left-0 text-7xl text-purple-500/20">
            <Quote size={100} />
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl p-8 md:p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {/* Testimonial Image */}
                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-purple-500/50">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Testimonial Content */}
                <div className="flex-1">
                  <p className="text-xl md:text-2xl text-white mb-6 italic">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div>
                      <h4 className="text-lg font-medium text-white">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-zinc-400">
                        {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Buttons */}
            <div className="flex justify-end gap-2 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-purple-500" : "bg-zinc-700"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}