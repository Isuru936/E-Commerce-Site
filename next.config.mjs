/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "max-themes.net",
      "example.com",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
};

export default nextConfig;
