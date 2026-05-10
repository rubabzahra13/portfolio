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
        // GitHub-inspired color scheme (matching Villi AI / portfolio theme)
        background: "#0d1117",
        surface: "#161b22",
        elevated: "#1c2128",
        subtle: "#21262d",
        border: "#30363d",
        'border-strong': "#444c56",
        accent: "#58a6ff",  // GitHub blue
        secondary: "#3fb950",  // GitHub green
        tertiary: "#79c0ff",  // Light blue
        danger: "#f85149",  // Red
        warning: "#d29922",  // Yellow
        success: "#3fb950",  // Green
        text: {
          primary: "#e6edf3",
          secondary: "#c9d1d9",
          muted: "#9198a1",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        focus: "0 0 0 3px rgba(56, 139, 253, 0.35)",
        card: "0 1px 0 rgba(255, 255, 255, 0.04) inset, 0 8px 24px rgba(1, 4, 9, 0.45)",
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;