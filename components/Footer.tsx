"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm font-mono">
          © 2025{" "}
          <span className="text-cyan-400 font-semibold">Dwijsinh Gohil</span>
          {" "}· Built with Next.js + Tailwind + Framer Motion
        </p>
        <div className="flex gap-4">
          {[
            { href: "https://linkedin.com/in/dwijsinh-h-gohil", icon: Linkedin },
            { href: "https://github.com/dwijgohil24", icon: Github },
            { href: "mailto:dwijgohil24@gmail.com", icon: Mail },
          ].map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-cyan-400 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
