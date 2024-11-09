/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['shecancode-website-dev.vercel.app', 'res.cloudinary.com', 'media.licdn.com', 'firebasestorage.googleapis.com'],
    },
};

export default nextConfig;
