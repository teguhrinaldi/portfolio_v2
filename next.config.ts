import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export', // Untuk output statis
	distDir: 'out', // Netlify akan mencari folder ini
	images: {
		unoptimized: true, // Jika ada error terkait image optimization
	},
};

export default nextConfig;
