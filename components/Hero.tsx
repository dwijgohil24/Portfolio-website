"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {particlesReady && <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: ["#22d3ee", "#a855f7"] },
            links: {
              color: "#22d3ee",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: { density: { enable: true }, value: 80 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          Dwijsinh{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Gohil
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 font-mono mb-6 h-8"
        >
          <TypeAnimation
            sequence={[
              "Software Development Engineer",
              1800,
              "Full-Stack Developer",
              1800,
              "Cloud & DevOps Engineer",
              1800,
              "Competitive Programmer",
              1800,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400"
          />
        </motion.div>

        {/* Punch line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Turning complex problems into{" "}
          <span className="text-cyan-400 font-semibold">elegant solutions</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25"
          >
            View My Work
          </a>
          <a
            href="/Dwijsinh_Resume_SDE.pdf"
            download
            className="px-8 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-colors flex items-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex gap-5 justify-center"
        >
          {[
            { href: "https://linkedin.com/in/dwijsinh-h-gohil", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/dwijgohil24", icon: Github, label: "GitHub" },
            { href: "mailto:dwijgohil24@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full border border-gray-700 text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 hover:text-cyan-400 transition-colors"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
