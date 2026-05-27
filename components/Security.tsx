"use client";

import { motion } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Container, H2, Lede, SectionLabel } from "./Container";

const defended = [
  "Passive network observers — ISPs, café Wi-Fi, captive portals",
  "Curious relay operators (we can't read your messages either)",
  "Server compromise or subpoena (nothing useful to hand over)",
  "Lost or stolen device (locked) — SQLCipher + Keystore",
  "Cloud backup leakage (disabled at the OS level)",
  "Screenshots, screen recording, recent-apps preview",
  "Forward secrecy — yesterday's messages stay private even if today is compromised",
];

const honest = [
  "Targeted nation-state malware (Pegasus etc.) on your device",
  "Rubber-hose attacks — physical coercion to unlock the phone",
  "Your own bad opsec — sharing screenshots, re-used PINs",
];

export function Security() {
  return (
    <section id="security" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
        <div className="absolute left-0 top-0 h-[400px] w-[600px] bg-[radial-gradient(closest-side,rgba(34,211,238,0.12),transparent_70%)]" />
      </div>

      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionLabel>Security · Honest threat model</SectionLabel>
            <H2 className="mt-5">
              What we defend against —<br />
              <span className="grad-text">and what we don't.</span>
            </H2>
            <Lede className="mt-5">
              Most "secure" apps make sweeping claims they can't keep. We won't. Here's
              the explicit list of attackers Privio is designed to stop, plus what's out of
              scope. The full threat model lives on GitHub.
            </Lede>

            <Link
              href="https://github.com/DHCGROUPUK/Privio/blob/main/THREAT_MODEL.md"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-ink-100 transition-colors hover:bg-white/[0.06]"
            >
              Read the full threat model →
            </Link>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-400">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                <h3 className="text-base font-semibold text-ink-100">Defended</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {defended.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[14px] text-ink-200">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-3xl border border-amber-400/15 bg-amber-400/[0.03] p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <h3 className="text-base font-semibold text-ink-100">Out of scope (honestly)</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {honest.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[14px] text-ink-200">
                    <X className="mt-1 h-3.5 w-3.5 flex-none text-amber-400/80" strokeWidth={2.5} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
