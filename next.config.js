/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	// Hapus assetPrefix
	basePath: '',
};

module.exports = nextConfig;
