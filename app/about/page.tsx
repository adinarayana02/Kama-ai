import { AboutSection } from "@/components/about/AboutSection";
import { Metadata } from "next";
import { Brain, Users, Target, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Kama.ai",
  description: "Learn about Kama.ai's mission to revolutionize lead generation through AI-powered multichannel systems.",
};

export default function AboutPage() {
  const services = [
    {
      icon: <Brain size={24} />,
      title: "Direct B2B Projects",
      description: "Business AI implementation"
    },
    {
      icon: <Users size={24} />,
      title: "Agency Partnerships",
      description: "Collaborative solutions"
    },
    {
      icon: <Target size={24} />,
      title: "AI Education",
      description: "Training & workshops"
    },
    {
      icon: <Award size={24} />,
      title: "AI Consulting",
      description: "Strategic guidance"
    }
  ];

  const benefits = [
    {
      title: "Simplify Your Hiring",
      description: "We manage all marketing tasks, saving you money without multiple hires."
    },
    {
      title: "Guaranteed Quality Leads",
      description: "Start campaigns immediately with our experts using the latest strategies and tools"
    },
    {
      title: "Ready-to-Go Experts",
      description: "Get reliable, meeting-ready leads or pay nothing if you&apos;re unsatisfied."
    }
  ];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
              Kama.ai
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            We&apos;re building the future of lead generation with AI-powered multichannel systems.
          </p>
        </div>
      </section>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
              Services
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Kama.ai Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-cyan-900/20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
              Kama.ai
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zinc-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 