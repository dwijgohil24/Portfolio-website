"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    institution: "Dharmsinh Desai University",
    degree: "B.Tech. in Electronics and Communication Engineering",
    year: "May 2024",
    location: "Nadiad, Gujarat",
    grade: "GPA: 8.94 / 10.0",
    color: "cyan",
  },
  {
    icon: BookOpen,
    institution: "Kendriya Vidyalaya A.F.S., Vadodara",
    degree: "Class XII: Maths, Physics, Chemistry, Computer Science · Class X",
    year: "May 2020",
    location: "Vadodara, Gujarat",
    grade: "XII: 93.8% · X: 92.2%",
    color: "purple",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-950 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm mb-2">// academic background</p>
          <h2 className="text-4xl font-bold text-white">Education</h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((item, i) => {
            const isCyan = item.color === "cyan";
            return (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`flex gap-5 p-6 rounded-2xl border bg-gray-800/50 backdrop-blur-sm ${
                  isCyan ? "border-cyan-500/20" : "border-purple-500/20"
                }`}
              >
                <div
                  className={`flex-shrink-0 p-3 rounded-xl h-fit ${
                    isCyan ? "bg-cyan-500/10 text-cyan-400" : "bg-purple-500/10 text-purple-400"
                  }`}
                >
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-white font-bold text-xl">{item.institution}</h3>
                    <span
                      className={`px-3 py-0.5 rounded-full text-xs font-mono font-bold border ${
                        isCyan
                          ? "border-cyan-500/40 text-cyan-400 bg-cyan-500/10"
                          : "border-purple-500/40 text-purple-400 bg-purple-500/10"
                      }`}
                    >
                      {item.grade}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-1">{item.degree}</p>
                  <p className="text-gray-500 text-sm font-mono">
                    {item.year} · {item.location}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
