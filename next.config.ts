/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	basePath: '',
	trailingSlash: true, // Pastikan trailing slash ditambahkan pada URL
};

module.exports = nextConfig;
