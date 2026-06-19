import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: "#7B35E8",
          light: "#9B5CF6",
          dark: "#5B1EC8",
        },
        blue: {
          primary: "#3B82F6",
        },
        cyan: {
          accent: "#00D4FF",
        },
        dark: {
          bg: "#0F172A",
          card: "#1E293B",
          border: "#334155",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #0F172A 0%, #1a0533 50%, #0F172A 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "glow-purple": "0 0 40px rgba(123, 53, 232, 0.4)",
        "glow-cyan": "0 0 40px rgba(0, 212, 255, 0.3)",
        "glow-blue": "0 0 40px rgba(59, 130, 246, 0.4)",
        "card-glow": "0 0 0 1px rgba(123, 53, 232, 0.2), 0 20px 60px rgba(123, 53, 232, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
