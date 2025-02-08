import type { Config } from 'tailwindcss';

const config: Config = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./styles/**/*.{css}', // ✅ Tambahkan kembali jika styling hilang
	],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

export default config;
