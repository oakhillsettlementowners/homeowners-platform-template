import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Primary color palette - customize via setup script or manually
        // Default: Green (works well for community/nature themes)
        primary: {
          50: 'var(--primary-50, #f0fdf4)',
          100: 'var(--primary-100, #dcfce7)',
          200: 'var(--primary-200, #bbf7d0)',
          300: 'var(--primary-300, #86efac)',
          400: 'var(--primary-400, #4ade80)',
          500: 'var(--primary-500, #22c55e)',
          600: 'var(--primary-600, #16a34a)',
          700: 'var(--primary-700, #15803d)',
          800: 'var(--primary-800, #166534)',
          900: 'var(--primary-900, #14532d)',
          950: 'var(--primary-950, #052e16)',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'media',
};
export default config;

