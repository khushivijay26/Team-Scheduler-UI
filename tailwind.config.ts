import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        card: "#ffffff",
        border: "#e5e7eb",
        subtle: "#f7f7f7",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl: "0.9rem",
        '2xl': "1.25rem"
      }
    },
  },
  plugins: [],
} satisfies Config
