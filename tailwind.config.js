/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	screens: {
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)"
	},
  	extend: {
  		colors: {
  			primary: "#1c1c22",
			accent:{
				DEFAULT: "#f97316",
				hover:"##fbbf24"
			},
			logo: {
				DEFAULT : " #ea580c",
				hover: "#f97316",
				
			}
  			
  		},
  			
  	}
  },
  plugins: [require("tailwindcss-animate")],
};