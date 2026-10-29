/** @type {import('next').NextConfig} */
// BASE_PATH is only set for the GitHub Pages preview, which serves from /<repo>/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};
