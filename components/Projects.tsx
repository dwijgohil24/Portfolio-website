"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">// things i built</p>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const isCyan = project.color === "cyan";
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className={`group relative p-6 md:p-8 rounded-2xl border bg-gray-800/50 backdrop-blur-sm flex flex-col transition-all duration-300 ${
                  isCyan
                    ? "border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10"
                    : "border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10"
                }`}
              >
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px rounded-t-2xl ${
                    isCyan
                      ? "bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                      : "bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Metric badge */}
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-4 self-start border ${
                    isCyan
                      ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                      : "border-purple-500/30 bg-purple-500/10 text-purple-400"
                  }`}
                >
                  <ArrowRight size={12} />
                  {project.metric}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-snug">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-500">
                      <span
                        className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${
                          isCyan ? "bg-cyan-400" : "bg-purple-400"
                        }`}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${
                        isCyan
                          ? "border-cyan-500/25 text-cyan-300 bg-cyan-500/5"
                          : "border-purple-500/25 text-purple-300 bg-purple-500/5"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm transition-colors ${
                      isCyan
                        ? "text-cyan-400 hover:text-cyan-300"
                        : "text-purple-400 hover:text-purple-300"
                    }`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
