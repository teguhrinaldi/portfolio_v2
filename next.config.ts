/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export', // Pastikan export statis diaktifkan
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	assetPrefix: './', // Gunakan './' untuk file yang di-export agar relatif terhadap folder
	basePath: '', // Tidak perlu basePath jika aplikasi berada di root
};

module.exports = nextConfig;
