"use client";

import { motion } from "framer-motion";
import {
  Lock,
  ShieldCheck,
  ServerOff,
  EyeOff,
  Fingerprint,
  GitBranch,
  Smartphone,
  Timer,
} from "lucide-react";
import { Container, H2, Lede, SectionLabel } from "./Container";

const features = [
  {
    icon: Lock,
    title: "Signal Protocol",
    body:
      "The same end-to-end encryption that protects 2 billion people on Signal, WhatsApp and Messenger. Forward-secret. Deniable. Audited.",
  },
  {
    icon: ServerOff,
    title: "Serverless by design",
    body:
      "We don't run a central server holding your messages. Encrypted relays only see opaque ciphertext blobs — there's nothing to leak, subpoena, or hack.",
  },
  {
    icon: EyeOff,
    title: "No phone number, ever",
    body:
      "Your identity is a cryptographic keypair — not a SIM card, not an email. There's nothing tying your account to your real-world identity.",
  },
  {
    icon: ShieldCheck,
    title: "Encrypted at rest",
    body:
      "Local messages are stored in a SQLCipher AES-256 database. The key is held in the Android Keystore — unwrappable only with a device unlock.",
  },
  {
    icon: Fingerprint,
    title: "Hardware-backed lock",
    body:
      "Biometric or PIN gate on the app, FLAG_SECURE to block screenshots and screen recording, and OS-level backups are disabled so nothing escapes the device.",
  },
  {
    icon: Timer,
    title: "Disappearing messages",
    body:
      "Set a timer and messages vanish from both devices when it expires — even if your contact never opens the chat.",
  },
  {
    icon: GitBranch,
    title: "Open source",
    body:
      "Every line is public on GitHub. You can build it yourself, audit the cryptography, and verify the APK you install came from the code you read.",
  },
  {
    icon: Smartphone,
    title: "Works on any Android 8.0+",
    body:
      "Native Kotlin and Jetpack Compose. No JavaScript runtime, no Electron. Small APK, fast cold start, dark-mode-first design.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-28 md:py-36">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex"><SectionLabel>Features</SectionLabel></div>
          <H2 className="mt-5">
            Built like a vault. <span className="grad-text">Feels like a chat app.</span>
          </H2>
          <Lede className="mx-auto mt-5 text-center">
            Modern Material 3 design wrapped around best-in-class cryptography. You get the
            UX you expect from a 2026 messenger, and the security guarantees you don't.
          </Lede>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-ink-850/60 p-6 backdrop-blur-xl transition-all hover:border-violet-500/30 hover:bg-ink-850"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/0 blur-2xl transition-colors duration-500 group-hover:bg-violet-500/15" />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 ring-1 ring-inset ring-violet-400/20">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-100">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-300">{f.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
