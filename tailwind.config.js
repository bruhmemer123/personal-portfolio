/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        term: {
          bg: '#0a0d14',
          card: '#111520',
          hover: '#161c2b',
          border: '#1e293b',
          borderLight: '#334155',
          green: '#10b981',
          cyan: '#06b6d4',
          amber: '#f59e0b',
          red: '#ef4444',
          purple: '#a855f7',
          dim: '#64748b',
          text: '#e2e8f0',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-start infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
      },
      boxShadow: {
        'neon-green': '0 0 20px -3px rgba(16, 185, 129, 0.3)',
        'neon-cyan': '0 0 20px -3px rgba(6, 182, 212, 0.3)',
        'card-glow': '0 0 30px -5px rgba(16, 185, 129, 0.08)',
      }
    },
  },
  plugins: [],
}