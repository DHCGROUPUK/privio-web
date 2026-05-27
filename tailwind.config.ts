import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // === Privio palette, mirroring the Android app's Compose theme ===
      colors: {
        ink: {
          50: "#F7F7FC",
          100: "#E5E5F0",
          200: "#B8B8C8",
          300: "#9494A8",
          400: "#6B6B80",
          500: "#3D3D55",
          600: "#2A2A3D",
          700: "#1E1E2E",
          800: "#161622",
          850: "#101018",
          900: "#0A0A0F",
        },
        violet: {
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
        },
        cyan: {
          400: "#22D3EE",
          500: "#06B6D4",
        },
        emerald: {
          400: "#34D399",
        },
        rose: {
          500: "#F43F5E",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
        "grad-avatar": "linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)",
        "grad-shine":
          "radial-gradient(1200px 700px at 12% 8%, rgba(124,58,237,.22), transparent 60%)",
      },
      boxShadow: {
        glow: "0 14px 40px -8px rgba(124,58,237,.55)",
        "glow-cyan": "0 14px 40px -8px rgba(34,211,238,.45)",
        card: "0 30px 60px -25px rgba(0,0,0,.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(124,58,237,.45)" },
          "50%": { boxShadow: "0 0 0 20px rgba(124,58,237,0)" },
        },
        gridScroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(40px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
        pulseGlow: "pulseGlow 2.5s ease-out infinite",
        gridScroll: "gridScroll 8s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
