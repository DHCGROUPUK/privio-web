"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Container, H2, SectionLabel } from "./Container";

const faqs = [
  {
    q: "How is Privio different from Signal?",
    a: "Signal still requires a phone number and routes messages through Signal's servers. Privio's identity is just a cryptographic keypair — no phone number, no email, no account database. Messages travel through dumb relays that only see opaque ciphertext, never your contact graph at scale. The encryption itself uses the same Signal Protocol that Signal does.",
  },
  {
    q: "If there are no servers, how do messages get delivered?",
    a: "When your contact is online, your message flows directly through a relay node that simply forwards the encrypted blob. When they're offline, a relay caches the blob for up to 7 days and delivers it when they come back. The relay never decrypts anything — it doesn't have the keys.",
  },
  {
    q: "What if someone hacks your relay server?",
    a: "They get nothing useful. Relays only see opaque ciphertext, sender/recipient addresses, and timestamps. Without the Signal Protocol session keys (which live only on the two endpoints), the messages can't be decrypted. You can also rotate relays at any time.",
  },
  {
    q: "Can I use Privio without trusting Privio's relay?",
    a: "Yes. Anyone can run a relay — it's about 50 lines of code, and the spec is in the repo. Run your own, or point the app at someone else's. The protocol doesn't care which relay you use; the encryption guarantees are the same.",
  },
  {
    q: "What happens if I lose my phone?",
    a: "Your identity is gone. There's no recovery code, no email reset, no cloud backup — by design. This is the trade-off for true anonymity: nothing tied to your real identity means there's nothing to recover. We recommend keeping a second device added as a contact, and turning on disappearing messages.",
  },
  {
    q: "Is this safe for journalists, activists, or whistleblowers?",
    a: "Privio is pre-alpha — please don't trust it with anything that matters yet. We've documented exactly what threats are defended against (and what aren't) in the threat model. For high-stakes use today, Signal remains the gold standard, audited by professionals for over a decade.",
  },
  {
    q: "Will there be an iOS version?",
    a: "Not on the roadmap yet. Android first because we can ship a debug APK directly without going through a centralised app store gatekeeper. iOS requires Apple's approval for every release, which is at odds with the project's principles. We'll revisit once the Android version is stable.",
  },
  {
    q: "Is Privio free?",
    a: "Yes, and there's no plan to monetise. No ads, no subscriptions, no sneaky data harvesting (the protocol prevents that even if we wanted to). The project will be community-maintained and donation-funded if it grows.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 md:py-36">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex"><SectionLabel>FAQ</SectionLabel></div>
          <H2 className="mt-5">Questions, answered.</H2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-white/[0.06] overflow-hidden rounded-3xl border border-white/[0.06] bg-ink-850/60 backdrop-blur-xl">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <span className="text-[15px] font-medium text-ink-100">{f.q}</span>
                  <Plus
                    className={`h-4 w-4 flex-none text-ink-400 transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-violet-400" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-ink-300">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
