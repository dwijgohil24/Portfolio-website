"use client";

import { motion } from "framer-motion";
import { Trophy, Zap, Users, Code } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: "#141",
    label: "Global Rank",
    sub: "TechGig 2023 · 315,000+ candidates",
    color: "cyan",
  },
  {
    icon: Zap,
    value: "93%",
    label: "Faster",
    sub: "Certificate workflow: 45 min → 3 min",
    color: "purple",
  },
  {
    icon: Users,
    value: "1,000+",
    label: "Concurrent Users",
    sub: "Enterprise-grade AWS platform",
    color: "cyan",
  },
  {
    icon: Code,
    value: "500+",
    label: "DSA Problems",
    sub: "LeetCode top 20% · rating 1,650+",
    color: "purple",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">// about me</p>
          <h2 className="text-4xl font-bold text-white">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I&apos;m a{" "}
                <span className="text-white font-semibold">Software Development Engineer</span> at
                Tata Consultancy Services, building enterprise-grade Java, Spring Boot, and Angular
                applications used by thousands of users daily.
              </p>
              <p>
                My biggest win so far? Re-architecting a sequential certificate-generation pipeline
                into a{" "}
                <span className="text-cyan-400 font-semibold">parallel AWS-backed system</span>{" "}
                that reduced runtime by{" "}
                <span className="text-cyan-400 font-semibold">93%</span> — from 45 minutes to
                under 3 minutes for 1,000+ concurrent users.
              </p>
              <p>
                Outside work I&apos;m a competitive programming enthusiast — placed{" "}
                <span className="text-purple-400 font-semibold">Global Rank 141</span> out of
                315,000+ candidates at TechGig Code Gladiators 2023, and I&apos;ve solved 500+
                problems across LeetCode, Codeforces, and GeeksForGeeks.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Open to work", "Full-Stack", "Cloud & DevOps", "Competitive Programmer"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm border border-cyan-500/30 text-cyan-400 bg-cyan-500/5"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, y: -4 }}
                className={`p-5 rounded-2xl border bg-gray-800/60 backdrop-blur-sm transition-colors duration-200 ${
                  stat.color === "cyan"
                    ? "border-cyan-500/20 hover:border-cyan-500/50"
                    : "border-purple-500/20 hover:border-purple-500/50"
                }`}
              >
                <div
                  className={`mb-3 inline-flex p-2 rounded-lg ${
                    stat.color === "cyan"
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "bg-purple-500/10 text-purple-400"
                  }`}
                >
                  <stat.icon size={20} />
                </div>
                <div
                  className={`text-3xl font-bold mb-1 ${
                    stat.color === "cyan" ? "text-cyan-400" : "text-purple-400"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-sm">{stat.label}</div>
                <div className="text-gray-500 text-xs mt-1">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
