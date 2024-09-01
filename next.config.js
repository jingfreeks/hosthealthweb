/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    DEV_BASE_URL:process.env.DEV_BASE_URL
  }
}

module.exports = nextConfig
