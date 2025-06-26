
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
				background: '#ffffff',
				foreground: '#2f3951',
				primary: {
					DEFAULT: '#2f3951',
					foreground: '#ffffff',
					50: '#f8f9fa',
					100: '#e9ecef',
					200: '#dee2e6',
					300: '#ced4da',
					400: '#6c757d',
					500: '#495057',
					600: '#343a40',
					700: '#2f3951',
					800: '#212529',
					900: '#1a1d23'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: '#e5b881',
					foreground: '#2f3951',
					50: '#fdf8f3',
					100: '#f9f0e4',
					200: '#f2ddc4',
					300: '#e8c59e',
					400: '#dfa876',
					500: '#e5b881',
					600: '#c59660',
					700: '#a37b4d',
					800: '#85633f',
					900: '#6d5135'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#f8f9fa',
					foreground: '#6c757d'
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
					DEFAULT: '#2f3951',
					foreground: '#FFFFFF',
					primary: '#e5b881',
					'primary-foreground': '#2f3951',
					accent: '#495057',
					'accent-foreground': '#FFFFFF',
					border: '#495057',
					ring: '#e5b881'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
