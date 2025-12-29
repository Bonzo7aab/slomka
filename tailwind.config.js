/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			lato: ['var(--font-lato)']
  		},
  		colors: {
  			cp0: {
  				'300': '#FFDD33',
  				'400': '#fcd100',
  				'500': '#E0BB00',
  				'600': '#B89900'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			'2sm': '0 0 10px rgb(184, 153, 0)'
  		},
  		dropShadow: {
  			sm: '0 1px 3px rgb(184, 153, 0)',
  			md: '0 10px 10px rgb(184, 153, 0)',
  			xl: '0 35px 35px rgb(184, 153, 0)'
  		},
  		animation: {
  			hideIntro: 'hide 0.9s ease-in-out forwards',
  			logoBlur: 'blur 10s ease-in-out infinite',
  			gradient: 'animatedgradient 6s ease infinite alternate',
  			shadow: 'shadow 8s ease infinite alternate'
  		},
  		keyframes: {
  			hide: {
  				'0%': {
  					height: '100%',
  					opacity: '1'
  				},
  				'60%': {
  					height: '100%',
  					opacity: '0'
  				},
  				'100%': {
  					height: '0%',
  					opacity: '0'
  				}
  			},
  			blur: {
  				'0%, 100%': {
  					filter: 'blur(0px)'
  				},
  				'40%': {
  					filter: 'blur(0.5px)'
  				},
  				'50%': {
  					filter: 'blur(2px)'
  				},
  				'60%': {
  					filter: 'blur(0.5px)'
  				}
  			},
  			animatedgradient: {
  				'0%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				},
  				'100%': {
  					backgroundPosition: '0% 50%'
  				}
  			},
  			shadow: {
  				'0%': {
  					filter: 'drop-shadow(0px 15px 40px #FFDD33)'
  				},
  				'15%': {
  					filter: 'drop-shadow(-15px 5px 25px #B89900)'
  				},
  				'30%': {
  					filter: 'drop-shadow(-10px -5px 35px #FFDD33)'
  				},
  				'50%': {
  					filter: 'drop-shadow(0px -5px 40px #fcd100)'
  				},
  				'80%': {
  					filter: 'drop-shadow(10px -5px 25px #E0BB00)'
  				},
  				'100%': {
  					filter: 'drop-shadow(5px 5px 30px #FFDD33)'
  				}
  			}
  		},
  		backgroundSize: {
  			'300%': '300%'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
