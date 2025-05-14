"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar } from "lucide-react";

type BlogCardProps = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
};

export function BlogCard({
  id,
  title,
  slug,
  excerpt,
  image,
  category,
  date,
  author,
}: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-purple-500/20 transition-colors h-full flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm text-white text-xs rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
          <Calendar size={14} />
          <span>{date}</span>
        </div>
        
        <Link href={`/blog/${slug}`} className="group-hover:text-purple-400 transition-colors">
          <h3 className="text-xl font-semibold text-white hover:text-purple-400 transition-colors line-clamp-2 mb-3">
            {title}
          </h3>
        </Link>
        
        <p className="text-zinc-400 mb-4 flex-1 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="mt-auto pt-4 border-t border-white/5">
          <p className="text-white/70 text-sm">
            By <span className="text-white font-medium">{author}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}