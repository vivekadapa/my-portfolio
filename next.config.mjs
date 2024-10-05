/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com', // Just the domain name
                pathname: '/**', // Match the pattern for the path
            },
        ],
    },
};

export default nextConfig;