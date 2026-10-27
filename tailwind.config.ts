import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "rgb(var(--brand-orange-rgb) / <alpha-value>)",
        graphite: "var(--bg-dark)",
        titanium: "var(--metal-highlight)",
        // Existing orange/slate utilities share the semantic palette.
        orange: Object.fromEntries([50,100,200,300,400,500,600,700,800,900,950].map(step => [step, "rgb(var(--brand-orange-rgb) / <alpha-value>)"])),
        slate: { 50: "#F5F6F7", 100: "#EBEDEF", 200: "#DDE1E5", 300: "#C9CDD2", 400: "#B4BAC2", 500: "#8E969F", 600: "#535B65", 700: "#394149", 800: "#252A30", 900: "#171A1E", 950: "#0F1113" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "Arial",
          "Helvetica",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 8px 24px rgb(0 0 0 / 0.16)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgb(201 205 210 / 0.06) 1px, transparent 1px), linear-gradient(90deg, rgb(201 205 210 / 0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
