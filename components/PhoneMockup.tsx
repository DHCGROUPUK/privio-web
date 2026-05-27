"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Settings, UserPlus, Send } from "lucide-react";

/**
 * Visual mockup of the Privio Android home screen. Mirrors the Compose UI 1:1:
 * - Material 3 dark theme, violet/cyan palette
 * - Same rounded radii, same gradient avatar, same chat-row layout
 */
export function PhoneMockup({
  className = "",
  screen = "home",
}: {
  className?: string;
  screen?: "home" | "chat";
}) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0, rotateX: 12 }}
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: "1500px" }}
      className={className}
    >
      <div className="animate-float">
        <div className="relative h-[600px] w-[290px] rounded-[42px] bg-black p-2 shadow-[0_50px_120px_-30px_rgba(124,58,237,0.45),0_30px_60px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.05]">
          {/* Side button */}
          <div className="absolute right-[-2px] top-[150px] h-14 w-[3px] rounded-r-sm bg-ink-700" />

          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[34px] bg-[radial-gradient(900px_550px_at_12%_8%,rgba(124,58,237,0.25),transparent_60%),#0A0A0F]">
            {/* Notch */}
            <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

            {/* Status bar */}
            <div className="relative z-10 flex items-center justify-between px-5 pt-3 text-[10px] font-semibold text-ink-100">
              <span>09:41</span>
              <div className="flex items-center gap-1 opacity-90">
                <SignalSvg /> <WifiSvg /> <BatterySvg />
              </div>
            </div>

            {screen === "home" ? <HomeContent /> : <ChatContent />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HomeContent() {
  return (
    <>
      <div className="flex items-center justify-between px-5 pb-2 pt-5">
        <h3 className="text-2xl font-bold tracking-tight text-ink-100">Chats</h3>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.04] text-ink-300">
          <Settings className="h-4 w-4" />
        </div>
      </div>

      <div className="flex-1 space-y-1.5 px-2.5 pt-1">
        <ChatRow name="Alex Carter" preview="Got it. Lunch at 1 still ok? 🥗" time="now" unread={2} verified />
        <ChatRow name="Priya · work" preview="Sent you the keys, scan when you can" time="12m" />
        <ChatRow name="Mum" preview="Don't forget the appointment Thursday x" time="08:22" verified />
        <ChatRow name="Jamie" preview="·  privio1:7a3f9c2bxyz" time="Yest" />
        <ChatRow name="Dev group" preview="Pushed the relay node to staging" time="23 May" />
      </div>

      <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-[18px] bg-grad-primary px-3.5 py-2.5 text-[11px] font-semibold text-white shadow-glow">
        <UserPlus className="h-3.5 w-3.5" />
        Add contact
      </div>
    </>
  );
}

function ChatRow({
  name,
  preview,
  time,
  unread,
  verified,
}: {
  name: string;
  preview: string;
  time: string;
  unread?: number;
  verified?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-2xl bg-ink-850 px-2.5 py-2.5 ring-1 ring-white/[0.02]">
      <div className="relative">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-grad-avatar text-[13px] font-bold text-white">
          {name.charAt(0)}
        </div>
        {verified && (
          <div className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-ink-900">
            <Shield className="h-2 w-2 text-emerald-400" />
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="truncate text-[12px] font-semibold text-ink-100">{name}</span>
          <span className="ml-auto text-[9px] text-ink-400">{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="truncate text-[11px] text-ink-300">{preview}</span>
          {unread ? (
            <span className="ml-auto flex h-4 min-w-[16px] items-center justify-center rounded-full bg-violet-600 px-1 text-[9px] font-bold text-white shadow-[0_4px_10px_-2px_rgba(124,58,237,0.6)]">
              {unread}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ChatContent() {
  return (
    <>
      <div className="flex items-center gap-2 border-b border-white/[0.04] bg-ink-850/80 px-3 py-2.5 backdrop-blur">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-grad-avatar text-xs font-bold text-white">
          A
        </div>
        <div className="flex-1">
          <div className="text-[12px] font-semibold text-ink-100">Alex Carter</div>
          <div className="flex items-center gap-1 text-[9px] text-ink-400">
            <Lock className="h-2.5 w-2.5 text-emerald-400" />
            End-to-end encrypted · privio1:7a3f9c2b
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-1 overflow-hidden px-3 py-3">
        <div className="my-1 flex justify-center">
          <span className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[8px] font-medium uppercase tracking-[0.14em] text-ink-400">
            Today
          </span>
        </div>
        <Bubble dir="in" text="Hey — got a sec? Want to send you the new key" time="09:31" />
        <Bubble dir="out" text="Yep go for it" time="09:32 · ✓✓" />
        <Bubble dir="in" text="Cool, scan from QR" time="09:32" />
        <Bubble dir="out" text="Done. Safety number matches ✅" time="09:38 · ✓✓" />
      </div>

      <div className="flex items-center gap-2 px-3 py-3">
        <div className="flex-1 rounded-[18px] bg-ink-800 px-3 py-2.5 text-[11px] text-ink-400">
          Message
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-grad-primary text-white shadow-glow">
          <Send className="h-3.5 w-3.5" />
        </div>
      </div>
    </>
  );
}

function Bubble({ dir, text, time }: { dir: "in" | "out"; text: string; time: string }) {
  const out = dir === "out";
  return (
    <div className={`flex ${out ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[78%] rounded-2xl px-3 py-1.5 text-[11px] leading-snug ${
          out
            ? "bg-grad-primary text-white shadow-[0_8px_20px_-8px_rgba(124,58,237,0.5)] rounded-br-[4px]"
            : "bg-ink-800 text-ink-100 rounded-bl-[4px]"
        }`}
      >
        {text}
        <div className={`mt-0.5 text-[8px] ${out ? "text-white/70" : "text-ink-400"}`}>{time}</div>
      </div>
    </div>
  );
}

const SignalSvg = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M2 22h20l-10-18z" /></svg>
);
const WifiSvg = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M2 17h4v3H2zM8 14h4v6H8zM14 11h4v9h-4zM20 8h2v12h-2z" /></svg>
);
const BatterySvg = () => (
  <svg width="14" height="10" viewBox="0 0 24 14" fill="none">
    <rect x="1" y="1" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <rect x="3" y="3" width="14" height="8" rx="1" fill="currentColor" />
  </svg>
);
