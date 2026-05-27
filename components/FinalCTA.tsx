"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Github } from "lucide-react";
import { Container } from "./Container";

export function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36">
      <Container>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[36px] border border-white/[0.06] bg-ink-850 p-10 text-center md:p-16"
        >
          {/* Animated background blobs */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-violet-600/30 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          </div>

          <h2 className="text-balance text-4xl font-bold tracking-tight text-ink-100 md:text-6xl">
            Take back your <span className="grad-text">private conversations.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-ink-300">
            Install Privio in a minute. No sign-up. No account. Just generate a key and start talking.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="https://github.com/DHCGROUPUK/Privio/releases/tag/latest-debug"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-grad-primary px-6 py-4 text-[15px] font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />
              Download the APK
            </Link>
            <Link
              href="https://github.com/DHCGROUPUK/Privio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 text-[15px] font-semibold text-ink-100 backdrop-blur-xl transition-colors hover:bg-white/[0.06]"
            >
              <Github className="h-4 w-4" />
              Source on GitHub
            </Link>
          </div>

          <p className="mt-8 text-[12px] text-ink-400">
            Pre-alpha debug build. Don't use for high-stakes communication yet — see the threat model.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
