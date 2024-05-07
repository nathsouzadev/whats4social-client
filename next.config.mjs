/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        TWITTER_API_KEY: process.TWITTER_API_KEY,
        REDIRECT_URI: process.REDIRECT_URI,
        TWITTER_API_SECRET: process.TWITTER_API_SECRET,
    }
};

export default nextConfig;
