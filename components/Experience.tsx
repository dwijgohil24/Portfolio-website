"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

const achievements = [
  {
    text: "Reduced certificate-generation runtime by",
    highlight: "93%",
    rest: " by re-architecting a sequential process into a Java-based parallel pipeline using Spring Boot and AWS — execution time from 45 minutes to under 3 minutes for 1,000+ concurrent users.",
    color: "cyan",
  },
  {
    text: "Architected a digital artifact-signing platform using Java, Spring Boot, cosign, and SHA-256 custom encryption for binary-file verification — cutting inter-team artifact sharing overhead by",
    highlight: "60%",
    rest: " across 5+ internal TCS teams.",
    color: "purple",
  },
  {
    text: "Automated",
    highlight: "zero-downtime deployments",
    rest: " by owning Jenkins CI/CD pipelines for Java, Spring Boot, and Angular services hosted on AWS EC2.",
    color: "cyan",
  },
  {
    text: "Accelerated delivery of",
    highlight: "4+ microservices per sprint",
    rest: " in a cross-functional agile squad using Java, Spring Boot, JDBC, and MySQL — consistently meeting security compliance standards and performance SLAs.",
    color: "purple",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-900 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">// work history</p>
          <h2 className="text-4xl font-bold text-white">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-purple-500/40 to-transparent" />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-cyan-500 border-4 border-gray-900 shadow-lg shadow-cyan-500/50" />

            {/* Card */}
            <div className="p-6 md:p-8 rounded-2xl border border-cyan-500/20 bg-gray-800/60 backdrop-blur-sm">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">Systems Engineer</h3>
                  </div>
                  <p className="text-cyan-400 font-semibold text-lg">
                    Tata Consultancy Services (TCS)
                  </p>
                </div>
                <div className="text-right text-sm text-gray-400 space-y-1">
                  <div className="flex items-center gap-1 justify-end">
                    <CalendarDays size={14} />
                    <span className="font-mono">July 2024 – Present</span>
                  </div>
                  <div className="flex items-center gap-1 justify-end">
                    <MapPin size={14} />
                    <span>Gujarat, India</span>
                  </div>
                </div>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Java", "Spring Boot", "Angular", "AWS", "Jenkins", "JDBC", "MySQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono border border-cyan-500/25 text-cyan-300 bg-cyan-500/5"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              {/* Achievements */}
              <ul className="space-y-4">
                {achievements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-3"
                  >
                    <span
                      className={`mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full ${
                        item.color === "cyan" ? "bg-cyan-400" : "bg-purple-400"
                      }`}
                    />
                    <p className="text-gray-400 leading-relaxed">
                      {item.text}{" "}
                      <span
                        className={`font-bold ${
                          item.color === "cyan" ? "text-cyan-400" : "text-purple-400"
                        }`}
                      >
                        {item.highlight}
                      </span>
                      {item.rest}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
