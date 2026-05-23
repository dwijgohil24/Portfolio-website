"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "263eb759-fea8-401b-b45b-a3192236c6de",
        ...form,
        subject: `Portfolio contact from ${form.name}`,
      }),
    });

    if (res.ok) {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-950 relative">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">// get in touch</p>
          <h2 className="text-4xl font-bold text-white">Contact</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            I&apos;m actively looking for new opportunities. Whether you have a role, a project, or
            just want to say hi — my inbox is open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              { icon: Mail, label: "Email", value: "dwijgohil24@gmail.com", href: "mailto:dwijgohil24@gmail.com" },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/dwijsinh-h-gohil",
                href: "https://linkedin.com/in/dwijsinh-h-gohil",
              },
              { icon: Github, label: "GitHub", value: "github.com/dwijgohil24", href: "https://github.com/dwijgohil24" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-700 bg-gray-800/50 hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-mono mb-0.5">{label}</p>
                  <p className="text-white text-sm font-medium">{value}</p>
                </div>
              </a>
            ))}

            {/* Phone */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-700 bg-gray-800/50">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-mono mb-0.5">Phone</p>
                <p className="text-white text-sm font-medium">+91 9054498031</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center h-full py-12 gap-4 text-center">
                <CheckCircle size={48} className="text-cyan-400" />
                <h3 className="text-white text-xl font-bold">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-sm font-mono mb-1.5 block">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm font-mono mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-sm font-mono mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
                    placeholder="Tell me about the opportunity or project..."
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again or email me directly.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <span className="font-mono text-sm animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
