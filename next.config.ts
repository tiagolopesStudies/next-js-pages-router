import type { NextConfig } from 'next'
import { withContentlayer } from 'next-contentlayer'

const nextConfig: NextConfig = {
  turbopack: {},
  reactStrictMode: true
}

export default withContentlayer(nextConfig)
