import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'localhost',
            },
            {
                hostname: 'mevspecialist-cms.onrender.com',
            },
            {
                hostname: 'res.cloudinary.com',
            },
        ],
    },
};

export default nextConfig;
