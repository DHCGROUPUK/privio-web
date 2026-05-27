"use client";

import { motion } from "framer-motion";
import { Check, Minus, X } from "lucide-react";
import { Container, H2, Lede, SectionLabel } from "./Container";

type Cell = "yes" | "no" | "partial";

const rows: { label: string; privio: Cell; signal: Cell; whatsapp: Cell; telegram: Cell; note?: string }[] = [
  { label: "End-to-end encrypted by default", privio: "yes", signal: "yes", whatsapp: "yes", telegram: "no", note: "Telegram cloud chats are server-readable" },
  { label: "No phone number required", privio: "yes", signal: "no", whatsapp: "no", telegram: "no" },
  { label: "No email required", privio: "yes", signal: "yes", whatsapp: "yes", telegram: "yes" },
  { label: "No central server holding messages", privio: "yes", signal: "no", whatsapp: "no", telegram: "no" },
  { label: "Open source (client)", privio: "yes", signal: "yes", whatsapp: "no", telegram: "partial" },
  { label: "Open source (server)", privio: "yes", signal: "partial", whatsapp: "no", telegram: "no" },
  { label: "Local DB encrypted at rest", privio: "yes", signal: "yes", whatsapp: "partial", telegram: "no" },
  { label: "Backups disabled by default", privio: "yes", signal: "yes", whatsapp: "no", telegram: "no" },
  { label: "Screenshots blocked (FLAG_SECURE)", privio: "yes", signal: "yes", whatsapp: "no", telegram: "no" },
  { label: "Funded by ads or VC pressure", privio: "no", signal: "no", whatsapp: "yes", telegram: "yes" },
];

const cell = (v: Cell) => {
  if (v === "yes") return <Check className="mx-auto h-4 w-4 text-emerald-400" strokeWidth={3} />;
  if (v === "no") return <X className="mx-auto h-4 w-4 text-rose-500/80" strokeWidth={3} />;
  return <Minus className="mx-auto h-4 w-4 text-amber-400/80" strokeWidth={3} />;
};

export function Comparison() {
  return (
    <section id="compare" className="relative py-28 md:py-36">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel>Compare</SectionLabel>
          <H2 className="mt-5">
            How does Privio stack up<br />
            against <span className="grad-text">the giants?</span>
          </H2>
          <Lede className="mt-5">
            The big names have invested billions in encryption — and we won't pretend
            we're "more secure" than Signal. But Privio occupies a different niche:
            zero account, zero servers, zero compromises on identity.
          </Lede>
        </div>

        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 overflow-hidden rounded-3xl border border-white/[0.06] bg-ink-850/60 backdrop-blur-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-[14px]">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                  <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                    Feature
                  </th>
                  <th className="px-3 py-4 text-center">
                    <div className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-violet-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.7)]" />
                      Privio
                    </div>
                  </th>
                  <th className="px-3 py-4 text-center text-[13px] font-semibold text-ink-200">Signal</th>
                  <th className="px-3 py-4 text-center text-[13px] font-semibold text-ink-200">WhatsApp</th>
                  <th className="px-3 py-4 text-center text-[13px] font-semibold text-ink-200">Telegram</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.label}
                    className={`border-b border-white/[0.04] ${i % 2 ? "bg-white/[0.005]" : ""}`}
                  >
                    <td className="px-5 py-3.5 text-ink-200">
                      {r.label}
                      {r.note && (
                        <div className="mt-0.5 text-[11px] text-ink-400">{r.note}</div>
                      )}
                    </td>
                    <td className="px-3 py-3.5 bg-violet-500/[0.04]">{cell(r.privio)}</td>
                    <td className="px-3 py-3.5">{cell(r.signal)}</td>
                    <td className="px-3 py-3.5">{cell(r.whatsapp)}</td>
                    <td className="px-3 py-3.5">{cell(r.telegram)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="mt-5 text-[12px] text-ink-400">
          Comparison reflects publicly available information about each product as of 2026.
          Privio is pre-alpha — features marked here are designed and partly implemented; see the threat model for current scaffold gaps.
        </p>
      </Container>
    </section>
  );
}
