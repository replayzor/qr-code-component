/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				lightGray: "hsl(212, 45%, 89%)",
				grayBlue: "hsl(220, 15%, 55%)",
				darkBlue: "hsl(218, 44%, 22%)",
			},
			fontFamily: {
				Outfit: ["Outfit", "sans-serif"],
			},
		},
	},
	plugins: [],
};
