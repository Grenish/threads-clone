/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
  	container: {
  		center: 'true',
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	fontSize: {
  		'heading1-bold': [\n        "36px",\n        {\n          lineHeight: "140%",\n          fontWeight: "700",\n        },\n      ],
  		'heading1-semibold': [\n        "36px",\n        {\n          lineHeight: "140%",\n          fontWeight: "600",\n        },\n      ],
  		'heading2-bold': [\n        "30px",\n        {\n          lineHeight: "140%",\n          fontWeight: "700",\n        },\n      ],
  		'heading2-semibold': [\n        "30px",\n        {\n          lineHeight: "140%",\n          fontWeight: "600",\n        },\n      ],
  		'heading3-bold': [\n        "24px",\n        {\n          lineHeight: "140%",\n          fontWeight: "700",\n        },\n      ],
  		'heading4-medium': [\n        "20px",\n        {\n          lineHeight: "140%",\n          fontWeight: "500",\n        },\n      ],
  		'body-bold': [\n        "18px",\n        {\n          lineHeight: "140%",\n          fontWeight: "700",\n        },\n      ],
  		'body-semibold': [\n        "18px",\n        {\n          lineHeight: "140%",\n          fontWeight: "600",\n        },\n      ],
  		'body-medium': [\n        "18px",\n        {\n          lineHeight: "140%",\n          fontWeight: "500",\n        },\n      ],
  		'body-normal': [\n        "18px",\n        {\n          lineHeight: "140%",\n          fontWeight: "400",\n        },\n      ],
  		'body1-bold': [\n        "18px",\n        {\n          lineHeight: "140%",\n          fontWeight: "700",\n        },\n      ],
  		'base-regular': [\n        "16px",\n        {\n          lineHeight: "140%",\n          fontWeight: "400",\n        },\n      ],
  		'base-medium': [\n        "16px",\n        {\n          lineHeight: "140%",\n          fontWeight: "500",\n        },\n      ],
  		'base-semibold': [\n        "16px",\n        {\n          lineHeight: "140%",\n          fontWeight: "600",\n        },\n      ],
  		'base1-semibold': [\n        "16px",\n        {\n          lineHeight: "140%",\n          fontWeight: "600",\n        },\n      ],
  		'small-regular': [\n        "14px",\n        {\n          lineHeight: "140%",\n          fontWeight: "400",\n        },\n      ],
  		'small-medium': [\n        "14px",\n        {\n          lineHeight: "140%",\n          fontWeight: "500",\n        },\n      ],
  		'small-semibold': [\n        "14px",\n        {\n          lineHeight: "140%",\n          fontWeight: "600",\n        },\n      ],
  		'subtle-medium': [\n        "12px",\n        {\n          lineHeight: "16px",\n          fontWeight: "500",\n        },\n      ],
  		'subtle-semibold': [\n        "12px",\n        {\n          lineHeight: "16px",\n          fontWeight: "600",\n        },\n      ],
  		'tiny-medium': [\n        "10px",\n        {\n          lineHeight: "140%",\n          fontWeight: "500",\n        },\n      ],
  		'x-small-semibold': [\n        "7px",\n        {\n          lineHeight: "9.318px",\n          fontWeight: "600",\n        },\n      ]
  	},
  	extend: {
  		colors: {
  			'primary-500': '#877EFF',
  			'secondary-500': '#FFB620',
  			blue: '#0095F6',
  			'logout-btn': '#FF5A5A',
  			'navbar-menu': 'rgba(16, 16, 18, 0.6)',
  			'dark-1': '#000000',
  			'dark-2': '#121417',
  			'dark-3': '#101012',
  			'dark-4': '#1F1F22',
  			'light-1': '#FFFFFF',
  			'light-2': '#EFEFEF',
  			'light-3': '#7878A3',
  			'light-4': '#5C5C7B',
  			'gray-1': '#697C89',
  			glassmorphism: 'rgba(16, 16, 18, 0.60)'
  		},
  		boxShadow: {
  			'count-badge': '0px 0px 6px 2px rgba(219, 188, 159, 0.30)',
  			'groups-sidebar': '-30px 0px 60px 0px rgba(28, 28, 31, 0.50)'
  		},
  		screens: {
  			xs: '400px'
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
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
