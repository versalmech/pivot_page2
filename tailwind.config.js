/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Obsidian Canvas & Titanium Infrastructure Base
        canvas: '#080C10',
        panel: '#0E131F',
        panelHover: '#141B2D',
        borderSubtle: '#1E293B',
        borderCrisp: '#27272A',

        // Glare-Free Technical Typography Scale
        textMain: '#E2E8F0',   // Platinum Slate (Softened from pure white to eliminate glare)
        textSub: '#94A3B8',    // Slate-400 for low-fatigue reading
        textMuted: '#64748B',  // Slate-500 technical metadata

        // Institutional Accent & Quantitative Risk Indicators
        accent: '#38BDF8',
        accentMuted: 'rgba(56, 189, 248, 0.08)',
        accentBorder: 'rgba(56, 189, 248, 0.20)',
        positiveR: '#10B981',  // Stark Emerald for positive alpha
        drawdownR: '#EF4444',  // Muted Crimson for circuit limits
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
