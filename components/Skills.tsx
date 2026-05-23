"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Cloud, Database, Cpu } from "lucide-react";
import { skillGroups } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layers,
  Cloud,
  Database,
  Cpu,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">// technical skills</p>
          <h2 className="text-4xl font-bold text-white">What I Work With</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon];
            const isCyan = group.color === "cyan";
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-2xl border bg-gray-800/50 backdrop-blur-sm transition-all duration-200 ${
                  isCyan
                    ? "border-cyan-500/20 hover:border-cyan-500/40"
                    : "border-purple-500/20 hover:border-purple-500/40"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg ${
                      isCyan ? "bg-cyan-500/10 text-cyan-400" : "bg-purple-500/10 text-purple-400"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-mono font-medium border ${
                        isCyan
                          ? "border-cyan-500/25 text-cyan-300 bg-cyan-500/5"
                          : "border-purple-500/25 text-purple-300 bg-purple-500/5"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
