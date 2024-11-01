/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'shecancode-website-dev.vercel.app',
            },
        ],
    },
};

export default nextConfig;
