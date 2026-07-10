/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f172a',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        teal: {
          DEFAULT: '#217d96',
          50: '#eff7fa',
          100: '#d9ecf3',
          200: '#b3d9e8',
          300: '#7dbfd7',
          400: '#4fa3be',
          500: '#2f8fad',
          600: '#217d96',
          700: '#1a6678',
          800: '#175266',
          900: '#164556',
        },
        accent: {
          orange: '#f97316',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(15, 23, 42, 0.08)',
        card: '0 8px 32px -8px rgba(15, 23, 42, 0.12)',
        float: '0 16px 48px -12px rgba(15, 23, 42, 0.15)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
