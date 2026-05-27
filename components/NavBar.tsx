"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Download } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function NavBar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <Container>
        <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-ink-900/70 px-4 py-3 backdrop-blur-xl supports-[backdrop-filter]:bg-ink-900/50 md:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" />
            <span className="text-[15px] font-semibold tracking-tight text-ink-100">
              Privio
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-ink-300 md:flex">
            <a href="#how" className="hover:text-ink-100 transition-colors">
              How it works
            </a>
            <a href="#features" className="hover:text-ink-100 transition-colors">
              Features
            </a>
            <a href="#security" className="hover:text-ink-100 transition-colors">
              Security
            </a>
            <a href="#compare" className="hover:text-ink-100 transition-colors">
              Compare
            </a>
            <a href="#faq" className="hover:text-ink-100 transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/DHCGROUPUK/Privio"
              target="_blank"
              rel="noreferrer"
              className="hidden h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-ink-300 hover:text-ink-100 hover:bg-white/[0.06] transition-colors sm:flex"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/DHCGROUPUK/Privio/releases/tag/latest-debug"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-grad-primary px-3.5 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download APK</span>
              <span className="sm:hidden">APK</span>
            </Link>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
