import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'localhost',
            },
            {
                hostname: 'your-strapi-domain.com',
            },
        ],
    },
};

export default nextConfig;
