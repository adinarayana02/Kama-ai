"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

type CaseStudyCardProps = {
  id: string;
  title: string;
  category: string;
  image: string;
  leadIncrease: string;
  testimonial: string;
  clientName: string;
  clientPosition: string;
};

export function CaseStudyCard({
  id,
  title,
  category,
  image,
  leadIncrease,
  testimonial,
  clientName,
  clientPosition,
}: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-purple-500/20 transition-colors"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
          <div className="p-6">
            <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm text-white text-xs rounded-full">
              {category}
            </span>
            <h3 className="text-xl font-semibold text-white mt-3">{title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 flex items-center justify-center text-white">
            <TrendingUp size={20} />
          </div>
          <div>
            <span className="text-green-400 font-bold text-xl">{leadIncrease}</span>
            <span className="text-white ml-1">Lead Increase</span>
          </div>
        </div>
        
        <p className="text-zinc-400 mb-6 line-clamp-3">
          &ldquo;{testimonial}&rdquo;
        </p>
        
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white font-medium">{clientName}</p>
            <p className="text-zinc-500 text-sm">{clientPosition}</p>
          </div>
          
          <Link
            href={`/case-studies/${id}`}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-colors"
          >
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}