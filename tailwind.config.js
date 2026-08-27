/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070f1e',
          900: '#0B192C',
          850: '#0e2038',
          800: '#132845',
          700: '#1E3E62',
          600: '#2A5384',
          500: '#3D6F9E',
        },
        electric: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#3b82f6',
          500: '#0084FF',
          600: '#006ed6',
          700: '#0058b0',
        },
        accent: {
          cyan: '#00D2FF',
          neon: '#00F0FF',
          green: '#10B981',
          amber: '#F59E0B',
        },
        cyber: {
          950: '#040814',
          900: '#070F22',
          850: '#0B1733',
          800: '#102146',
          700: '#183164',
          cyan: '#00E5FF',
          blue: '#0084FF',
          teal: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(11, 25, 44, 0.06), 0 2px 6px -2px rgba(11, 25, 44, 0.04)',
        'card': '0 10px 30px -4px rgba(11, 25, 44, 0.08), 0 4px 12px -2px rgba(11, 25, 44, 0.03)',
        'card-hover': '0 20px 40px -6px rgba(0, 132, 255, 0.18), 0 8px 20px -4px rgba(11, 25, 44, 0.08)',
        'glow': '0 0 25px rgba(0, 132, 255, 0.35)',
        'glow-cyan': '0 0 30px -4px rgba(0, 229, 255, 0.45), 0 0 10px -2px rgba(0, 229, 255, 0.3)',
        'glow-blue': '0 0 35px -5px rgba(0, 132, 255, 0.5), 0 0 15px -2px rgba(0, 132, 255, 0.35)',
        'glow-emerald': '0 0 25px -3px rgba(16, 185, 129, 0.45)',
        'cyber-border': 'inset 0 0 0 1px rgba(0, 229, 255, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 12px rgba(0,229,255,0.6))' },
          '50%': { opacity: '0.75', filter: 'drop-shadow(0 0 4px rgba(0,229,255,0.25))' },
        },
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'radar-sweep': 'radar-sweep 8s linear infinite',
      }
    },
  },
  plugins: [],
}
