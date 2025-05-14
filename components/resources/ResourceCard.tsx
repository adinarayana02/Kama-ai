"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

type ResourceCardProps = {
  id: string;
  title: string;
  description: string;
  category: string;
  downloadUrl: string;
};

export function ResourceCard({
  title,
  description,
  category,
  downloadUrl,
}: ResourceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-purple-500/20 transition-colors"
    >
      <div className="p-6">
        <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm text-white text-xs rounded-full">
          {category}
        </span>
        <h3 className="text-xl font-semibold text-white mt-3 mb-2">{title}</h3>
        <p className="text-zinc-400 mb-6">{description}</p>
        
        <a
          href={downloadUrl}
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={16} />
          Download Resource
        </a>
      </div>
    </motion.div>
  );
} 