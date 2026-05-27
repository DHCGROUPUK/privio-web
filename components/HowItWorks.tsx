"use client";

import { motion } from "framer-motion";
import { KeyRound, QrCode, MessageSquareLock } from "lucide-react";
import { Container, H2, Lede, SectionLabel } from "./Container";

const steps = [
  {
    n: "01",
    icon: KeyRound,
    title: "Generate your identity",
    body:
      "On first launch your phone generates a fresh Curve25519 keypair. The private key never leaves the device. The public key becomes your address — like privio1:7a3f9c2bxyz.",
    accent: "from-violet-600 to-violet-800",
  },
  {
    n: "02",
    icon: QrCode,
    title: "Share via QR code",
    body:
      "Show your QR or scan a friend's — in person, or out-of-band over any channel you trust. No phone number, no email, no central directory. You only talk to people you've added.",
    accent: "from-violet-500 to-cyan-500",
  },
  {
    n: "03",
    icon: MessageSquareLock,
    title: "Chat — end-to-end encrypted",
    body:
      "Messages are encrypted on your device using the Signal Protocol and travel through dumb encrypted relays that can't read a single byte. Forward-secret. Deniable. Yours.",
    accent: "from-cyan-500 to-emerald-400",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-28 md:py-36">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel>How it works</SectionLabel>
          <H2 className="mt-5">
            Three steps. <span className="grad-text">Zero servers.</span>
          </H2>
          <Lede className="mt-5">
            No sign-up, no email verification, no SMS code. Your identity is a key —
            generated locally, controlled by you, never uploaded.
          </Lede>
        </div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
          {/* connecting line on desktop */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[88px] hidden h-px bg-gradient-to-r from-violet-600/0 via-violet-500/50 to-emerald-400/0 md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-ink-850/60 p-7 backdrop-blur-xl hover:bg-ink-850/90 transition-colors"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-white shadow-glow`}>
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-sm tracking-widest text-ink-400">
                  {step.n}
                </span>
              </div>

              <h3 className="relative mt-6 text-xl font-semibold text-ink-100">
                {step.title}
              </h3>
              <p className="relative mt-3 text-[15px] leading-relaxed text-ink-300">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
