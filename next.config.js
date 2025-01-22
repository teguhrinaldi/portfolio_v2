/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export', // Konfigurasi untuk static export
	reactStrictMode: true, // Mode strict untuk React
	images: {
		unoptimized: true, // Diperlukan untuk static export jika menggunakan gambar
	},
	assetPrefix: './', // Untuk path relatif
	basePath: '', // Kosongkan jika tidak menggunakan subdirektori
};

module.exports = nextConfig;
