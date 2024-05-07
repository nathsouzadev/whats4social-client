/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        TWITTER_API_KEY: process.env.TWITTER_API_KEY,
        REDIRECT_URI: process.env.REDIRECT_URI,
        TWITTER_API_SECRET: process.env.TWITTER_API_SECRET,
    }
};

export default nextConfig;
