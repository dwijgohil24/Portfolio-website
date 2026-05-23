"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-950/90 backdrop-blur-md border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
            className="font-mono text-lg font-bold"
          >
            <span className="text-cyan-400">D</span>
            <span className="text-white">G</span>
            <span className="text-gray-500">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="px-3 py-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors font-medium rounded-lg hover:bg-cyan-500/5"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/Dwijsinh_Resume_SDE.pdf"
              download
              className="ml-3 px-4 py-1.5 rounded-full border border-cyan-500/50 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/10 transition-colors"
            >
              Resume
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-gray-950/95 backdrop-blur-md border-b border-gray-800 md:hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-xl transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/Dwijsinh_Resume_SDE.pdf"
                download
                className="mt-2 px-4 py-3 rounded-xl border border-cyan-500/40 text-cyan-400 font-semibold text-center hover:bg-cyan-500/10 transition-colors"
              >
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
