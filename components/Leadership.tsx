"use client";

import { motion } from "framer-motion";
import { Smartphone, Wrench } from "lucide-react";

const roles = [
  {
    icon: Smartphone,
    title: "Mobile Development Lead",
    org: "GDSC-DDU (Google Developer Students Club)",
    detail:
      "Spearheaded Android and cross-platform development workshops, upskilling 50+ peers across 3 sessions.",
    highlight: "50+ peers upskilled",
    color: "cyan",
  },
  {
    icon: Wrench,
    title: "Core Organiser",
    org: "DU-Hacks 2.0 Hackathon",
    detail:
      "Directed end-to-end logistics, participant coordination, and technical judging for a 200+ participant hackathon event.",
    highlight: "200+ participants",
    color: "purple",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-gray-900 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm mb-2">// beyond the code</p>
          <h2 className="text-4xl font-bold text-white">Leadership</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role, i) => {
            const isCyan = role.color === "cyan";
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className={`p-6 rounded-2xl border bg-gray-800/50 backdrop-blur-sm transition-all duration-200 ${
                  isCyan
                    ? "border-cyan-500/20 hover:border-cyan-500/50"
                    : "border-purple-500/20 hover:border-purple-500/50"
                }`}
              >
                <div
                  className={`inline-flex p-3 rounded-xl mb-4 ${
                    isCyan ? "bg-cyan-500/10 text-cyan-400" : "bg-purple-500/10 text-purple-400"
                  }`}
                >
                  <role.icon size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{role.title}</h3>
                <p
                  className={`text-sm font-semibold mb-3 ${
                    isCyan ? "text-cyan-400" : "text-purple-400"
                  }`}
                >
                  {role.org}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{role.detail}</p>
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-mono border ${
                    isCyan
                      ? "border-cyan-500/30 text-cyan-400 bg-cyan-500/10"
                      : "border-purple-500/30 text-purple-400 bg-purple-500/10"
                  }`}
                >
                  {role.highlight}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
