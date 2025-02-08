import type { Config } from 'tailwindcss';

const config: Config = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./styles/**/*.{css}',
	],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Poppins'],
			},
		},
	},
	plugins: [],
};

export default config;
