import { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export', // Menambahkan opsi untuk export statis

	// Konfigurasi lainnya (opsional)
	reactStrictMode: true, // Memastikan mode React Strict aktif
	swcMinify: true, // Mengaktifkan SWC minifier untuk optimasi build

	// Menyesuaikan domain untuk gambar (jika ada gambar dari domain eksternal)
	images: {
		unoptimized: true, // Harus diaktifkan jika Anda menggunakan export statis
	},

	// Jika Anda menggunakan path base untuk deploy di subdirektori
	assetPrefix: './',
	basePath: '',

	// Custom header (opsional)
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
					{ key: 'Content-Security-Policy', value: "default-src 'self';" },
				],
			},
		];
	},

	// Menangani redirect atau rewrites (opsional)
	async redirects() {
		return [
			{
				source: '/old-route',
				destination: '/new-route',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
