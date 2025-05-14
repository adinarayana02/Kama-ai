"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navVariants } from "@/lib/animations";
import { NAV_LINKS } from "@/lib/constants";
import { GlowingButton } from "@/components/ui/glowing-button";
import { cn } from "@/lib/utils";
import { Menu, X, ZapIcon } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg shadow-purple-900/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <ZapIcon className="text-white h-7 w-7" />
              <div className="absolute -inset-1 rounded-full blur-sm bg-gradient-to-r from-purple-500 to-cyan-500 opacity-50"></div>
            </div>
            <span className="text-xl font-bold text-white">
              Kama<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">.ai</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-white/80 hover:text-white relative p-1 group transition-colors duration-300"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <GlowingButton href="/contact" size="md">
              Get in Touch
            </GlowingButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md shadow-xl shadow-purple-900/20 border-t border-white/10"
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-white/80 hover:text-white py-2 border-b border-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <GlowingButton href="/contact" fullWidth>
                  Get in Touch
                </GlowingButton>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}