"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Code } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "TechGig Code Gladiators 2023",
    badge: "Finalist",
    detail: "Global Rank 141 out of 315,000+ candidates — top 0.05% across India",
    color: "cyan",
  },
  {
    icon: Star,
    title: "Google Kickstart Round-E 2022",
    badge: "Top Performer",
    detail: "Global Rank 4,640 out of 20,000+ participants worldwide",
    color: "purple",
  },
  {
    icon: Code,
    title: "LeetCode",
    badge: "Top 20% Globally",
    detail: "Peak contest rating 1,650+ · 500+ problems solved across LeetCode, Codeforces, GeeksForGeeks",
    color: "cyan",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-gray-900 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">// competitive programming</p>
          <h2 className="text-4xl font-bold text-white">Achievements</h2>
        </motion.div>

        <div className="space-y-5">
          {achievements.map((item, i) => {
            const isCyan = item.color === "cyan";
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ x: 6 }}
                className={`flex items-start gap-5 p-6 rounded-2xl border bg-gray-800/50 backdrop-blur-sm transition-all duration-200 ${
                  isCyan
                    ? "border-cyan-500/20 hover:border-cyan-500/50"
                    : "border-purple-500/20 hover:border-purple-500/50"
                }`}
              >
                <div
                  className={`flex-shrink-0 p-3 rounded-xl ${
                    isCyan ? "bg-cyan-500/10 text-cyan-400" : "bg-purple-500/10 text-purple-400"
                  }`}
                >
                  <item.icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border ${
                        isCyan
                          ? "border-cyan-500/40 text-cyan-400 bg-cyan-500/10"
                          : "border-purple-500/40 text-purple-400 bg-purple-500/10"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
