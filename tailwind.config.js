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
        'cp1': '#FFFCF2',
        'cp2': '#CCC5B9',
        'cp3': '#403D39',
        'cp4': '#252422',
        'cp5': {
          'normal': '#EB5E28',
          'dark': '#C15252'
        }
      },
      dropShadow: {
        'md': '0 10px 10px rgba(235, 94, 40, 0.25)',
        'xl': '0 35px 35px rgba(235, 94, 40, 0.25)'
      },
      animation: {
        'hide-intro': 'hide 0.9s ease-in-out forwards',
        'logo-blur': 'blur 10s ease-in-out infinite',
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
      keyframes: {
        hide: {
          '0%': { height: '100%', opacity: 1 },
          '60%': { opacity: 0 },
          '100%': { height: '0%', opacity: 0 },
        },
        blur: {
          '0%, 100%': { filter: 'blur(0px)'},
          '40%': { filter: 'blur(0.5px)' },
          '50%': { filter: 'blur(2px)' },
          '60%': { filter: 'blur(0.5px)' },
        },
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
