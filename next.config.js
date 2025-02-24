// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export', // Untuk output statis
	distDir: 'out', // Netlify akan mencari folder ini
	images: {
		unoptimized: true, // Jika ada error terkait image optimization
	},
};

module.exports = nextConfig;
