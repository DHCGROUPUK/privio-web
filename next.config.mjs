/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoBase = isProd ? "/privio-web" : "";

const nextConfig = {
  output: "export",
  basePath: repoBase,
  assetPrefix: repoBase || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
