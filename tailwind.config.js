/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        rubik: ['var(--font-rubik)']
      },
      colors: {
        'cp0': {
          300: '#FFDD33',
          400: '#fcd100',
          500: '#E0BB00',
          600: '#B89900'
        }
      },
      dropShadow: {
        'md': '0 10px 10px rgb(184, 153, 0)',
        'xl': '0 35px 35px rgb(184, 153, 0)'
      },
      animation: {
        hideIntro: 'hide 0.9s ease-in-out forwards',
        logoBlur: 'blur 10s ease-in-out infinite',
        gradient: 'animatedgradient 6s ease infinite alternate',
        shadow: "shadow 8s ease infinite alternate",
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
        },
        shadow: {
          "0%": {
            filter: "drop-shadow(0px 15px 40px #FFDD33)",
          },
          "15%": {
            filter: "drop-shadow(-15px 5px 25px #B89900)",
          },
          "30%": {
            filter: "drop-shadow(-10px -5px 35px #FFDD33)",
          },
          "50%": {
            filter: "drop-shadow(0px -5px 40px #fcd100)",
          },
          "80%": {
            filter: "drop-shadow(10px -5px 25px #E0BB00)",
          },
          "100%": {
            filter: "drop-shadow(5px 5px 30px #FFDD33)",
          },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
