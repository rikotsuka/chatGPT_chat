/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  presets: ['next/babel', '@babel/preset-typescript'],
  server: {
    port: 3000, // ポート番号を変更する
    trailingSlash: true,
  },
};

