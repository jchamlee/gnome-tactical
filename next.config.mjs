/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages works best with static exports or edge runtime setups
  images: {
    unoptimized: true, // Required for easy hosting on Cloudflare Pages static/edge
  },
};

export default nextConfig;