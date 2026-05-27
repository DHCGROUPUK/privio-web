"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#security", label: "Security" },
  { href: "#compare", label: "Compare" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-3">
        <nav className="glass rounded-2xl px-4 sm:px-5 py-2.5 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo />
            <span className="font-semibold tracking-tight text-ink-100">Privio</span>
          </Link>
          <ul className="hidden md:flex items-center gap-1 ml-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 text-sm text-ink-300 hover:text-ink-100 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-auto flex items-center gap-2">
            <a
              href="https://github.com/DHCGROUPUK/Privio"
              aria-label="View source on GitHub"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-xl text-ink-300 hover:text-ink-100 hover:bg-white/[0.06] transition"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/DHCGROUPUK/Privio/releases/tag/latest-debug"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-semibold px-4 py-2 rounded-xl text-white bg-grad-primary shadow-glow hover:brightness-110 transition"
            >
              Download APK
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" className="drop-shadow-glow">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <path
        d="M16 3 L27 7.5 V16 C27 23 22 28.5 16 30 C10 28.5 5 23 5 16 V7.5 Z"
        fill="url(#lg)"
      />
      <path
        d="M12 11 H17.5 C20 11 21.5 12.6 21.5 15 C21.5 17.4 20 19 17.5 19 H14 V22 H12 Z M14 13 V17 H17.4 C18.4 17 19 16.2 19 15 C19 13.8 18.4 13 17.4 13 Z"
        fill="#fff"
      />
    </svg>
  );
}
