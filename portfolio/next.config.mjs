/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'github-readme-stats.vercel.app',
      'github-readme-activity-graph.vercel.app'
    ],
  },
};

export default nextConfig;