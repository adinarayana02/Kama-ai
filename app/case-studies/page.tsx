import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedWrapper } from "@/components/shared/AnimatedWrapper";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { CASE_STUDIES } from "@/lib/constants";
import { GlowingButton } from "@/components/ui/glowing-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Kama.ai",
  description: "Explore our success stories and see how we've helped businesses transform their lead generation and brand presence.",
};

export default function CaseStudiesPage() {
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
              Our Success{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
                Stories
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
              See how we have helped businesses transform their lead generation and build powerful brand presence across multiple channels.
            </p>
          </AnimatedWrapper>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger>
            {CASE_STUDIES.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} {...caseStudy} />
            ))}
          </AnimatedWrapper>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-cyan-900/20 relative overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <AnimatedWrapper className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Want to Be Our Next
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
                {" "}Success Story
              </span>?
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              Lets discuss how our multichannel acquisition system can transform your lead generation and brand presence.
            </p>
            <GlowingButton href="/contact" size="lg">
              Schedule a Strategy Call
            </GlowingButton>
          </AnimatedWrapper>
        </div>
      </section>
    </>
  );
}