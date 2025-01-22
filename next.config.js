/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export', // Mengganti `next export` dengan `output: export` untuk static export
	reactStrictMode: true, // Mode strict untuk React
	swcMinify: true, // Mengaktifkan minifikasi untuk performa
	images: {
		unoptimized: true, // Diperlukan untuk export statis
	},
	assetPrefix: './', // Untuk mengatur path relatif jika diperlukan
	basePath: '', // Hapus jika tidak ada subdirektori pada deploy
};

module.exports = nextConfig;
