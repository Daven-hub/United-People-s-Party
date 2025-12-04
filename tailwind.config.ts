import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					light: 'hsl(var(--primary-light))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					dark: 'hsl(var(--secondary-dark))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					light: 'hsl(var(--accent-light))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-accent': 'var(--gradient-accent)',
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				},
				floatMagic: {
					"0%, 100%": {
						transform: "translateY(0px) rotate(0deg) scale(1)",
					},
					"25%": {
						transform: "translateY(-6px) rotate(-1deg) scale(1.01)",
					},
					"50%": {
						transform: "translateY(3px) rotate(1deg) scale(0.99)",
					},
					"75%": {
						transform: "translateY(-4px) rotate(0deg) scale(1.02)",
					},
				},
				fadeZoom: {
					"0%": {
						opacity: "0",
						transform: "scale(0.95)",
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)",
					},
				},
				fadeUpSlow: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '0.2', transform: 'translateY(0)' },
				},
				'bounce-horizontal': {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(5px)' },
				},
				fadeInScale: {
					'0%': { opacity: "0", transform: 'scale(0.95)' },
					'100%': { opacity: "1", transform: 'scale(1)' },
				  },
			},
			'scroll-line': {
				'0%': { transform: 'translateX(-100%)' },
				'100%': { transform: 'translateX(100%)' },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'fadeInUp': "fadeInUp 0.8s ease-out forwards",
				'zoomIn': "zoomIn 1s ease-out forwards",
				'floatMagic': "floatMagic 6s ease-in-out infinite",
				'fadeZoom': "fadeZoom 1s ease-out forwards",
				'fadeUp': 'fadeUp 1s ease-out forwards',
				'iconPulse': 'iconPulse 3s ease-in-out infinite',
				'fadeUpSlow': 'fadeUpSlow 2.5s ease-in-out forwards',
				'bounce-horizontal': 'bounce-horizontal 1s infinite',
				'scroll-line': 'scroll-line 3s linear infinite',
				fadeInScale: 'fadeInScale 0.3s ease-out',
			},
			
		}
	},
	plugins: [require("tailwindcss-animate")],
	future: {
		hoverOnlyWhenSupported: true,
	  },
} satisfies Config;
