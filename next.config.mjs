/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output produces a tiny self-contained server bundle in .next/standalone — ideal
  // for Docker / Railway: copy that dir + .next/static + public, run `node server.js`.
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
