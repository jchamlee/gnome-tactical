/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export plain static assets so Cloudflare Pages can serve the site directly.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
