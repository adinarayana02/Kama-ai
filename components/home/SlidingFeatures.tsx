import { motion } from "framer-motion";

const tools = [
  {
    image: "/logos/openai.png",
    name: "OpenAI",
  },
  {
    image: "/logos/airtable.png",
    name: "Airtable",
  },
  {
    image: "/logos/claude.png",
    name: "Claude",
  },
  {
    image: "/logos/gohighlevel.png",
    name: "GoHighLevel",
  },
  {
    image: "/logos/make.png",
    name: "Make.com",
  },
  {
    image: "/logos/n8n.png",
    name: "n8n",
  },
  {
    image: "/logos/perplexity.png",
    name: "Perplexity",
  },
  {
    image: "/logos/retell.png",
    name: "Retell",
  },
  {
    image: "/logos/zapier.png",
    name: "Zapier",
  }
];

export function SlidingFeatures() {
  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-black/40 group"
              >
                <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden rounded-lg bg-white/5">
                  <img 
                    src={tool.image} 
                    alt={tool.name} 
                    className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {tool.name}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}