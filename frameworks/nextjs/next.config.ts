import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    // This sample sits inside a repository with other lock files; build it as its own project.
    turbopack: {
        root: __dirname,
    },
};

export default nextConfig;
