import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedWrapper } from "@/components/shared/AnimatedWrapper";
import { BlogCard } from "@/components/blog/BlogCard";
import { BLOG_POSTS } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Kama.ai",
  description: "Expert tips and strategies for multichannel acquisition and lead generation.",
};

export default function BlogPage() {
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
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
                Blog
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
              Expert tips and strategies for multichannel acquisition, lead generation, and building a powerful brand presence.
            </p>
          </AnimatedWrapper>
        </div>
      </section>
      
      {/* Blog Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger>
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </AnimatedWrapper>
        </div>
      </section>
    </>
  );
}