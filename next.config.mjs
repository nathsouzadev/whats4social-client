/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        TWITTER_API_KEY: process.env.TWITTER_API_KEY,
        REDIRECT_URI: process.env.REDIRECT_URI,
        TWITTER_API_SECRET: process.env.TWITTER_API_SECRET,
        TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET,
        TWITTER_CLIENT_ID: process.env.TWITTER_CLIENT_ID
    }
};

export default nextConfig;
