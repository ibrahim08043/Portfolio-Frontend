import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans:    ["DM Sans", "sans-serif"],
        display: ["Syne", "sans-serif"],
        heading: ["Syne", "sans-serif"],
        space:   ["Syne", "sans-serif"],      // backward-compat
        mono:    ["JetBrains Mono", "monospace"],
      },
      colors: {
        // shadcn/Radix tokens
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT:               "hsl(var(--sidebar-background))",
          foreground:            "hsl(var(--sidebar-foreground))",
          primary:               "hsl(var(--sidebar-primary))",
          "primary-foreground":  "hsl(var(--sidebar-primary-foreground))",
          accent:                "hsl(var(--sidebar-accent))",
          "accent-foreground":   "hsl(var(--sidebar-accent-foreground))",
          border:                "hsl(var(--sidebar-border))",
          ring:                  "hsl(var(--sidebar-ring))",
        },
        // Axiom design tokens
        lime:    "#B5FF4D",
        rose:    "#FF3B6B",
        violet:  "#7C3AED",
        // semantic aliases kept for backward compat
        darkBg:        "var(--color-bg)",
        darkBg2:       "var(--color-surface)",
        surface2:      "var(--color-card)",
        lightText:     "var(--color-text)",
        secondaryText: "var(--color-muted-text)",
        blueprintBlue: "#B5FF4D",
        amberGold:     "#FF3B6B",
        softViolet:    "#7C3AED",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
        "slide-in": {
          from: { transform: "translateX(-8px)", opacity: "0" },
          to:   { transform: "translateX(0)", opacity: "1" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.3" },
          "50%":      { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "float":          "float 4s ease-in-out infinite",
        "blink":          "blink 1s step-end infinite",
        "slide-in":       "slide-in 0.3s ease-out",
        "pulse-slow":     "pulse-slow 3s ease-in-out infinite",
        "pulse-ring":     "pulse-slow 2s ease-in-out infinite",
        // Background animation orbs
        "orb-1":          "orb-1 38s ease-in-out infinite",
        "orb-2":          "orb-2 45s ease-in-out infinite",
        "orb-3":          "orb-3 29s ease-in-out infinite",
        "orb-4":          "orb-4 52s ease-in-out infinite",
        "orb-5":          "orb-5 23s ease-in-out infinite",
        "scan-line":      "scan-line 12s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
