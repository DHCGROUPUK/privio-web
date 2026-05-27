import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="text-[15px] font-semibold tracking-tight text-ink-100">Privio</span>
            </div>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-ink-400">
              A serverless, end-to-end encrypted Android messenger. No accounts. No phone numbers. Open source.
            </p>
          </div>

          <FooterCol
            title="Product"
            links={[
              { label: "How it works", href: "#how" },
              { label: "Features", href: "#features" },
              { label: "Compare", href: "#compare" },
              { label: "FAQ", href: "#faq" },
            ]}
          />

          <FooterCol
            title="Resources"
            links={[
              { label: "Download APK", href: "https://github.com/DHCGROUPUK/Privio/releases/tag/latest-debug", external: true },
              { label: "GitHub", href: "https://github.com/DHCGROUPUK/Privio", external: true },
              { label: "Threat model", href: "https://github.com/DHCGROUPUK/Privio/blob/main/THREAT_MODEL.md", external: true },
              { label: "README", href: "https://github.com/DHCGROUPUK/Privio#readme", external: true },
            ]}
          />

          <FooterCol
            title="Built on"
            links={[
              { label: "Signal Protocol", href: "https://signal.org/docs/", external: true },
              { label: "SQLCipher", href: "https://www.zetetic.net/sqlcipher/", external: true },
              { label: "Jetpack Compose", href: "https://developer.android.com/jetpack/compose", external: true },
              { label: "libsignal-android", href: "https://github.com/signalapp/libsignal", external: true },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start gap-3 border-t border-white/[0.04] pt-7 text-[12.5px] text-ink-400 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Privio · Pre-alpha. Use at your own risk.</span>
          <span>Made with privacy in mind in the UK.</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className="text-[14px] text-ink-200 transition-colors hover:text-ink-100"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
