import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CASE_STUDIES, BLOG_POSTS } from "@/lib/constants";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedWrapper } from "@/components/shared/AnimatedWrapper";
import { GlowingButton } from "@/components/ui/glowing-button";

export default function Home() {
  // Featured case studies (show only 3)
  const featuredCaseStudies = CASE_STUDIES.slice(0, 3);
  
  // Featured blog posts (show only 3)
  const featuredBlogPosts = BLOG_POSTS.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Featured Case Studies */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Orb */}
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeader
              title="Our Success Stories"
              subtitle="See how we've helped businesses transform their lead generation and brand presence."
              className="md:mb-0"
            />
            <AnimatedWrapper delay={0.2}>
              <GlowingButton href="/case-studies" variant="outline">
                View All Case Studies
              </GlowingButton>
            </AnimatedWrapper>
          </div>
          
          <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger>
            {featuredCaseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} {...caseStudy} />
            ))}
          </AnimatedWrapper>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Featured Blog Posts */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Orb */}
        <div className="absolute bottom-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeader
              title="Latest Insights"
              subtitle="Expert tips and strategies for multichannel acquisition and lead generation."
              className="md:mb-0"
            />
            <AnimatedWrapper delay={0.2}>
              <GlowingButton href="/blog" variant="outline">
                Read All Articles
              </GlowingButton>
            </AnimatedWrapper>
          </div>
          
          <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger>
            {featuredBlogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
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
              Ready to Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
                Lead Generation
              </span>?
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              Schedule a free strategy call and let's discuss how our multichannel acquisition system can help your business grow.
            </p>
            <GlowingButton href="/contact" size="lg">
              Get Started Today
            </GlowingButton>
          </AnimatedWrapper>
        </div>
      </section>
    </>
  );
}