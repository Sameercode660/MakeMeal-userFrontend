/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'product-assets.faasos.io',
                port: '',
                pathname: '/**', // Corrected pathname
            },
        ],
    },
};

export default nextConfig;

