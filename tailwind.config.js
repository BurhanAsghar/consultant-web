/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B4EA2',
          hover: '#083D8C',
          dark: '#062E6F',
        },
        gold: {
          DEFAULT: '#C89B3C',
          accent: '#E6B84A',
        },
        orange: {
          accent: '#F59E0B',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          light: '#F8FAFC',
          hero: '#EEF5FF',
        },
        ink: {
          DEFAULT: '#1F2937',
          secondary: '#4B5563',
          muted: '#6B7280',
        },
        line: '#E5E7EB',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(6, 46, 111, 0.08)',
        softer: '0 2px 12px -2px rgba(6, 46, 111, 0.06)',
        lift: '0 20px 48px -12px rgba(6, 46, 111, 0.18)',
        glass: '0 8px 32px 0 rgba(6, 46, 111, 0.10)',
      },
      backgroundImage: {
        'route-lines': "url(\"data:image/svg+xml,%3Csvg%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'drift': 'drift 18s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-200' },
        },
      },
    },
  },
  plugins: [],
}
