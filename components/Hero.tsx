"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Github, Lock } from "lucide-react";
import { Container, SectionLabel } from "./Container";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 md:pt-44">
      {/* Animated background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 subgrid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_70%)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-[640px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(124,58,237,0.35),rgba(124,58,237,0)_70%)]" />
        <div className="absolute right-0 top-40 -z-10 h-[420px] w-[640px] bg-[radial-gradient(closest-side,rgba(34,211,238,0.18),rgba(34,211,238,0)_70%)]" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>End-to-end encrypted · Open source</SectionLabel>
            </motion.div>

            <motion.h1
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-balance text-[44px] font-bold leading-[1.05] tracking-tight text-ink-100 md:text-6xl lg:text-[76px]"
            >
              Private.<br />
              Encrypted.<br />
              <span className="grad-text">Yours.</span>
            </motion.h1>

            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-7 max-w-xl text-pretty text-lg text-ink-300 md:text-xl"
            >
              A serverless, end-to-end encrypted messenger for Android.
              No phone number. No email. No account. Your identity is a cryptographic
              keypair you generate on your phone — nothing else.
            </motion.p>

            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="https://github.com/DHCGROUPUK/Privio/releases/tag/latest-debug"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-grad-primary px-5 py-3.5 text-[15px] font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" />
                Download APK
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="https://github.com/DHCGROUPUK/Privio"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3.5 text-[15px] font-semibold text-ink-100 backdrop-blur-xl transition-colors hover:bg-white/[0.06]"
              >
                <Github className="h-4 w-4" />
                Read the source
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-ink-400"
            >
              <PillBadge icon={<Lock className="h-3 w-3" />}>Signal Protocol</PillBadge>
              <span className="opacity-30">·</span>
              <span>No accounts</span>
              <span className="opacity-30">·</span>
              <span>Android 8.0+</span>
              <span className="opacity-30">·</span>
              <span>Open source</span>
            </motion.div>
          </div>

          {/* Phone mockup */}
          <div className="flex items-center justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}

function PillBadge({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[12px] font-medium text-ink-200">
      {icon}
      {children}
    </span>
  );
}
