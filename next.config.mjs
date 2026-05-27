// Strict CSP — locked down for a static marketing site.
//   - script-src: 'self' + 'unsafe-inline' for Next's hydration boot (no user input on the page,
//     so XSS surface is essentially zero; can swap to nonce-based CSP later if we add forms).
//   - style-src:  'self' + 'unsafe-inline' for Framer Motion's runtime style injection
//     and Google Fonts' stylesheet domain.
//   - frame-ancestors 'none' kills clickjacking outright.
//   - base-uri 'self' blocks <base> tag injection.
//   - upgrade-insecure-requests forces any straggler http:// into https://.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Force HTTPS for 2 years across all subdomains, eligible for browser preload list.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Block MIME-type sniffing.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Belt-and-braces clickjacking protection (CSP frame-ancestors already covers modern browsers).
  { key: "X-Frame-Options", value: "DENY" },
  // Don't leak the full URL when users click outbound links.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Deny powerful browser APIs we don't use.
  {
    key: "Permissions-Policy",
    value:
      "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()",
  },
  // Process-isolate the page (mitigates Spectre-class side channels).
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Block our resources from being embedded cross-origin.
  { key: "Cross-Origin-Resource-Policy", value: "same-site" },
  // Stop the X-XSS auditor (deprecated, causes more bugs than it fixes).
  { key: "X-XSS-Protection", value: "0" },
  // The actual CSP.
  { key: "Content-Security-Policy", value: csp },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() {
    return [
      // Apply security headers to every route.
      { source: "/(.*)", headers: securityHeaders },
      // Long-cache immutable static assets — they hash on every build.
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
