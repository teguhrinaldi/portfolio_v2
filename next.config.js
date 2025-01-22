/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export', // Menghasilkan build statis
	reactStrictMode: true, // Menjalankan React Strict Mode untuk membantu menemukan masalah potensial
	images: {
		unoptimized: true, // Memastikan gambar tidak dioptimalkan, sesuai untuk build statis
	},
	assetPrefix: './', // Menyesuaikan path aset untuk penggunaan lokal
	basePath: '', // Jika menggunakan basePath untuk subdirektori, bisa diatur di sini
	trailingSlash: true, // Menambahkan trailing slash di akhir URL (memungkinkan akses yang lebih konsisten di server statis)
};

module.exports = nextConfig;
